<template>
  <div class="container">
    <form class="form-signin" method="post"  @submit="registration">
      <h2 class="form-signin-heading">Registration</h2>
      <p v-if="invalidCredentials" class="err-field">{{this.errorMessage}}</p>
      <p>
        <input v-model="login" type="text" id="login" name="login" class="form-control" placeholder="Login" required="" autofocus="">
      </p>
      <p>
        <input v-model="password" type="password" id="password" name="password" class="form-control" placeholder="Password" required="">
      </p>
      <p>
        <input v-model="firstname" type="text" id="firstname" name="firstname" class="form-control" placeholder="First name" required="">
      </p>
      <p>
        <input v-model="lastname" type="text" id="lastname" name="lastname" class="form-control" placeholder="Last name" required="">
      </p>
      <p>
        <input v-model="country" type="text" id="country" name="country" class="form-control" placeholder="Country" required="">
      </p>
      <p>
        <input v-model="city" type="text" id="city" name="city" class="form-control" placeholder="City" required="">
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
  background-color: #e5e5e5;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  width: 100%;
}

.form-signin{
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-control{
  box-sizing: border-box;
  width: 100%;
  padding: .5rem .75rem;
  font-size: 1.10rem;
  line-height: 2;
  color: #495057;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;

}

.btn-submit{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: .5rem .75rem;
  border-style: solid;
  border-width: 1px;
  border-radius: .25rem;
  font-size: 1.15rem;
  background-color: rgb(54,175,89);
  border-color: rgb(54,175,89);
  color: white;
}

.btn-submit:hover{
  background-color: rgb(54,150,89);
}

.err-field{
  width: 100%;
  box-sizing: border-box;
  padding: .5rem .75rem;
  font-size: 1.25rem;
  color: white;
  background-color: red;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}
</style>