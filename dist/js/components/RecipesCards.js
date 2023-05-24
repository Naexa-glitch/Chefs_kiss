app.component('recipes-cards',{

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
        time:{

            type: String,
            default: "default time"

        }

    },

    data() {
        return {
            
        }
    },

    methods: {
        
        onClickViewMore(){

            console.log("View More");

        }

    },

    template:

    /*html*/

    ` 

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        
        <!-- Recipe introduction -->
    <div class="text-center pt-5">

    <h1 class="title pb-5">Dumplings</h1>

    <div>

        <div class="container-img-category pb-3">

            <img class="img-info-recipe" src="./imgs/dumplings.jpg" alt="">

            <button type="button" class="btn-transparent"><img class="img-like" src="./imgs/favorite-heart-icon-png-23.png" alt=""></button>

        </div>

        <p class="likes-info">Total of likes for this recipe: 10 ♥</p>

        <p class="page-description pt-5 px-2">
            
            For this week I'm doing my hometown dish, this recipe was given by my mother and now to me, I just made some changes
            to my licking so that it becomes more delicious, hope you like it.

        </p>

    </div>

</div>  
<!-- Recipe introduction -->  

<!-- Recipe information -->   
<div class="pt-5 pb-5">

    <div class=" container-fluid">

            <ul class="list-group list-group-horizontal row row-cols-1 row-cols-md-5 gap-2">
                <li class="list-group-item list-group-item-danger"><span class="recipe-info-details"> Preparation time: </span><br><span class="detail-text">20 min </span><br></li>
                <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Cook time: </span><br> 1h <br></li>
                <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Total time: </span><br> 1h 20min <br></li>
                <li class="list-group-item list-group-item-danger round-details-recipe-right"><span class="recipe-info-details">Portions: </span><br> 10 <br></li>
                <li class="list-group-item list-group-item-danger round-details-recipe-left"><span class="recipe-info-details">Skill level: </span><br> Easy <br></li>
                <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Category: </span><br> Lunch <br></li>
                <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Occasion:</span><br> All <br></li>
                <li class="list-group-item list-group-item-danger"><span class="recipe-info-details">Featured:</span><br> No <br></li>
            </ul>
        
    </div>

</div>
<!-- Recipe information -->

<!-- Recipe ingredients -->
<div class="bg-ingredients pt-5 mb-5 mt-5 ">

<h2 class="subtitle-orange">Ingredients</h2>

<div class="row justify-content-around pt-3 ps-4 ">

    <ul>
        <li class="list-ingredients">One kilogram of pork meat</li>
        <li class="list-ingredients">1/2 teaspoon of sugar </li>
        <li class="list-ingredients">1/2 teaspoon of salt</li>
        <li class="list-ingredients">Condiments</li>
        <li class="list-ingredients">Water</li>
        <li class="list-ingredients">Oil (by preference)</li>
    </ul>

</div>    



</div>
<!-- Recipe ingredients -->

<!-- Recipe steps -->
<div class="pt-5">

<h3 class="subtitle-orange"> Let's see the steps</h3>

<p class="list-steps "><br> 1. Grab the wheat and combine it with water until it has slime texture. <br> 2. Mold the dought until it’s flat, then do balls of meat and locate it below. <br>3. Wrab the dought in a circular way and put it in a bowl of wood.<br>4. Wait until it is cooked and enjoy.<br></p>

<button class="btn btn-green mt-5 mb-5">Save recipe</button>

</div> 
<!-- Recipe steps -->


        </div>
      </div>
    </div>
    </div>

    <div class="card">
        <img v-bind:src="image" class="card-img-top rounded mt-2" alt="recipe card">
            <div class="card-body">
                <p class="card-title">{{ name }}</p>
                <p class="card-detail mb-0">{{ category }}</p>
                <p class="card-detail">{{ time }}</p>
                <button class="btn btn-danger ps-2" v-on:click="onClickViewMore()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View more</button>
            </div>
    </div>    
        
        `
    

})