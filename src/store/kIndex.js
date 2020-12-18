import Vue from 'vue'
import kVuex from './../kvuex'

Vue.use(kVuex);

export default new kVuex.Store({
    state:{
        count:0,
    },
    mutations:{
        storeAdd(state,num = 1){
            state.count += num;
        }
    },
    getters:{
        score(state){
            return 'score:' + state.count
        }
    },
    actions:{
        asyncAdd({commit}){
            return new Promise(resolve =>{
                setTimeout(() => {
                    commit('storeAdd')
                    resolve({ok:1})
                }, 1000);
            })
            
        }
    }
})