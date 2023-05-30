const app = Vue.createApp({

    data() {
        return {

            selectedIndex: 0,

            recipes:[],

            categories:[],

            recipes_category:[],

            all_recipes:[],

            save_recipes:[],

            trending_recipes:[],

            results_recipes:[],

            recipe:{}
            
        }
    },

    mounted:function(){

        this.all_recipes = this.recipes;

        //almacena array en un JSON, en este caso, almacena las recetas guardadas
        this.save_recipes = JSON.parse(localStorage.getItem('save_recipes'));
        

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
                    this.recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: 'Side dish', time: "50 min"});
                    });
                    
                    //console.log(this.recipes);

            }
            
        )
        .catch(
            error => console.log(error)
        );

        //conexión a API para colocar información a cards destacados
        axios({

            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'

        })
        .then(
            (response) => {
                
                //console.log(response.data.meals);

                    let items = response.data.meals;
                    this.trending_recipes = [];

                    items.forEach (element => {
                    if(this.trending_recipes.length <= 9){
                    this.trending_recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: 'Chicken', time: "50 min"});
                    }
                    });
                    //console.log(this.recipes);

            }
            
        )
        .catch(
            error => console.log(error)
        );

    },

    methods:{

        //Búsqueda de recetas según las palabras puestas en el input que entra por parámetro
        onClickSearch(searchField){

            this.searchField=searchField;

            axios({

                method: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/search.php?s='+searchField
    
            })
            .then(
                (response) => { 
                    
                    //console.log(response.data.meals);
                    
                    let items = response.data.meals;

                    //console.log(items);

                    this.results_recipes= [];

                    items.forEach(element  => {
                        this.results_recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: element.strCategory, time: "50 mins"});
                    });

                    //console.log(this.results_recipes);
    
                }
                
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que suma la cantidad de me gusta
        onClickHeart(){

            this.recipe.likes +=1;

        },
        //Botón encargado de guardar recetas
        onClickSaveRecipe(index){

            //console.log("Id " + index);

            axios({

                method: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+index
    
            })
            .then(
                (response) => { 
                    let item = response.data.meals;
                    //console.log(item);         
    
                   
                        this.save_recipes.push({id: item[0].idMeal, image: item[0].strMealThumb, name: item[0].strMeal, category: item[0].strCategory, time: "50 min"});

                    localStorage.setItem('save_recipes', JSON.stringify(this.save_recipes));

                    //console.log(localStorage.getItem('save_recipes'));
    
                }
                
            )
            .catch(
                error => console.log(error)
            );


        },
        //Botón que muestra los detalles de la receta
        onClickViewMore(index){

            //console.log("Id " + index);

            axios({

                methods: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+index
    
            })
            .then(
                (response) => {
                   
                    //console.log(response.data.meals);

                    let item = response.data.meals;
                    //console.log(item);

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
                    
                    //almacenamiento de los ingredientes y sus medidas
                    let ingredients = "";

                    ingredients += item[0].strMeasure1 +  item[0].strIngredient1 + "\n";
                    ingredients += item[0].strMeasure2 +  item[0].strIngredient2 + "\n";
                    ingredients += item[0].strMeasure3 +  item[0].strIngredient3 + "\n";
                    ingredients += item[0].strMeasure4 +  item[0].strIngredient4 + "\n";
                    ingredients += item[0].strMeasure5 +  item[0].strIngredient5 + "\n"; 
                    ingredients += item[0].strMeasure6 +  item[0].strIngredient6 + "\n";
                    ingredients += item[0].strMeasure7 +  item[0].strIngredient7 + "\n";
                    ingredients += item[0].strMeasure8 +  item[0].strIngredient8 + "\n";
                    ingredients += item[0].strMeasure9 +  item[0].strIngredient9 + "\n";
                    ingredients += item[0].strMeasure10 +  item[0].strIngredient10 + "\n";
                    ingredients += item[0].strMeasure11 +  item[0].strIngredient11 + "\n";
                    ingredients += item[0].strMeasure12 +  item[0].strIngredient12 + "\n";
                    ingredients += item[0].strMeasure13 +  item[0].strIngredient13 + "\n";
                    ingredients += item[0].strMeasure14 +  item[0].strIngredient14 + "\n";
                    ingredients += item[0].strMeasure15 +  item[0].strIngredient15 + "\n";
                    ingredients += item[0].strMeasure16 +  item[0].strIngredient16 + "\n";
                    ingredients += item[0].strMeasure17 +  item[0].strIngredient17 + "\n";
                    ingredients += item[0].strMeasure18 +  item[0].strIngredient18 + "\n";
                    ingredients += item[0].strMeasure19 +  item[0].strIngredient19 + "\n";
                    ingredients += item[0].strMeasure20 +  item[0].strIngredient20 + "\n";

                    this.recipe.ingredients = ingredients;
                    

                    //console.log(this.recipe.ingredients);
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que muestra recetas según su categoría
        onClickCategoryButton(category){

            

            axios({

                methods: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category
    
            })
            .then(
                (response) => {
                    //console.log(response.data.meals);

                    this.recipes_category = [];

                    let items = response.data.meals;
                    items.forEach (element => {
                        this.recipes_category.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: category, time: "50 mins", level: "Easy", likes: 1});
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

