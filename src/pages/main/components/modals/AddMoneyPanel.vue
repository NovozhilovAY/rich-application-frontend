<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <div class="profile-money">
          <div class="label-money">{{user.money}} coins</div>
        </div>
        <input class="input" type="number" v-model="amount">
        <div class="btn-group">
          <button class="btn-back" @click="exit"><span class="ico-back"></span>Back</button>
          <button class="btn-add" @click="addMoney">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PaymentController} from "@/controller/PaymentController";

export default {
  name: "AddMoneyPanel",
  props:['id'],
  data(){
    return{
      amount:0,
      user: {}
    }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem('profile'));
    this.user.money = user.money;
    console.log(this.userToUpdate)
  },
  methods:{
    exit(){
      this.$emit("exit");
    },
    addMoney(){
      let profile = JSON.parse(localStorage.getItem('profile'));
      let payment = {id: profile.id, amount: this.amount}
      PaymentController.makePayment(payment).then((resp)=>{
        let user = resp.data;
        console.log(user);
        this.exit();
      })
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
  padding: 20px 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.profile-money {
  width: 62%;
  height: 140px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5%;
  margin-bottom: 7%;
  background-color: rgb(89, 89, 89);
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
  font-size: 3rem;
}

.input {
  margin: 5px 10% 5px 10%;
  width: 78%;
  font-family: Arial,serif;
  font-size: 1.5rem;
}

.btn-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10%;
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

.btn-add {
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

.btn-add:hover {
  background-color: rgba(89, 89, 89, 0.8);
}

</style>