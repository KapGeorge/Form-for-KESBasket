import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        users:[]
    },
    actions:{
        GET_USERS_FROM_API({commit}){
            return axios(`http://localhost:3000/users`,{
            method: 'GET'
        })
                .then((response) => {
                    commit('SET_USERS_TO_VUEX',response.data)
                })
        },
        SEND({dispatch}, payload){
            let registrationDate = new Date().toISOString().substr(0, 10)
          return  axios.post('http://localhost:3000/users', {
        "name": payload.name,
        "date": payload.date,
        "email": payload.email,
        "phone": payload.phone,
        "distance": payload.distance,
        "payment": payload.payment,
        "registrationDate": registrationDate
      })
      .then(() => {
        dispatch('GET_USERS_FROM_API')
    })
        }
    },
    mutations:{
        SET_USERS_TO_VUEX: (state,users) =>{
            state.users = users
        }
    },
    getters:{
        USERS(state) {
            return state.users;
        }
    }
})

export default store;