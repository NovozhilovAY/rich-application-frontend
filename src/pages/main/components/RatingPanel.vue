<template>
  <div class="main-container">
    <div class="btn-group">
      <UIButton @click="GetUsers">Мир</UIButton>
      <UIButton @click="GetUsersCountry">Страна</UIButton>
      <UIButton @click="GetUsersCity">Город</UIButton>
    </div>
    <div class="profile" v-for="(profile, index) in profiles" :key="profile.id" @click="viewProfile(profile.id)">
      <div class="profile-info">
        <img class="avatar-profile" :src=profile.profilePicture />
        <div class="centr-info">
          <div><strong>Имя:</strong>{{profile.lastName}} {{profile.firstName}}</div>
          <div><strong>Страна:</strong>{{profile.country}}</div>
          <div><strong>Деньги:</strong>{{profile.money}}</div>
        </div>
        <div class="num-rating"><strong>№</strong>{{index + 1}}</div>
      </div>
    </div>
  </div>
  <UserProfileInfo @exit="closeProfileInfo" v-if="isUserClicked" :id=selectedUserId ></UserProfileInfo>
</template>

<script>

import {UserController} from "@/controller/UserControler";
import UserProfileInfo from "@/pages/main/components/modals/UserProfileInfo";
import UIButton from "@/UI/UIButton";

export default {
  name: "RatingPanel",
  components: {UIButton, UserProfileInfo},
  data() {
    return {
      profiles: [],
      selectedUserId: null,
      isUserClicked: false
    }
  },
  methods: {
    GetUsers() {
      UserController.getUsers().then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
    },
    GetUsersCountry() {
      let profile = JSON.parse(localStorage.getItem('profile'));
      UserController.getUsersCountry(profile.country).then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
    },
    GetUsersCity() {
      let profile = JSON.parse(localStorage.getItem('profile'));
      UserController.getUsersCity(profile.city).then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
      },
    viewProfile(id) {
      this.selectedUserId = id;
      this.isUserClicked = true;
    },
    closeProfileInfo() {
      this.selectedUserId = null;
      this.isUserClicked = false;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.profile {
  padding: 15px;
  border: 2px solid teal;
  margin: 15px 20%;
}

.profile-info {
  display: flex;
}

.avatar-profile {
  width: 65px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  display: inline;
}

.centr-info {
  display: inline;
  margin: auto;
}

.num-rating {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: inline;
  top: 50%;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  margin-top: 15px;
  cursor: pointer; /* Pointer/hand icon */
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