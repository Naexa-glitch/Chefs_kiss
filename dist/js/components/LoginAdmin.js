app.component('login-admin',{

    //Componente con los forms para el login de un administrador

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 

<div class="pt-4 pb-3">

    <h1 class="mt-5 title-green text-center">Hello Admin</h1>

        <div class="container-sm">

            <div class=" pt-5">

                <form>
                    <div class="mb-3">
                    <label for="username" class="form-label subtitle-account mb-0">Username</label>
                    <input type="email" class="form-control form-user-login" id="username" aria-describedby="emailHelp">
                    </div>
                    <div class="">
                    <label for="password" class="form-label subtitle-account mb-0">Password</label>
                    <input type="password" class="form-control form-user-login" id="password">
                    </div>
                </form>

            </div>  

            <div class="text-center pb-5">

                <button type="button" class="btn btn-user mt-5">Login</button>

            </div>
        
        </div>    

</div>
        
    `

})