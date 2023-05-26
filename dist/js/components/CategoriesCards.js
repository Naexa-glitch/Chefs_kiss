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
            this.$emit('categorybutton', this.name);

        }

    },

    template:

    /*html*/

    `
            <div class="card">
                <img src="./imgs/BEVERAGES.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button class="btn btn-categories ps-2" v-on:click="onClickCategoryButton">{{ name }}</button>
                </div>
            </div>

    
    `

})