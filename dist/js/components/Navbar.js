app.component('navbar',{

    props:{

        index:{

            type: String

        }

    },

    methods: {
        
        onClickSearch(){

            //console.log("search");
            this.$emit('searchclick', this.searchField);

        }

    },


    template:

    /*html*/

    `

<div>

    <div class="row">
        <div class="col">
            <img class="img-logo navbar-brand" src="./imgs/logo.webp" alt="Logo">
        </div>
        <div class="mobile-bar col">
            <img src="imgs/bars.svg" alt="mobile bar" class="mobile-icon">
        </div>
    </div>


</div>

<nav id="main-nav" class="mobile-offcanvas navbar-expand-lg ">

    <div class="offcanvas-header">

        <button class="btn-close"></button>

    </div>

    <div class="container-fluid">

        <div class=" navbar-collapse pt-3">
            <ul class="navbar-nav me-auto gap-nav mb-2 mb-lg-0">
                <li class="top-nav-item">
                    <a class="top-nav-select responsive-space" aria-current="page" href="index.html">Home</a>
                    <p class="offcanvas-header nav-line mb-0 mt-0">________________________</p>
                </li>
                <li class="top-nav-item">
                    <a class="top-nav-link" href="categories.html">Categories</a>
                    <p class="offcanvas-header nav-line mb-0 mt-0">________________________</p>
                </li>
                <li class="top-nav-item">
                    <a class="top-nav-link" href="usersignup.html">Sign up</a>
                    <p class="offcanvas-header nav-line mb-0 mt-0">________________________</p>
                </li>
                <li class="top-nav-item">
                    <a class="top-nav-link" href="userlogin.html">Login</a>
                    <p class="offcanvas-header nav-line mb-0 mt-0">________________________</p>
                </li> 
            </ul>

            <form id="searchRecipes" class="d-flex padding-left-nav pt-3" role="search">
                <input id="searchField" class="form-control form-control-nav place-style" type="text" placeholder="Search" aria-label="Search" v-model="searchField">
                <button type="button" class=" btn btn-transparent" v-on:click="onClickSearch()" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"><img class="img-fluid mb-1" src="./imgs/lupa.png" alt="..."></button>             
            </form>
        </div>

        <img class="img-fluid responsive-img offcanvas-header" src="./imgs/responsive-img.webp" alt="">

    </div>
</nav> 

    
    `

})