app.component('user-information',{

    //Componente de la información del usuario

    props:{

        name:{

            type: String,
            default: "default name"

        }

    },

    data() {
        return {
            
        }
    },

    methods: {
        //Botón encargado de cerrar sesión
        onClickLogOut(){

            console.log("log out");
            this.$emit('logout');

        }
    },

    template:

    /*html*/

    ` 
    <div class="container-md">
        <div class="pt-5 text-center">

            <img class="img-fluid img-account" src="./imgs/user-negro.png" alt="">

            <h1 class="title mt-1">{{ name }}</h1>

            <p class="detail-text-gray">Here goes a description that the user will write in order to express itself</p>

            <p class="user-detail">Saved recipes: 3</p>

            <button type="button" class="btn btn-logout mt-5" v-on:click="onClickLogOut()">Log out</button>

        </div>

     </div>
        
    `

})