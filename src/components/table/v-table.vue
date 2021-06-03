<template>
<div class='v-table'>
  <div class="v-table__header">
    <p >ФИО участника</p>
    <p @click="sortByDate()">Дата рождения</p>
    <p>email</p>
    <p>Телефон</p>
    <p @click="sortByDistance()">Дистанция</p>
    <p @click="sortByCash()">Сумма взноса</p>
    <p>Дата регистрации</p>
  </div>
  <div class="v-table__body">
    <v-table-row
        v-for="row in paginatedUsers"
        :key="row.id"
        :row_data = "row"
    />
  </div>
  <div class="v-table__pagination">
    <div class="page"
      v-for="page in pages"
         :key="page"
         :class="{'page__selected': page === pageNumber}"
         @click="pageClick(page)"
    >{{page}}</div>
  </div>
</div>
</template>

<script>
import vTableRow from './v-table-row'

export default {
name: "v-table",
  components: {
  vTableRow
  },
  props: {
    users_data:{
      type: Array,
      default: () =>{
        return[]
      }
    }
  },
  data() {
    return{
      usersPerPage: 5,
      pageNumber:1
    }
  },
  computed:{
    pages() {
      return Math.ceil( this.users_data.length/5)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page){
      this.pageNumber = page;
    },

    sortByDate() {
      this.users_data.sort((a,b) => a.date.localeCompare(b.date) )
    },
    sortByCash() {
      this.users_data.sort((a,b) => a.payment - b.payment )
    },
    sortByDistance() {
      this.users_data.sort((a,b) => a.distance - b.distance )
    }
  },
}
</script>

<style scoped>
.v-table{
  max-width: 1920px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f1f1f1;
  cursor: pointer;

}
.v-table__header p{
  flex-basis: 15%;
  text-align: center;
}
.v-table__pagination{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  padding: 6px;
  margin: 10px  0 0 10px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}
.page__selected,
.page:hover{
  background: #d4ab18;
  color: white;
}


</style>