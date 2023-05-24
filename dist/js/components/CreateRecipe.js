app.component('create-recipe',{

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 

    <div class="pt-2">

                
    <img class="pb-5 pt-5 img-fluid img-place-holder" src="./imgs/placeholder.png" alt="">

    <div class="row">
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Name recipe</label>
            <input type="namerecipe" class="form-control form-create-recipe-sm" aria-label="Recipename">
        </div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Complexity</label>
            <input type="complexity" class="form-control form-create-recipe-sm" aria-label="Complexity">
        </div>
        <div class="w-100"></div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Category</label>
            <input type="text" class="form-control form-create-recipe-sm" aria-label="Username">
        </div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Occasion</label>
            <input type="text" class="form-control form-create-recipe-sm" aria-label="Username">
        </div>
        <div class="mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Description</label>
            <input type="text" class="form-control form-create-recipe-lg" aria-label="Username">
        </div>
        <div class="w-100"></div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Preparation time</label>
            <input type="text" class="form-control form-create-recipe-sm" aria-label="Username">
        </div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Cook time</label>
            <input type="text" class="form-control form-create-recipe-sm" aria-label="Username">
        </div>
        <div class="w-100"></div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Total time</label>
            <input type="text" class="form-control form-create-recipe-sm" aria-label="Username">
        </div>
        <div class="col mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Portions</label>
            <input type="text" class="form-control form-create-recipe-sm" aria-label="Username">
        </div>
        <div class="mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Ingredients</label>
            <input type="text" class="form-control form-create-recipe-lg" aria-label="Username">
        </div>
        <div class="mt-5">
            <label for="username" class="form-label subtitle-account mb-0">Cook instructions</label>
            <input type="text" class="form-control form-create-recipe-lg" aria-label="Username">
        </div>
    </div>

</div>

<!-- Create recipe -->

<!-- Create recipe buttons -->

<div class="row pb-5 pt-4">

    <button class="btn btn-save mt-5">Upload</button>
    <button class="btn btn-dark mt-5">Cancel</button>

</div>
        
    `

})