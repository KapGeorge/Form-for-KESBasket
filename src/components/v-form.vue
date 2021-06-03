<template>
  <form class="main-form" >
    <div class="main-form-item">
      <label for="name">ФИО участника</label>
      <input id="name" placeholder="ФИО участника" v-model="name" type="text"/>
    </div>
    <div class="main-form-item">
      <label for="date-picker">Дата рождения</label>
      <datepicker id="date-picker" :format="customFormatter" :language="ru" v-model="date" placeholder="Дата рождения"></datepicker>
    </div>
    <div class="main-form-item">
      <label for="email">email</label>
      <input id="email" v-model="email" type="email" name="email" required placeholder="email" />
    </div>
    <div class="main-form-item">
      <label for="phone">Телефон</label>
      <input
        required
        id="phone"
        v-model="phone"
        type="phone"
        placeholder="Номер телефона"
      />
    </div>
    <div class="main-form-item">
      <label for="distance">Дистанция</label>
      <select required id="distance" v-model="distance" >
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="main-form-item">
      <label for="cash">Сумма взноса</label>
      <input required id="cash" type="number" v-model="cash" placeholder="Сумма взноса" />
    </div>

    <button type="submit" @click="send()" :disabled="!valid">Отправить</button>
  </form>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
import {ru} from 'vuejs-datepicker/dist/locale'
export default {
  name: "v-form",
  data() {
    return {
      name: null,
      date: null,
      phone: null,
      distance: null,
      cash: null,
      email: null,
      ru: ru,
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    send(){
      this.$store.dispatch('SEND', 
      {
        name: this.name,
        date: this.date,
        email: this.email,
        phone: this.phone,
        distance: this.distance,
        payment: this.cash
      })
    },
    customFormatter(date) {
      return moment(date).format('D-MM-YYYY');
    }
  },
  computed: {
      valid() {
        let a
        if (
          this.name &&
          this.date &&
          this.phone &&
          this.distance &&
          this.cash &&
          this.email != null
        ) {
          a= true;
        } else {
          a= false;
        }
        return a
      },
    },
};
</script>

<style scoped>
.main-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
}
.main-form-item {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

input {
  outline: none;
  border: none;
  border-bottom: 1px solid #f1f1f1;
  transition: 0.5s;
}
input:hover,
input:active,
input:focus {
  border: none;
  border-bottom: 1px solid #6aff00;
}
button {
  width: 50%;
  margin: 0 auto;
  background: #1fa91f;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  transition: 0.5s;
}
button:disabled{
  background: grey;
}
</style>