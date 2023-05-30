app.component('admin-information',{

    //Componente de la información del admin

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 
    <div class="pt-5 text-center">

        <img class="img-fluid img-account pb-0" src="./imgs/user-negro.png" alt="">

        <h1 class="title-green mt-0 mb-3">Username</h1>

        <div class="row mb-3">
            <div class="col">
                <p class="count-created user-detail">Recipes created: 20</p>
            </div>
            <div class="col">
                <p class="count-registered user-detail">Users registered: 10</p>
            </div>
        </div>

        <button type="button" class="btn btn-logout">Log out</button>

    </div>
        
    `

})