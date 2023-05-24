app.component('sign-up',{

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 

    <div class="pt-4 pb-3">

                <h1 class="mt-5 title text-center">Ready to sign and be a great chef?</h1>

                <div class="container-sm ">

                    <div class="pt-5">

                        <form>
                            <div class="mb-3">
                                <label for="insertFullName" class="form-label subtitle-account mb-0">Full name</label>
                                <input type="email" class="form-control form-user-login" id="insertFullName">
                                <div id="emailHelp" class="form-text detail-text-gray">We dont share your full name with anyone.</div>
                            </div>
                            <div class="mb-3">
                                <label for="insertEmail" class="form-label subtitle-account mb-0">Email</label>
                                <input type="password" class="form-control form-user-login" id="insertEmail">
                            </div>
                            <div class="mb-3">
                                <label for="insertUserName" class="form-label subtitle-account mb-0">Username</label>
                                <input type="email" class="form-control form-user-login" id="insertUserName">
                            </div>
                            <div class="mb-3">
                                <label for="insertPassword" class="form-label subtitle-account mb-0">Password</label>
                                <input type="password" class="form-control form-user-login" id="insertPassword">
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label subtitle-account mb-0">Confirm password</label>
                                <input type="password" class="form-control form-user-login" id="confirmPassword">
                            </div>
                            
                        </form>

                    </div>  

                    <div class="text-center pb-5">

                        <button class="btn btn-user mt-5">Create account</button>
                        <div id="linkLogin" class="form-text mt-3 detail-text">Already have an account? <a class="link-account" href="userlogin.html">Login</a></div>
                        <p class="form-text mt-3 detail-text pt-4">By clicking create account you're agreeing to our terms and conditions</p>
        
                    </div>
                
                </div>    

    </div>
        
    `

})