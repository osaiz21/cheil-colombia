import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = process.env.VUE_APP_BACKEND
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default new Vuex.Store({
  state: {
    hoteles: []
  },
  mutations: {
    setHoteles(state, payload){
      state.hoteles = payload  
    }
  },
  actions: {
    async loadHoteles ({ commit }, context = {}) {
      try {
        // Asignamos valores.
        const { data } = await axios.get('listar')
        if (!Object.keys(data).length) {
          throw new Error('sin Hoteles')
        }
        commit('setHoteles', data.data )
      } catch (error) {
        throw new Error(error.message || 'Error Inesperado.')
      }
    },
    async eliminarHoteles ({ commit }, id = '') {
      try {
        // Eliminar Valores.
        const { data } = await axios.delete(`hotel/${id}`)
       
      } catch (error) {
        throw new Error(error.message || 'Error Inesperado.')
      }
    }
  },
  modules: {
  }
})
