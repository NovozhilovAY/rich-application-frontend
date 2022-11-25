<template>
  <div class="container">
    <form class="form-signin" method="post"  @submit="registration">
      <h2 class="form-signin-heading">Registration</h2>
      <p v-if="invalidCredentials" class="err-field">{{this.errorMessage}}</p>
      <p>
        <input class="form-control" v-model="login" type="text" id="login" name="login" placeholder="Login" required="" autofocus="">
      </p>
      <p>
        <input class="form-control" v-model="password" type="password" id="password" name="password" placeholder="Password" required="">
      </p>
      <p>
        <input class="form-control" v-model="firstname" type="text" id="firstname" name="firstname" placeholder="First name" required="">
      </p>
      <p>
        <input class="form-control" v-model="lastname" type="text" id="lastname" name="lastname" placeholder="Last name" required="">
      </p>
      <p>
        <input class="form-control" v-model="country" type="text" id="country" name="country" placeholder="Country" required="">
      </p>
      <p>
        <input class="form-control" v-model="city" type="text" id="city" name="city" placeholder="City" required="">
      </p>
      <p>
        <button class="btn-submit" type="submit">Registration</button>
      </p>
    </form>
  </div>
</template>

<script>
import {RegistrationController} from "@/controller/RegistrationController";

export default {
  name: "RegistrationPage",
  data() {
    return {
      login: "",
      password: "",
      firstname: "",
      lastname: "",
      country: "",
      city: "",
      invalidCredentials: false,
      errorMessage:""
    }
  },
  methods: {
    registration: async function (e) {
      e.preventDefault();
      let response = await RegistrationController.registration(this.login, this.password, this.firstname, this.lastname, this.country, this.city);
      console.log(response.status);
      if (response.status === 200) {
        console.log(response.status);
        this.$router.push({path: '/', replace: true});
      } else {
        console.log(response);
        this.errorMessage = response.data.errors[0].message;
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
  padding: 10px 16% 10px;
  margin: 7% auto;
  border: 2px solid #000000;
  background: rgba(89,89,89, 0.3);
}

.form-signin-heading {
  color: black;
  font-family: Arial;
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

.btn-submit{
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

.btn-submit:hover{
  background-color: rgb(152, 152, 152);
}

.err-field{
  width: 100%;
  box-sizing: border-box;
  padding: .5rem .75rem;
  font-size: 1.25rem;
  color: white;
  background-color: #bb0000;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}
</style>