<template>
  <div class="modal-backdrop">

  <div class="profile">
    <div class="profile-left-card">
      <div class="profile-avatar">
        <img class="picture" :src=user.profilePicture>
      </div>
      <div class="profile-info">
        <input class="input-read" type="text" v-bind:placeholder="user.firstName" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.lastName" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.country" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.city" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.money + ' coins'" required="" readonly>
      </div>
    </div>
    <div class="profile-rating">
      <div class="input-read">City #{{user.cityRating}}</div>
      <div class="input-read">Country #{{user.countryRating}}</div>
      <div class="input-read">World #{{user.globalRating}}</div>
      <br>
    </div>
    <button class="btn-back" @click="exit"><span class="ico-back"></span>Back</button>
    <div class="prodile-description">
      <textarea class="input-status" type="text" v-bind:placeholder="user.status" required="" readonly></textarea>
      <textarea class="input-description" type="text" v-bind:placeholder="user.profileDescription" required="" readonly></textarea>
    </div>
  </div>
  </div>>
</template>

<script>
import {UserController} from "@/controller/UserControler";

export default {
  name: "UserProfileInfo",
  props:['id'],
  data(){
    return{
      user: {}
    }
  },
  mounted() {
    UserController.getUserById(this.id).then((resp)=>{
      this.user = resp.data;
    })
  },
  methods:{
    exit(){
      this.$emit("exit");
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  background-color: rgb(28, 28, 28);
  margin-top: 20px;
  margin-left: 15%;
  margin-right: 15%;
  width: 35%;
  height: 70%;
  padding: 25px 25px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10% 45% 45%;
}

.profile-left-card {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 4;
  height: 96%;
  margin: auto;
  background-color: rgb(89, 89, 89);
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.profile-info {
  margin-top: auto;
  margin-bottom: auto;
}

.input-read {
  margin: 10px 5% 10px 4%;
  width: 90%;
  font-family: Arial,serif;
  font-size: 1.5rem;
}

.input-read::-webkit-input-placeholder { /* WebKit browsers */
  color: black;
}

.picture {
  width: 100%;
  border-radius: 100%;
}

.profile-rating {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin-left: 20%;
  margin-right: 15%;
  margin-top: 10%;
  margin-bottom: 25%;
  background-color: rgb(89, 89, 89);
  padding: 30px;
  color: white;
  vertical-align: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.btn-back {
  width: 30%;
  height: 40px;
  font-family: Arial;
  font-size: 1.1rem;
  background-color: rgb(89, 89, 89);
  border-radius: 5px;
  color: white;
  margin-left: 70%;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.btn-back:hover {
  background-color: rgba(89, 89, 89, 0.8);
}

.ico-back {
  float: left;
  background-image: url("/src/assets/back.png");
  background-size: cover;
  background-position: bottom left;
  height: 20px;
  width: 20px;
}

.prodile-description {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 5;
  margin-left: 5%;
  background-color: rgb(89, 89, 89);
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.input-status {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  width: 90%;
  height: 30%;
  resize: none;
  font-family: Arial,serif;
  font-size: 1.5rem;
}

.input-status::-webkit-input-placeholder { /* WebKit browsers */
  color: black;
}

.input-status::-webkit-scrollbar {
  width: 0;
}

.input-description {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3%;
  width: 90%;
  height: 60%;
  resize: none;
  font-family: Arial,serif;
  font-size: 1.5rem;
}

.input-description::-webkit-input-placeholder { /* WebKit browsers */
  color: black;
}

.input-description::-webkit-scrollbar {
  width: 0;
}

</style>