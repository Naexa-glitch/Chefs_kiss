const app = Vue.createApp({

    data() {
        return {

            selectedIndex: 0,

            recipes:[


            ],

            categories:[
                

            ],

            all_recipes:[],

            recipe:{}
            
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
                let items = response.data.meals;
                items.forEach( (element, index) => {
                    this.categories.push({id: index, name: element.strCategory});
                });


            }
        )
        .catch(
            error => console.log(error)
        );

        //conexión a API para colocar información a cards según su categoria Side
        axios({

            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side'

        })
        .then(
            (response) => {
                
                //console.log(response.data.meals);

                    let items = response.data.meals;
                    this.recipes = [];
                    items.forEach (element => {
                    this.recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: 'Side dish', time: "20 mins", level: "Easy", likes: 1});
                    });
                    


            }
            
        )
        .catch(
            error => console.log(error)
        );

    },

    methods:{

        onClickHeart(){

            this.recipe.likes +=1;

        },

        onClickViewMore(index){

            console.log("Id " + index);

            axios({

                methods: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+index
    
            })
            .then(
                (response) => {
                   
                    //console.log(response.data.meals);

                    let item = response.data.meals;
                    console.log(item);

                    this.recipe.id = index;
                    this.recipe.name = item[0].strMeal;
                    this.recipe.image = item[0].strMealThumb;
                    this.recipe.category = item[0].strCategory;
                    this.recipe.instructions = item[0].strInstructions;
                    this.recipe.likes = 1;
                    this.recipe.description = "This recipe is really good, you should try it, it's one of the many we have";
                    this.recipe.preparationTime = "10 min";
                    this.recipe.cookTime = "40 min";
                    this.recipe.totalTime = "50 min";
                    this.recipe.portions = "3";
                    this.recipe.portions = "3";
                    this.recipe.skillLevel = "Medium";
                    this.recipe.occasion = "All";
                    this.recipe.featured = "No";
                    
                    
                    

                    //console.log(this.recipe.name);
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        onClickCategoryButton(category){

            

            axios({

                methods: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category
    
            })
            .then(
                (response) => {
                    //console.log(response.data.meals);

                    this.recipes = [];

                    let items = response.data.meals;
                    items.forEach (element => {
                        this.recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: category, time: "50 mins", level: "Easy", likes: 1});
                    });
    
                }
            )
            .catch(
                error => console.log(error)
            );

        }

    }

})

//init custom events for components

const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter;

