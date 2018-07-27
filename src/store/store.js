import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'store'
    },
    mutations: {
        setMsg(state, msg) {
             console.log(msg)
             state.msg = msg
        }
    },
    actions: {
        getMsg({commit}) {
            axios('http://localhost:9000/api/getmsg').then(res => commit('setMsg',res.data))
        }
    }
})