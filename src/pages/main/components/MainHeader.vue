<template>
  <div class="header">
    <div class="left"><p class="title">Fobres</p></div>
    <div class="right"><button @click="logout()" class="exit-btn">выход</button></div>
  </div>
</template>

<script>
import {LoginController} from "@/controller/LoginController";

export default {
  name: "MainHeader",
  methods:{
    logout(){
      LoginController.logout();
      this.$router.push({path: '/login', replace: true});
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  height: 60px;
  width: auto;
  background-color: white;
  margin: 0px;
  box-sizing: border-box;
  border-bottom-style: solid;
  border-width: 1px;
}

.title{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 25px;
  font-weight: bolder;
  margin-left: 3%;
}

.exit-btn{
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 20px;
}

.exit-btn:hover{
  background-color: #e0e0e0;
}

.login-label{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
}

.center, .right, .left {
  display: flex;
  align-items: center;
  height: 100%;
}

.center{
  width: 20%;
  justify-content: right;
}

.left{
  width: 90%;
}

.right{
  width: 10%;
  justify-content: center;
}
</style>