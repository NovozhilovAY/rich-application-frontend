<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <div class="label">You can upload an image in PNG or JPG format</div>
        <input class="input-file" ref="image" type="file" accept=".png">
        <div class="label">If you want to edit your avatar, <div class="btn-upload" @click="updateProfilePicture"><u>click here</u></div></div>

        <button class="btn-back" @click="exit"><span class="ico-back"></span>Back</button>
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
        this.exit();
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
  padding: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10%;

}

.label {
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.5rem;
}

.input-file {
  border: none;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
  padding-bottom: 13%;
  color: white;
}

input.input-file::-webkit-file-upload-button {
  background-color: rgb(89, 89, 89);
  color: white;
  width: 45%;
  height: 40px;
  border-radius: 10px;
}

.input-file::-webkit-file-upload-button:hover {
  background-color: rgba(89, 89, 89, 0.8);
}

.btn-upload {
  color: rgb(89, 89, 89);
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
  margin-top: 7%;
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

</style>