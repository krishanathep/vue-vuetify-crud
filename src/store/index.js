import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [
      { name: 'Tomyum Kung', price: '250' },
      { name: 'Hamburger', price: '550' },
      { name: 'Sea Food Salad', price: '250' },
      { name: 'Pud Kapaw', price: '350' },
      { name: 'Som Tum', price: '120' }
    ],
    repairs: [
      {
        no: 1,
        date: "09 มิ.ย. 2563",
        id: "obec2682",
        name: "นางสาวอุไรวรรณ อติวรกีรติ",
        repair: "คอมพิวเตอร์",
        staff: "แจ้งซ่อมด้วยตนเอง",
        status: "เสร็จเรียบร้อย",
      },
      {
        no: 2,
        date: "12 มิ.ย. 2563",
        id: "obec2683",
        name: "นายวิศิษย์ศักดิ์ บุญนำ",
        repair: "คอมพิวเตอร์",
        staff: "แจ้งซ่อมด้วยเจ้าหน้าที่",
        status: "รอการซ่อม",
      },
      {
        no: 3,
        date: "16 มิ.ย. 2563",
        id: "obec2684",
        name: "นายวรรักษ์ ลูกรักษ์",
        repair: "ระบบเครือข่าย",
        staff: "แจ้งซ่อมด้วยตนเอง",
        status: "รอการซ่อม",
      },
      {
        no: 4,
        date: "20 มิ.ย. 2563",
        id: "obec2685",
        name: "นางสาวจุฑามาส ใหญ่กว่าจิดา",
        repair: "ปริ้นเตอร์",
        staff: "แจ้งซ่อมด้วยเจ้าหน้าที่",
        status: "ซ่อมไม่ได้",
      },
      {
        no: 5,
        date: "29 มิ.ย. 2563",
        id: "obec2686",
        name: "นายวีระเดช เชื้อนาม ",
        repair: "คอมพิวเตอร์",
        staff: "แจ้งซ่อมด้วยตนเอง",
        status: "เสร็จเรียบร้อย",
      },
      {
        no: 6,
        date: "30 มิ.ย. 2563",
        id: 'obec2688',
        name: 'นายกฤษณเทพ  เจริญพงศ์',
        repair: 'คอมพิวเตอร์',
        staff: 'แจ้งซ่อมเจ้าหน้าที่',
        status: 'รอการซ่อม',
      }
    ]
  },

  mutations: {
    addFood(state, { payload }){
      state.foods.push(payload)
    },
    addRepair(state, {payload}){
      state.repairs.push(payload)
    },

    deleteFood(state, { index }){
      state.foods.splice(index, 1)
    },
    deleteRepair(state, { index }){
      state.repairs.splice(index, 1)
    },
    editFood(state, { payload }){
      state.foods[payload.index]={name: payload.name, price: payload.price }
    }
  },

  actions: {
     addFood({ commit }, payload){
       commit('addFood', {payload})
    },
     addRepair({commit}, payload){
      commit('addRepair', {payload})
    },

     deleteFood({ commit }, index){
      commit('deleteFood', {index})
    },
    deleteRepair({commit}, index){
      commit('deleteRepair', {index})
    },

     editFood({commit}, payload){
      commit('editFood', {payload})
    }
  },

  getters: {
    foods: state => state.foods,
    repairs: state => state.repairs
  }
})
