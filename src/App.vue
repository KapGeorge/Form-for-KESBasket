<template>
  <div id="app">
    <h1>Заявка на участие</h1>
    <v-form

    />

  <v-table
      :users_data="USERS"
  />
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import vTable from "./components/table/v-table";
import vForm from "./components/v-form";

export default {
  name: 'App',
  components: {
    vTable,
    vForm
  },
  data: () => {
    return{

    }
  },
  computed: {
    ...mapGetters([
        'USERS'
    ])
  },
  methods:{
    ...mapActions([
        'GET_USERS_FROM_API'
    ])
  },

  mounted() {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
