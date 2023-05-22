app.component('footer-navigation',{

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    `
  
    <div class=" justify-content-center pt-3">
        <div>

            <ul class="nav justify-content-center pt-3 pb-4">
                <li class="nav-item">
                    <a class="nav-link active footer-options" aria-current="page" href="#">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link footer-options" href="#">Terms and Conditions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link footer-options" href="#">About your privacity</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link footer-options" href="#">Contact us</a>
                </li>
            </ul>
                        
            <ul class="nav justify-content-center pt-3 pb-4 gap-4">
                <li><img class="img-footer" src="./imgs/facebook.png" alt="..."></li>
                <li><img class="img-footer" src="./imgs/insta-logo.png" alt="..."></li>
                <li><img class="img-footer" src="./imgs/youtube.png" alt="..."></li>
            </ul>

                <p class="rights-reserved mt-4 mb-0 pb-3">©2023 Chef’s Kiss. All rights reserved.</p>

        </div>    

    </div>
    
    `

})