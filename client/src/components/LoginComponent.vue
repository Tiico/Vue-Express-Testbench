<template>
  <div class="container">
    <h1>Login</h1>
    <p class="error" v-if="error">{{error}}</p>
    <flash-message class="flashmsg"></flash-message>
    <div class="create-user">
      <input type="text" id="username" v-model="username" @keyup.enter="login" placeholder="Enter username">
      <input type="text" id="password" v-model="password" @keyup.enter="login" placeholder="Enter password">
      <button v-on:click="login">Login!</button>
      <button v-on:click="logout">Logout!</button>
    </div>
  </div>
</template>

<script>
import LoginService from '../LoginService'
export default {
  name: 'LoginComponent',
  data() {
    return {
      error: '',
      username: '',
      password: '',
      token: null
    }
  },
  async created(){
    try{
      this.token = await LoginService.checkToken();
    }catch(err){
      this.error = err.message;
    }
  },
    methods: {
    async login(){
      let data = null;
      let message = null;
      await LoginService.auth(this.username, this.password).then(resData => {
        /* eslint-disable no-console */
          console.log(resData);
        /* eslint-enable no-console */
        data = resData.success
        message = resData.message
      })
      if(data){
        this.flash(message, 'success', {
        timeout: 2000
        })
      }else{
        this.flash(message, 'error', {
        timeout: 2000
        })
      }
    },
    async logout(){
      let data = null;
      let message = null;
      await LoginService.logout().then(resData => {
        data = resData.success,
        message = resData.message
      })
      if(data){
        this.flash(message, 'success', {
        timeout: 2000
        })
      }else{
        this.flash(message, 'error', {
        timeout: 2000
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flashmsg{
  position: absolute;
  z-index: -100;
  left: 1%;
  top: 33%;
}
div{
  z-index: 1;
}
div.container{
  max-width: 800px;
  margin: 0 auto;
}
p.error{
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.user{
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.username{
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
p.password{
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
