app.component('categories-cards',{

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
        
        onClickCategoryButton(){

            console.log("Category Button");

        }

    },

    template:

    /*html*/

    `
            <div class="card ">
                <img v-bind:src="image" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button class="btn btn-categories ps-2" v-on:click="onClickCategoryButton">{{ name }}</button>
                </div>
            </div>

    
    `

})