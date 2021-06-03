<template>
  <div class='v-table-row'>
    <div class="row row__name">{{row_data.name}}</div>
    <div class="row row__dateOfBurn">{{row_data.date}}</div>
    <div class="row row__email">{{row_data.email}}</div>
    <div class="row row__phone">{{row_data.phone}}</div>
    <div class="row row__distance">{{row_data.distance}}</div>
    <div class="row row__cash">{{row_data.payment }}</div>
    <div class="row row__dateOfRegistration">{{row_data.registrationDate}}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default:() =>{
        return{}
      }
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.v-table-row {
  display: flex;
  justify-content: space-between;
}
.row{
  flex-basis: 15%;
  padding: 8px 16px;
  text-align: center;
  border-right: 1px solid black;
  word-wrap: break-word;
  overflow: hidden;
}
</style>