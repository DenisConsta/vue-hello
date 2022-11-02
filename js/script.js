
const { createApp } = Vue;
createApp({
  data() {
    return {
      message: 'Hello Vue !',
      textColor: 'verde',
      path: "assets/img/",
      imgName: "Chimpanzee.jpg",
      isShow: true
    }
  },
  methods: {
    changeStatus(){
      this.isShow = !this.isShow
    }
  }
}).mount('#app');