app.component('categories-cards',{

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    `

    <div class="mt-5 pb-5 bg-sections">

    <div class="container-md">

        <div class="row">

            <h2 class="subtitle-green">By complexity</h2>

                <div class="row row-cols-1 row-cols-md-3 gap-4">

                    <div class="pt-3 row col">
                        <div class="card ">
                        <img src="./imgs/EASY-Chickpea-salad.jpg" class="card-img-top rounded mt-3" alt="...">
                        <div class="card-body"> 
                            <button class="btn btn-categories ps-2">Easy</button>
                        </div>
                        </div>
                    </div>   
                    <div class=" pt-3 row col"> 
                        <div class="card ">
                        <img src="./imgs/INTERMEDIATE-Macarrones.jpg" class="card-img-top rounded mt-3" alt="...">
                        <div class="card-body">
                            <button class="btn btn-categories ps-2">Medium</button>
                        </div>
                        </div>
                    </div> 
                    <div class=" pt-3 row col">  
                        <div class="card ">
                        <img src="./imgs/ADVANCED-BBQBrisket.jpg" class="card-img-top rounded mt-3" alt="...">
                        <div class="card-body">
                            <button class="btn btn-categories ps-2">Expert</button>
                        </div>
                        </div>
                    </div>
                </div>    
        </div>

    </div>    

</div>

<div class="pt-5 pb-5 container-md">

    <div class="row">

        <h3 class=" subtitle-green">By type</h3>

        <div class="row row-cols-1 row-cols-md-3 gap-4">

            <div class="pt-3 row col">
                <div class="card ">
                <img src="./imgs/Entrees.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button class="btn btn-categories ps-2">Entrees</button>
                </div>
                </div>
            </div>   
            <div class=" pt-3 row col"> 
                <div class="card ">
                <img src="./imgs/lunch.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body">
                    <button class="btn btn-categories ps-2">Lunch</button>
                </div>
                </div>
            </div> 
            <div class=" pt-3 row col">  
                <div class="card ">
                <img src="./imgs/SOUP-pumpkin-soup.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body">
                    <button class="btn btn-categories ps-2">Soup</button>
                </div>
                </div>
            </div>
            <div class="pt-3 row col">
                <div class="card ">
                <img src="./imgs/BREAKFAST-british-full-english-breakfast-.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body"> 
                    <button class="btn btn-categories ps-2">Breakfast</button>
                </div>
                </div>
            </div>   
            <div class=" pt-3 row col"> 
                <div class="card ">
                <img src="./imgs/DESSERTS-Cherry-Cheesecake-with-Berry-Sauce.png" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body">
                    <button class="btn btn-categories ps-2">Dessert</button>
                </div>
                </div>
            </div> 
            <div class=" pt-3 row col">  
                <div class="card ">
                <img src="./imgs/APPETIZER-cranberry-olive-cheese-skewers.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body">
                    <button class="btn btn-categories ps-2">Appetizer</button>
                </div>
                </div>
            </div>
            <div class=" pt-3 row col">  
                <div class="card ">
                <img src="./imgs/BEVERAGES.jpg" class="card-img-top rounded mt-3" alt="...">
                <div class="card-body">
                    <button class="btn btn-categories ps-2">Beverages</button>
                </div>
                </div>
            </div>

        </div> 
    </div>
</div>

<div class="bg-sections mb-5">

    <div class="container-md">

        <div class="row">

            <h4 class=" subtitle-green">By date<br></h4>

            <div class="row row-cols-1 row-cols-md-3 gap-4">

                <div class="pt-3 row col">
                    <div class="card ">
                    <img src="./imgs/ALL-Strawberry_Shortcake.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body"> 
                        <button class="btn btn-categories ps-2">All</button>
                    </div>
                    </div>
                </div>   
                <div class=" pt-3 row col"> 
                    <div class="card ">
                    <img src="./imgs/BIRTHDAY-Vanilla-Birthday-Cake.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body">
                        <button class="btn btn-categories ps-2">Birthday</button>
                    </div>
                    </div>
                </div> 
                <div class=" pt-3 row col">  
                    <div class="card ">
                    <img src="./imgs/FATHERSDAY-smoky-spiced-pork-ribs-with-loaded-sweet-potato.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body">
                        <button class="btn btn-categories ps-2">Father's Day</button>
                    </div>
                    </div>
                </div>
                <div class="pt-3 row col">
                    <div class="card ">
                    <img src="./imgs/MOTHERSDAY-dessert-berries.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body"> 
                        <button class="btn btn-categories ps-2">Mother's Day</button>
                    </div>
                    </div>
                </div>   
                <div class=" pt-3 row col"> 
                    <div class="card ">
                    <img src="./imgs/CHILDRENSDAY-how-to-make-a-samurai-warrior-helmet-for-childrens-day-recipe-main-photo.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body">
                        <button class="btn btn-categories ps-2">Children's Day</button>
                    </div>
                    </div>
                </div> 
                <div class=" pt-3 row col">  
                    <div class="card ">
                    <img src="./imgs/CHRISTMAS-easy-fruit-cake-b953d3b.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body">
                        <button class="btn btn-categories ps-2">Christmas</button>
                    </div>
                    </div>
                </div>
                <div class=" pt-3 row col">  
                    <div class="card ">
                    <img src="./imgs/HOLYWEEK.jpg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body">
                        <button class="btn btn-categories ps-2">Holy Week</button>
                    </div>
                    </div>
                </div>
                <div class=" pt-3 row col">  
                    <div class="card ">
                    <img src="./imgs/SUMMER-popsicle-recipes-fruit-yogurt-swirl-ice-pops.jpeg" class="card-img-top rounded mt-3" alt="...">
                    <div class="card-body">
                        <button class="btn btn-categories ps-2">Summer</button>
                    </div>
                    </div>
                </div>

            </div> 

        </div> 
    </div>       

</div>

    
    `

})