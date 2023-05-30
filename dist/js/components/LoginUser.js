app.component('login-user',{

    //Componente con los forms para hacer login de usuario

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 

<div class="pt-4 pb-3">

    <h1 class="mt-5 title text-center">Time to login the <span class="title-blue">best </span>page</h1>

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
                    <div class="form-check">
                    <div class="row">
                        <div class="col">
                            <input type="checkbox" class="form-check-input" id="check">
                            <label class="form-check-label detail-text-green" for="check">Remember me</label>
                        </div>
                        <div class="col">
                            <a class="link-account space-link-account" href="recoverpassword.html">Forgot password?</a>
                        </div>
                    </div>
                    </div>
                </form>

            </div>  

            <div class="text-center pb-5">

                <button type="button" class="btn btn-user mt-5">Login</button>
                <div id="emailHelp" class="form-text mt-3 detail-text">Dont have an account? <a class="link-account" href="usersignup.html">Sign in</a></div>

            </div>
        
        </div>    

</div>
        
    `

})