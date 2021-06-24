new Vue({
  el: "#reto",

  data() {
    return {
    courses: [],
      title: "",
      time: "",
      lista:false,
    };
  },
  computed: {
    totalTime(){
      if (!this.courses.length) { return 0 }
      total = 0;
      for(var i of this.courses){
        total = total + i.time
      }
      return total
    }
  },
  methods: {
    addCourse() {
      if (!this.title || !this.time) { return }
      
      this.courses.push({title: this.title, time: parseInt(this.time)});
      this.title = "";
      this.time = "";
      this.lista = !this.lista;
    },
  },
});
