export default {
  handleEnter(state,params){
    if(state.tablist[params].sign){
      state.tablist[params].sign = false;
    }else{
      state.tablist[params].sign = true;
    }
  }
}