app.component('info-recipe',{

    props:{

        name:{

            type:String,
            default:"default name"

        },
        image:{

            type:String

        },
        likes:{

            type: Number,
            default: 1

        },
        description:{

            type: String,
            default:"default description"

        },
        preptime:{

            type:String,
            default:"default preparation time"

        },
        cooktime:{

            type:String,
            default:"default cook time"

        },
        totaltime:{

            type:String,
            default:"default total time"

        },
        portions:{

            type:String,
            default:"default portions"

        },
        skilllevel:{

            type:String,
            default:"default skill level"

        },
        category:{

            type:String,
            default:"default category"

        },
        occasion:{

            type:String,
            default:"default occasion"

        },
        featured:{

            type:String,
            default:"default featured"

        },
        ingredients:{

            type:String,
            default:"default ingredients"

        },
        steps:{

            type:String,
            default:"default steps"

        },
        index:{

            type: String

        }

    },

    
    methods: {
        
        onClickHeart(){

            //console.log("heart");
            this.$emit('heartclick', this.index);

        },
        onClickSaveRecipe(){

            console.log("saved");
            this.$emit('saverecipe', this.index);

        }

    },

    template:

    /*html*/

    `

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close ms-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        
            <!-- Recipe introduction -->
            <div class="text-center pt-5">

                <h1 class="modal-title title pb-5">{{ name }}</h1>

                <div>

                    <div class="container-img-category pb-3">

                        <img class="img-info-recipe" v-bind:src="image" alt="info image">

                        <button type="button" class="btn-transparent" v-on:click="onClickHeart()"><img class="img-like" src="./imgs/favorite-heart-icon-png-23.png" alt=""></button>

                    </div>

                    <p class="likes-info">Total of likes for this recipe: {{ likes }} ♥</p>

                    <p class="page-description pt-5 px-2">{{ description }}</p>

                </div>

            </div>  
            <!-- Recipe introduction -->   
        
            <!-- Recipe information -->   
            <div class="pt-5 pb-5">

                <div class=" container-fluid">

                    <ul class="list-group list-group-horizontal row row-cols-1 row-cols-md-5 gap-2">
                        <li class="list-group-item list-group-item-danger"><span class="recipe-info-details"> Preparation time: </span><br><span class="detail-text">{{ preptime }}</span><br></li>
                        <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Cook time: </span><br> {{ cooktime }} <br></li>
                        <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Total time: </span><br> {{ totaltime }} <br></li>
                        <li class="list-group-item list-group-item-danger round-details-recipe-right"><span class="recipe-info-details">Portions: </span><br> {{ portions }} <br></li>
                        <li class="list-group-item list-group-item-danger round-details-recipe-left"><span class="recipe-info-details">Skill level: </span><br> {{ skilllevel }} <br></li>
                        <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Category: </span><br> {{ category }} <br></li>
                        <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Occasion:</span><br> {{ occasion }} <br></li>
                        <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Featured:</span><br> {{ featured }} <br></li>
                    </ul>
        
                </div>

            </div>
            <!-- Recipe information -->

            <!-- Recipe ingredients -->
            <div class="bg-ingredients pt-5 mb-5 mt-5 ">

                <h2 class="subtitle-orange">Ingredients</h2>

                <div class="row justify-content-around pt-3 ps-4 ">

                    <ul>
                        <li class="list-ingredients">{{ ingredients }}</li>
                    </ul>
        

                </div>    



            </div>
            <!-- Recipe ingredients -->

            <!-- Recipe steps -->
            <div class="pt-5">

            <h3 class="subtitle-orange"> Let's see the steps</h3>

            <p class="list-steps ">{{ steps }}</p>

            <button class="btn btn-green mt-5 mb-5" v-on:click="onClickSaveRecipe()">Save recipe</button>

            </div> 
            <!-- Recipe steps -->
        </div>
            <!-- Similar recipes -->
            <div class="modal-footer">
                <div class="pt-5 pb-5 row">

                    <h4 class="subtitle-green">Like this? We have similar recipes</h4>

                    <div class="row row-cols-1 row-cols-md-3 mb-4 gap-4"> 

                        <recipes-cards></recipes-cards>
                        
                    </div>

                </div>
                <!-- Similar recipes -->
            </div>    
      </div>
    </div>
</div>
    
    `

})