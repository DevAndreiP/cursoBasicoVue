new Vue({
    el:'#app',
    data(){
        return {
           name:'Bitcoin',
           symbol:'BTC',
           img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
           changePercent:-1,
           color_fondo: 'f4f4f4',
           color_letra:'f4f4f4',
           price:8400,
           value:0,
           pricesWithDays:[
            { day: 'Lunes', value: 8400 },
            { day: 'Martes', value: 7900 },
            { day: 'Miercoles', value: 8200 },
            { day: 'Jueves', value: 9000 },
            { day: 'Viernes', value: 9400 },
            { day: 'Sabado', value: 10000 },
            { day: 'Domingo', value: 10200 }
           ],
           showPrices:false,
           showNames:false,
           namesFamily:[
               {nombre:'Andrei', parentezco:'Hijo'},
               {nombre:'Sebastian', parentezco:'Hijo'},
               {nombre:'Jefferson', parentezco:'Hijo'},
               {nombre:'Luis', parentezco:'Padre'},
               {nombre:'Virginia', parentezco:'Madre'},
               {nombre:'Michell', parentezco:'Novia'}
           ]
        }
    
    },
    computed:{
        title(){
            return `${this.name} - ${this.symbol}`
        },
        convertedValue(){
            if(!this.value){
                return 0
            }

                return this.value / this.price
            
        }
    },

    watch:{
        showPrices (newVal,oldVal){
            console.log( newVal,oldVal)
        }
    },
    
    methods: {
        toggleShowPrices(){//function creada
            this.showPrices = !this.showPrices//this para acceder a una propiedad.
            this.color_fondo = this.color_fondo.split('').reverse().join('')
            
        },
        toogleShowNames(){
            this.showNames = !this.showNames
         
        }
    }
})