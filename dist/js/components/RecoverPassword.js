app.component('recover-password',{

    //Componente para enviar email y mandar contraseña

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 

<div class="container-sm">
    <div class="pt-5">

        <form>
            <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label subtitle-account mb-0">Email</label>
            <input type="email" class="form-control form-user-login" id="exampleInputEmail1" >
            <p class="detail-text-gray">In the form above put the email you have sign up with us, we'll analize it and let you change your password.</p>
            </div>
        </form>

    </div>  

    <div class="text-center pb-5">

        <button type="button" class="btn btn-user mt-5">Send</button>

    </div>

</div>
        
    `

})