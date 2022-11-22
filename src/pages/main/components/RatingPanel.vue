<template>
  <div class="main-container">
    <div class="btn-group">
      <UIButton @click="GetUsers">Мир</UIButton>
      <UIButton @click="GetUsersCountry">Страна</UIButton>
      <UIButton @click="GetUsersCity">Город</UIButton>
    </div>
    <div class="profile" v-for="profile in profiles" :key="profile.id" @onclick="ViewProfile(profile.id)">
      <div class="img"><img :src=profile.profilePicture /></div>
      <div><strong>Имя:</strong>{{profile.firstName}}</div>
      <div><strong>Фамилия:</strong>{{profile.lastName}}</div>
      <div><strong>Страна:</strong>{{profile.country}}</div>
      <div><strong>Деньги:</strong>{{profile.money}}</div>
    </div>
  </div>
</template>

<script>

import {UserController} from "@/controller/UserControler";

export default {
  name: "RatingPanel",
  data() {
    return {
      profiles: []
    }
  },
  methods: {
    GetUsers() {
      UserController.getUsers().then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
    }
  }
}
</script>

<style scoped>
.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
</style>