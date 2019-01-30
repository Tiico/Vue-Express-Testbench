<template>
  <div class="container">
    <h1>Registered users</h1>
    <p class="error" v-if="error">{{error}}</p>
    <div class="create-user">
      <label for="create-user">Create account:  </label>
      <input type="text" id="username" v-model="username" @keyup.enter="login" placeholder="Enter username">
      <input type="text" id="password" v-model="password" @keyup.enter="createUser" placeholder="Enter password">
      <button v-on:click="createUser">Create!</button>
    </div>
    <hr>
    <div class="users-container">
      <div class="user"
        v-for="(user, index) in users"
        v-bind:item="user"
        v-bind:index="index"
        v-bind:key="user._id"
        >
        <p class="username">Username: {{user.username}}</p>
        <p class="password">Password: {{user.password}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterService from '../RegisterService'
export default {
  name: 'RegisterComponent',
  data() {
    return {
      users: [],
      error: '',
      username: '',
      password: ''
    }
  },
  async created(){
    try{
      this.users = await RegisterService.getUsers();
    }catch(err){
      this.error = err.message;
    }
  },
    methods: {
    async createUser(){
      await RegisterService.insertUser(this.username, this.password);
      this.users = await RegisterService.getUsers();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
