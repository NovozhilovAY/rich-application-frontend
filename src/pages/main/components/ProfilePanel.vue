<template>
  <div class="profile">
    <div class="profile-left-card">
      <div class="profile-avatar">
        <img class="picture" :src=user.profilePicture>
        <button class="avatar-redacting" @click="openUpdatePicturePanel"></button>
      </div>
      <div class="profile-info">
        <input class="input-read" type="text" v-bind:placeholder="user.firstName" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.lastName" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.country" required="" readonly>
        <input class="input-read" type="text" v-bind:placeholder="user.city" required="" readonly>
        <button class="edit-profile" @click="openUpdateProfilePanel">Edit profile</button>
      </div>
    </div>
    <div class="profile-rating">
      <div class="input-read">City #{{user.cityRating}}</div>
      <div class="input-read">Country #{{user.countryRating}}</div>
      <div class="input-read">World #{{user.globalRating}}</div>
      <br>
    </div>
    <div class="profile-money">
      <div class="label-money">{{user.money}} coins</div>
      <div class="btn-money" @click="openAddMoneyPanel">Add coins</div>
    </div>
    <div class="prodile-description">
      <textarea class="input-status" type="text" v-bind:placeholder="user.status" required="" readonly></textarea>
      <textarea class="input-description" type="text" v-bind:placeholder="user.profileDescription" required="" readonly></textarea>
    </div>
    <AddMoneyPanel v-if="isAddMoneyPanel" @exit="exitAddMoneyPanel"></AddMoneyPanel>
    <UpdateProfilePicturePanel v-if="isUpdatePicturePanel" @exit="exitProfilePicturePanel"></UpdateProfilePicturePanel>
    <UpdateProfilePanel v-if="isUpdateProfilePanel" @exit="exitUpdateProfilePanel"></UpdateProfilePanel>
  </div>
</template>

<script>
import {UserController} from "@/controller/UserControler";
import AddMoneyPanel from "@/pages/main/components/modals/AddMoneyPanel";
import UpdateProfilePicturePanel from "@/pages/main/components/modals/UpdateProfilePicturePanel";
import UpdateProfilePanel from "@/pages/main/components/modals/UpdateProfilePanel";

export default {
  name: "ProfilePanel",
  components: {UpdateProfilePanel, UpdateProfilePicturePanel, AddMoneyPanel},
  data(){
    return{
      user:{},
      isAddMoneyPanel: false,
      isUpdatePicturePanel: false,
      isUpdateProfilePanel: false
    }
  },
  mounted() {
    this.updateProfileInfo();
  },
  methods:{
    openAddMoneyPanel(){
      this.isAddMoneyPanel = true;
    },
    exitAddMoneyPanel(){
      this.isAddMoneyPanel = false;
      this.updateProfileInfo();
    },
    exitProfilePicturePanel(){
      this.isUpdatePicturePanel = false;
      this.updateProfileInfo();
    },
    openUpdatePicturePanel(){
      this.isUpdatePicturePanel = true;
    },
    openUpdateProfilePanel(){
      this.isUpdateProfilePanel = true;
    },
    exitUpdateProfilePanel(){
      this.isUpdateProfilePanel = false;
      this.updateProfileInfo();
    },
    updateProfileInfo(){
      let profile = JSON.parse(localStorage.getItem('profile'));
      UserController.getUserById(profile.id).then((resp)=>{
        this.user = resp.data;
      })
    }

  }
}
</script>

<style scoped>

.profile {
  background-color: rgb(28, 28, 28);
  margin-top: 20px;
  margin-left: 15%;
  margin-right: 15%;
  height: 70%;
  padding: 25px 25px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.profile-left-card {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 6;
  height: 96%;
  width: 100%;
  margin: auto;
  background-color: rgb(89, 89, 89);
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position:relative;
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

.edit-profile {
  padding: 10px;
  width: 70%;
  margin-top: 5%;
  border: none;
  background-color: rgb(50, 50, 50);
  color: white;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.edit-profile:hover {
  background-color: rgba(28,28,28,0.5);
}

.picture {
  width: 95%;
  border-radius: 100%;
  border: solid black;
}

.avatar-redacting {
  background-color: rgb(121, 121, 121);
  background-image: url("/src/assets/avatar-redacting.png");
  background-position: center center;
  background-size: cover;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-top: 13%;
  position: absolute;
  top: 30%;
  left: 73%;
}

.avatar-redacting:hover {
  background-color: rgba(28,28,28,0.5);
}

.profile-rating {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 45%;
  margin-left: 30%;
  margin-bottom: 20%;
  margin-right: 15%;
  background-color: rgb(50, 50, 50);
  padding: 30px;
  color: white;
  vertical-align: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.profile-money {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 65%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 15%;
  background-color: rgb(50, 50, 50);
  padding: 20px 20px 10px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 8px 8px 13px rgba(0,0,0,0.8);
}

.label-money {
  color: white;
  margin: auto;
  font-size: 4rem;
}

.btn-money {
  margin-left: auto;
  margin-top: auto;
  color: white;
  font-family: Arial,serif;
  font-size: 1.5rem;
}

.btn-money:hover {
  background-color: rgba(28,28,28,0.5);
}

.prodile-description {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
  height: 93%;
  width: 83%;
  margin-left: 10%;
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