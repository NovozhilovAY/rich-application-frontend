<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <div class="prof-info">
          <input class="input-info" v-model="userToUpdate.firstName">
          <input class="input-info" v-model="userToUpdate.lastName">
          <input class="input-info" v-model="userToUpdate.country">
          <input class="input-info" v-model="userToUpdate.city">
        </div>
        <div class="prof-description">
          <input class="input-status" v-model="userToUpdate.status">
          <textarea class="input-description" v-model="userToUpdate.profileDescription"></textarea>
        </div>
        <div class="btn-group">
          <button class="btn-back" @click="exit"><span class="ico-back"></span>Back</button>
          <button class="btn-save" @click="updateProfile">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {UserController} from "@/controller/UserControler";

export default {
  name: "UpdateProfilePanel",
  data(){
    return{
      userToUpdate: {}
    }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem('profile'));
    this.userToUpdate.id = user.id;
    this.userToUpdate.firstName = user.firstName;
    this.userToUpdate.lastName = user.lastName;
    this.userToUpdate.profileDescription = user.profileDescription;
    this.userToUpdate.status = user.status;
    this.userToUpdate.country = user.country;
    this.userToUpdate.city = user.city;
    console.log(this.userToUpdate)
  },
  methods:{
    updateProfile(){
      UserController.updateUser(this.userToUpdate).then(resp=>{
        console.log(resp.data);
        this.exit();
      })
    },
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

.modal {
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  width: 500px;
  height: 400px;
  background-color: rgb(28, 28, 28);
}

.modal-body {
  position: relative;
  padding: 15px 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.prof-info {
  width: 94%;
  height: 40%;
  padding: 3%;
  background-color: rgb(89, 89, 89);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-info {
  margin: 5px 5% 5px 4%;
  width: 90%;
  font-family: Arial,serif;
  font-size: 1.1rem;
}

.prof-description {
  width: 94%;
  height: 40%;
  padding: 3%;
  background-color: rgb(89, 89, 89);
  margin-top: 3%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-status {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  width: 90%;
  height: 30%;
  resize: none;
  font-family: Arial,serif;
  font-size: 1.1rem;
}

.input-status::-webkit-scrollbar {
  width: 0;
}

.input-description {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 60%;
  resize: none;
  font-family: Arial,serif;
  font-size: 1.1rem;
}

.btn-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 3%;
}

.btn-back {
  width: 20%;
  height: 40px;
  font-family: Arial;
  font-size: 1.1rem;
  background-color: rgb(89, 89, 89);
  border-radius: 5px;
  color: white;
  float: left;
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

.btn-save {
  width: 20%;
  height: 40px;
  font-family: Arial;
  font-size: 1.1rem;
  background-color: rgb(89, 89, 89);
  border-radius: 5px;
  color: white;
  float: right;
  margin-left: 60%;
}

.btn-save:hover {
  background-color: rgba(89, 89, 89, 0.8);
}

</style>