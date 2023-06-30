app.component('categories-cards',{

    //Componente con los cards seleccionables para elegir por categoría recetas

    props:{

        name:{

            type: String,
            default: "default name"

        },
        image:{

            type: String

        }

    },

    data() {
        return {
            
        }
    },

    methods: {
        
        //Botón encargado de dar acción para que se muestren recetas por categoría seleccionada
        onClickCategoryButton(){

            //console.log("Category Button");
            this.$emit('categorybutton', this.name);

        }

    },

    template:

    /*html*/

    `
            <div class="card">
                <img src="./imgs/KitchenUtensils.jpeg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button type="button" class="btn btn-categories ps-2" v-on:click="onClickCategoryButton">{{ name }}</button>
                </div>
            </div>

    
    `

})