import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import active from "./active"
import coiling from "./coiling"
Vue.use(Vuex);

const state = {
	moreActive:[]
};


const mutations = {
	handleGetActions(state,params){
		state.moreActive = params;
	}
};


const actions = {
	handleGetActions({commit}){
		axios({
			method:"get",
			url:"http://localhost:3000/list"
		}).then((data)=>{
			commit("handleGetActions",data.data)
			console.log(data);
		})
	}
};

const getters = {
	
};


const Store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	module:{
		active,
		coiling
	}
});


export default Store;
