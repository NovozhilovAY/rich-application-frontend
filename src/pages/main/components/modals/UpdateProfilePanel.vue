<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <input v-model="userToUpdate.firstName">
        <input v-model="userToUpdate.lastName">
        <input v-model="userToUpdate.profileDescription">
        <input v-model="userToUpdate.status">
        <input v-model="userToUpdate.country">
        <input v-model="userToUpdate.city">
        <button @click="updateProfile">Обновить профиль</button>
        <button @click="exit">выход</button>
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
        console.log(resp.data)
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  width: 500px;
  height: 400px;
}


.modal-body {
  position: relative;
  padding: 20px 10px;
  font-weight: bold;
}
</style>