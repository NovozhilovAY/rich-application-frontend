<template>
  <H1>Profile</H1>
  <img class="picture" :src=user.profilePicture>
  <button @click="openUpdatePicturePanel">Обновить изображение</button>
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
  <button @click="openAddMoneyPanel">Пополнить счет</button>
  <button @click="openUpdateProfilePanel">Редактировать</button>
  <AddMoneyPanel v-if="isAddMoneyPanel" @exit="exitAddMoneyPanel"></AddMoneyPanel>
  <UpdateProfilePicturePanel v-if="isUpdatePicturePanel" @exit="exitProfilePicturePanel"></UpdateProfilePicturePanel>
  <UpdateProfilePanel v-if="isUpdateProfilePanel" @exit="exitUpdateProfilePanel"></UpdateProfilePanel>
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

</style>