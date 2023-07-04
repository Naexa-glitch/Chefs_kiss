app.component('occasions-cards',{

    //Componente con los cards seleccionables para elegir por ocasión recetas

    props:{

        name:{

            type: String,
            default: "default name"

        },
        id:{

            type: Number

        }

    },

    data() {
        return {
            
        }
    },

    methods: {
        
        //Botón encargado de dar acción para que se muestren recetas por ocasión seleccionada
        onClickOccasionButton(){

            //console.log("Category Button");
            this.$emit('occasionbutton', this.id);

        }

    },

    template:

    /*html*/

    `
            <div class="card">
                <img src="./imgs/KitchenUtensils.jpeg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button type="button" class="btn btn-categories ps-2" v-on:click="onClickOccasionButton">{{ name }}</button>
                </div>
            </div>

    
    `

})