app.component('recipes-cards',{

    //componente de las cards de recetas

    props:{

        image:{

            type: String

        },
        name:{

            type:String,
            default: "default name"

        },
        category:{

            type:String,
            default: "default category"

        },
        likes:{

            type: Number

        },
        index:{

            type: Number

        }

    },

    data() {
        return {
            
        }
    },

    methods: {
        
        //Botón encargado de dar acción para que se muestre la receta
        onClickViewMore(){

            //console.log("View More");
            this.$emit('viewmore', this.index);

        }

    },

    template:

    /*html*/

    ` 

    <div class="card">
        <img v-bind:src="image" class="card-img-top rounded mt-2" alt="recipe card">
            <div class="card-body">
                <p class="card-title">{{ name }}</p>
                <p class="card-detail mb-0">{{ category }}</p>
                <p class="card-detail">{{ likes }}</p>
                <button type="button" class="btn btn-danger ps-2" v-on:click="onClickViewMore()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View more</button>
            </div>
    </div>    
        
        `
    

})