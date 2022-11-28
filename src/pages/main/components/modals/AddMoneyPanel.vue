<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-body">
        <input type="number" v-model="amount">
        <button @click="addMoney">Пополнить счет</button>
        <button @click="exit">выход</button>
      </div>
    </div>
  </div>
</template>

<script>
import {PaymentController} from "@/controller/PaymentController";

export default {
  name: "AddMoneyPanel",
  data(){
    return{
      amount:0
    }
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