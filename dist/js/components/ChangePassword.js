app.component('change-password',{

    //Componente con form para cambiar contraseña

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 

<div class=" pb-3 container-sm">

    <h1 class="title text-center pb-5">Change password</h1>

    <div>

            <form>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label subtitle-account mb-0">Password</label>
                <input type="email" class="form-control form-user-login" id="exampleInputEmail1">
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label subtitle-account mb-0">Confirm new password</label>
                <input type="password" class="form-control form-user-login" id="exampleInputPassword1">
                </div>
            </form>

    </div> 
    
    
    <div class="text-center pb-5">

        <button type="button" class="btn btn-user mt-5">Send</button>

    </div>

</div>
        
    `

})