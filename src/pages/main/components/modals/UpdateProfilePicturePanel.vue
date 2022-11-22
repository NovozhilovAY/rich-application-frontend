<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <input ref="image" type="file" accept=".png">
        <button @click="updateProfilePicture">Обновить картинку профиля</button>
        <button @click="exit">выход</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ImgController} from "@/controller/ImgController";

export default {
  name: "UpdateProfilePicturePanel",
  data(){
    return{
    }
  },
  methods:{
    updateProfilePicture(){
      let file = this.$refs.image.files[0];
      let profile = JSON.parse(localStorage.getItem('profile'));
      ImgController.updateProfilePicture(profile.id, file).then((resp)=>{
        console.log(resp.data);
      });
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