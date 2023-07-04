app.component('modal-recover-password',{

    // Componente que muestra la nueva contraseña generada en recuperar contraseña

    props:{

        password:{

            type:String,
            default:"Error"

        },

    },


    template:

    /*html*/

    `
<div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close ms-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">

            <h1 class="title mb-4">Here's your new password, remember to not share it with anyone:</h1>
            <p class="title-blue pt-4 px-2 mb-5">{{ password }}</p>

        </div>
      </div> 
    </div> 
</div>
    
    `

})