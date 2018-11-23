export const historyMixIn={
  methods:{
    addEventToHistory(event){
      // this.$store.state.history.push(event);
      this.$store.commit('addEventToHistory',event);
    }
  }
}
