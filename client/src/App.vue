<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginComponent/>
    <PostComponent />
    <hr>
    <RegisterComponent/>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';

export default {
  name: 'app',
  components: {
    PostComponent,
    RegisterComponent,
    LoginComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
