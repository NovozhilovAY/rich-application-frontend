<template>
  <div class="container">
    <form class="form-signin" method="post"  @submit="login">
      <p>
        <input class="form-control" v-model="username" type="text" id="username" name="username" placeholder="Username" required="" autofocus="">
      </p>
      <p>
        <input class="form-control" v-model="password" type="password" id="password" name="password" placeholder="Password" required="">
      </p>
      <p v-if="invalidCredentials" class="err-field">{{this.errorMessage}}</p>
      <p>
        <button class="btn-login" type="submit">Login</button>
      </p>
      <p>
        <button class="btn-registration" @click="routeToRegistration"><u>Регистрация</u></button>
      </p>
    </form>
  </div>
</template>

<script>
import {LoginController} from "@/controller/LoginController";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      invalidCredentials: false,
      errorMessage:""
    }
  },
  methods:{
    login: async function (e) {
      e.preventDefault();
      let response = await LoginController.login(this.username, this.password);
      console.log(response.status);
      if (response.status === 200) {
        console.log(response.status);
        this.$router.push({path: '/', replace: true});
      } else {
        console.log(response);
        this.errorMessage = response.data.message;
        this.invalidCredentials = true;
      }
    },
    routeToRegistration(){
      this.$router.push({path: '/registration', replace: true});
    }
  }
}
</script>

<style scoped>
.container{
  position: fixed;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-image: url("/src/assets/BackGround.png");
  background-position: center center;
  background-size: cover;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  width: 100%;
}

.form-signin{
  max-width: 330px;
  padding: 55px 11% 0px;
  margin: 19% auto 28%;
  border: 2px solid #000000;
  background: rgba(89,89,89, 0.3);
}

.form-control{
  box-sizing: border-box;
  width: 100%;
  padding: .5rem .75rem;
  font-size: 1.10rem;
  line-height: 2;
  color: #000000;
  background-color: rgb(183, 183, 183);
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  opacity: 1;
}

.form-control::placeholder{
  color: #000000;
}

.btn-login{
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  padding: .5rem .75rem;
  border-style: solid;
  border-width: 1px;
  border-radius: .25rem;
  font-size: 1.15rem;
  color: black;
}

.btn-login:hover{
  background-color: rgb(152, 152, 152);
}

.btn-registration {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  border:none;
  font-size: 1.15rem;
  background-color: rgba(54,175,89, 0);
  outline: none;
  color: #b4b4b4;
}

.btn-registration:hover{
  background-color: rgb(152, 152, 152);
  padding: 0;
}

.err-field{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: .0rem .75rem;
  font-size: 1.25rem;
  color: white;
  background-color: #bb0000;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}

</style>