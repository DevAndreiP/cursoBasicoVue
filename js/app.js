Vue.component("coin-detail", {
  props: ["coin"],
  data() {
    return {
      //propiedades que son del componente hijo y el resto del padre.
      showPrices: false,
      showNames: false,
      value: 0,
    };
  },
  created (){
  console.log("Created coindetail")
  },
  mounted(){
    console.log("Mountede coindetail")
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color')
    },
    toggleShowNames() {
      this.showNames = !this.showNames;
    },
  },
  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.coin.price;
    },
  },
  template: `
  <div>
  <img 
      v-on:mouseover="toggleShowPrices" 
      v-on:mouseout="toggleShowPrices" 
      v-bind:src="coin.img" v-bind:alt="coin.name" />

    <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red' ">
        {{ title }}
        <span v-if="coin.changePercent > 0">👌✌</span>
        <span v-if="coin.changePercent < 0">😒</span>
        <span v-if="coin.changePercent == 0">🤞</span>
  <br>
        <span v-on:click="toggleShowPrices">
              {{ showPrices ? 'Esconder Precios' : 'Mostrar Precios' }}
        </span>
            <br>
        <span v-on:click="toggleShowNames">
              {{ showNames ? 'Esconder Familia' : 'Mostrar Familia' }}
        </span>
    </h1>
          <br>
          <input type="number" v-model="value" />
          <span>{{ convertedValue }} </span>
          <slot name="texto"> </slot>
          <slot name="link"> </slot>
          <ul v-show="showPrices">
          <li
            class="uppercase"
            v-bind:class="{orange:p.value == coin.price, red:p.value < coin.price, green: p.value > price}"
            v-for="(p,i) in coin.pricesWithDays"
            v-bind:key="p.day"
          >
            {{i}} - {{p.day}} = {{p.value}}
          </li>
        </ul>
        <ul v-show="showNames">
        <li v-for="(n,i) in coin.namesFamily" v-bing:key="n.nombre">
          {{i}} - {{n.nombre}} = {{n.parentezco}}
        </li>
      </ul>
          </div>
    `,
});

new Vue({
  el: "#app",
  data() {
    return {
      btc: {
        name: "Bitcoin",
        symbol: "BTC",
        img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        changePercent: 2,
        price: 8400,
        pricesWithDays: [
          { day: "Lunes", value: 8400 },
          { day: "Martes", value: 7900 },
          { day: "Miercoles", value: 8200 },
          { day: "Jueves", value: 9000 },
          { day: "Viernes", value: 9400 },
          { day: "Sabado", value: 10000 },
          { day: "Domingo", value: 10200 },
        ],
        namesFamily: [
          { nombre: "Andrei", parentezco: "Hijo" },
          { nombre: "Sebastian", parentezco: "Hijo" },
          { nombre: "Jefferson", parentezco: "Hijo" },
          { nombre: "Luis", parentezco: "Padre" },
          { nombre: "Virginia", parentezco: "Madre" },
          { nombre: "Michell", parentezco: "Novia" },
        ],
      },

      color_fondo: "f4f4f4",
      color_letra: "f4f4f4",
    };
  },
  created (){
    console.log("Created ejecutado")
    },
    mounted(){
      console.log("Mountede ejecutado")
    },
  methods: {
    updateColor(color){
      this.color_fondo = color || this.color_fondo
      .split("")
      .reverse()
      .join("");
    }
   
    
  },
});
