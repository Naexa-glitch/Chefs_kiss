app.component('info-recipe',{

    // Componente que muestra los detalles de la receta seleccionada

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

            type:Number

        },
        cooktime:{

            type:Number

        },
        totaltime:{

            type:Number

        },
        portions:{

            type:Number

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

            type: Number

        }
    },

    
    methods: {
        
        //Botón encargado de dar acción para que incremente la cantidad de me gusta
        onClickHeart(){

            //console.log("heart");
            this.$emit('heartclick', this.index);

        },
        //Botón encargado de dar acción para que se guarden recetas
        onClickSaveRecipe(){

            //console.log("saved");
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

                <button type="button" class="btn btn-green mt-5 mb-5" v-on:click="onClickSaveRecipe()">Save recipe</button>

            </div> 
            <!-- Recipe steps -->
        </div>
            <!-- Similar recipes -->
            <div class="modal-footer row">
                <div class="pt-5 pb-5 row">

                    <h4 class="subtitle-green">Like this? We have similar recipes</h4>

                    <div class="row row-cols-1 row-cols-md-3 mb-4 gap-4"> 

                        <div class="mt-4 col row">
                            <div class="card ">
                                <img src="./imgs/fried-chicken1.jpg" class="card-img-top rounded mt-2" alt="...">
                                <div class="card-body">
                                    <p class="card-title">Fried chicken</p>
                                    <p class="card-detail mb-0">Side dish</p>
                                    <p class="card-detail">Total time: 45min</p>
                                    <button class="btn btn-danger ps-2">View more</button>
                                </div>
                            </div>
                        </div>    
                        <div class="mt-4 col row">
                            <div class="card ">
                            <img src="./imgs/LUNCH-salmon.jpeg" class="card-img-top rounded mt-2" alt="...">
                            <div class="card-body">
                                <p class="card-title">Salmon</p>
                                <p class="card-detail mb-0">Side dish</p>
                                <p class="card-detail">Total time: 1h 20min</p>
                                <button class="btn btn-danger ps-2">View more</button>
                            </div>
                            </div>
                        </div>
                        <div class="mt-4 col row">   
                            <div class="card ">
                                <img src="./imgs/steak-meat.jpg" class="card-img-top rounded mt-2" alt="...">
                                <div class="card-body">
                                    <p class="card-title">Steak meat</p>
                                    <p class="card-detail mb-0">Side dish</p>
                                    <p class="card-detail">Total time: 1h</p>
                                    <button class="btn btn-danger ps-2">View more</button>
                                </div>
                            </div>
                        </div>

                    </div>
                        
                </div>

            </div>
                <!-- Similar recipes -->  
      </div>
    </div>
</div>
    
    `

})