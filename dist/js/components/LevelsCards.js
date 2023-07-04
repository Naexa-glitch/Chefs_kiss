app.component('levels-cards',{

    //Componente con los cards seleccionables para elegir por niveles recetas

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
        
        //Botón encargado de dar acción para que se muestren recetas por nivel seleccionado
        onClickLevelButton(){

            //console.log("Category Button");
            this.$emit('levelbutton', this.id);

        }

    },

    template:

    /*html*/

    `
            <div class="card">
                <img src="./imgs/KitchenUtensils.jpeg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button type="button" class="btn btn-categories ps-2" v-on:click="onClickLevelButton">{{ name }}</button>
                </div>
            </div>

    
    `

})