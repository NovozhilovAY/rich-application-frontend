<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <img class="picture" :src=user.profilePicture>
        <p>Имя - {{user.firstName}}</p>
        <p>Фамилия - {{user.lastName}}</p>
        <p>Город - {{user.city}}</p>
        <p>Страна - {{user.country}}</p>
        <p>Деньги - {{user.money}}</p>
        <p>Описание профиля - {{user.profileDescription}}</p>
        <p>Статус - {{user.status}}</p>
        <p>Рейтинг по городу - {{user.cityRating}}</p>
        <p>Рейтинг по стране - {{user.countryRating}}</p>
        <p>Рейтинг по миру - {{user.globalRating}}</p>

        <button @click="exit">выход</button>
      </div>
    </div>
  </div>
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

.picture {
  width: 100px;
  height: 100px;
  overflow-x: auto;
}

.button-footer{
  width: 80%;
  height: 40%;
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}


.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
  width: 25%;
  height: 50%;
  margin: 5px;
}

.btn-green:hover {
  border-color: black;
}
</style>