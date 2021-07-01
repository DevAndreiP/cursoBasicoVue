Vue.component('modal', {

    data() {
        return{
            title:"Mi Biografia",

        }

    },
    methods:{
        close(){
            this.$emit('close')
        },
        toggleModal(){
            this.showModal = !this.showModal
            this.$emit('close')
            }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ title }} </h3>
            <div>
            <slot name="imagen"></slot>
            <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data(){
        return {
            showModal:false, 
        }
    },
    methods:{
        toggleModal(){
        this.showModal = !this.showModal
        this.$emit('close')
        },
        
    }
  })