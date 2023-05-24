const app = Vue.createApp({

    data() {
        return {

            selectedIndex: 0,

            recipes:[


            ],

            categories:[
                

            ],

            all_recipes:[]
            
        }
    },

    mounted:function(){

        this.all_recipes = this.recipes;

        //Conexión a API para categorias
        
        axios({

            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

        })
        .then(
            (response) => {
                //console.log(response.data.meals);
                //this.categories = response.data.meals;
                let items = response.data.meals;
                items.forEach( (element, index) => {
                    this.categories.push({id: index, name: element.strCategory});
                });
                //console.log(this.categories)

            }
        )
        .catch(
            error => console.log(error)
        );

        //conexión a API para colocar información a cards egun su categoria Side
        axios({

            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side'

        })
        .then(
            (response) => {
                
                //console.log(response.data.meals);

                    let items = response.data.meals;
                    this.recipes = [];
                    if(items.length > 0) this.loading = false;
                    items.forEach (element => {
                    this.recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: 'Side dish', time: "20 mins", level: "Easy", likes: 18, ingredients: "NA", instructions: "NA"});
                    });
                    


            }
            
        )
        .catch(
            error => console.log(error)
        );

    },

    methods:{

        onClickCategoryButton(){



        }

    }

})

