app.component('sign-up',{

    //Componente de los forms de sign up

    data() {
        return {
            
        }
    },

    methods: {

        onClickSignUp(){

            //console.log("sign up");
            this.$emit('signup', this.userName, this.lastName, this.country, this.email, this.password);

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
                                <label for="insertName" class="form-label subtitle-account mb-0">Name</label>
                                <input id="userName" type="name" class="form-control form-user-login" v-model="userName">
                            </div>
                            <div class="mb-3">
                                <label for="insertLastName" class="form-label subtitle-account mb-0">Last name</label>
                                <input type="lastName" class="form-control form-user-login" id="lastName"  v-model="lastName">
                                <div class="form-text detail-text-gray">We dont share your full name with anyone.</div>
                            </div>
                            <div class="mb-3">
                                <label for="insertCountry" class="form-label subtitle-account mb-0">Country</label>
                                <input id="country" type="country" class="form-control form-user-login" v-model="country">
                            </div>
                            <div class="mb-3">
                                <label for="insertEmail" class="form-label subtitle-account mb-0">Email</label>
                                <input id="email" type="email" class="form-control form-user-login" v-model="email">
                            </div>
                            <div class="mb-3">
                                <label for="insertPassword" class="form-label subtitle-account mb-0">Password</label>
                                <input id="password" type="password" class="form-control form-user-login"  v-model="password">
                            </div>
                        </form>

                    </div>  

                    <div class="text-center pb-5">

                        <button type="button" class="btn btn-user mt-5" v-on:click="onClickSignUp()">Create account</button>
                        <div id="linkLogin" class="form-text mt-3 detail-text">Already have an account? <a class="link-account" href="userlogin.html">Login</a></div>
                        <p class="form-text mt-3 detail-text pt-4">By clicking create account you're agreeing to our terms and conditions</p>
        
                    </div>
                
                </div>    

    </div>
        
    `

})