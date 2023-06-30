const app = Vue.createApp({

    data() {
        return {

            selectedIndex: 0,

            recipes:[],

            categories:[],

            occasions:[],

            levels:[],

            recipes_category:[],

            all_recipes:[],

            save_recipes:[],

            trending_recipes:[],

            results_recipes:[],

            similar_recipes:[],

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
            url:'http://localhost/proyecto/public/api/recipes/categories'

        })
        .then(
            (response) => {
                //console.log(response.data);
                let items = response.data;
                items.forEach( (element, index) => {
                    this.categories.push({id: element.id, name: element.category});
                });


            }
        )
        .catch(
            error => console.log(error)
        );

        //Conexión a API para ocasiones
        
        axios({

            method: 'get',
            url:'http://localhost/proyecto/public/api/recipes/occasions'

        })
        .then(
            (response) => {
                //console.log(response.data);
                let items = response.data;
                items.forEach( (element, index) => {
                    this.occasions.push({id: element.id, name: element.occasion});
                });


            }
        )
        .catch(
            error => console.log(error)
        );

        //Conexión a API para niveles
        
        axios({

            method: 'get',
            url:'http://localhost/proyecto/public/api/recipes/levels'

        })
        .then(
            (response) => {
                //console.log(response.data);
                let items = response.data;
                items.forEach( (element, index) => {
                    this.levels.push({id: element.id, name: element.level});
                });


            }
        )
        .catch(
            error => console.log(error)
        );
       

        //conexión a API para colocar información a cards de todas las recetas
        axios({

            method: 'get',
            url:'http://localhost/proyecto/public/api/recipes/all'

        })
        .then(
            (response) => {
                
                //console.log(response.data);

                    let items = response.data;

                    //console.log(items);

                    this.recipes = [];

                    items.forEach (element => {
                        this.recipes.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes

                        });
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
            url:'http://localhost/proyecto/public/api/recipes/top10'

        })
        .then(
            (response) => {
                
                //console.log(response.data);

                    let items = response.data;
                    this.trending_recipes = [];

                    items.forEach (element => {
                    if(this.trending_recipes.length <= 9){
                        this.trending_recipes.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes
                            
                        });
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
                url:'http://localhost/proyecto/public/api/recipes/searchbyname/'+searchField
    
            })
            .then(
                (response) => { 
                    
                    //console.log(response.data);
                    
                    let items = response.data;

                    //console.log(items);

                    this.results_recipes= [];

                    items.forEach(element  => {
                        this.results_recipes.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes

                        });
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
                url:'http://localhost/proyecto/public/api/users/saverecipe/'+id+'/'+index
    
            })
            .then(
                (response) => { 
                    let item = response.data;
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
                url:'http://localhost/proyecto/public/api/recipes/recipe/'+index
    
            })
            .then(
                (response) => {
                   
                    //console.log(response.data);

                    let item = response.data; 
                    //console.log(item);

                    this.recipe.id = index;
                    this.recipe.name = item[0][0].name;
                    this.recipe.image = "http://localhost/proyecto/public/storage/imgs/"+item[0][0].image;
                    this.recipe.category = item[0][0].category;
                    this.recipe.instructions = item[0][0].preparation_instructions;
                    this.recipe.likes = item[0][0].likes;
                    this.recipe.description = item[0][0].description;
                    this.recipe.preparationTime = item[0][0].preparation_time;
                    this.recipe.cookTime = item[0][0].cooking_time;
                    this.recipe.totalTime = item[0][0].total_time;
                    this.recipe.portions = item[0][0].portions;
                    this.recipe.skillLevel = item[0][0].level;
                    this.recipe.occasion = item[0][0].occasion;
                    
                    //almacenamiento de los ingredientes y sus medidas
                    let ingredients = "";

                    for(let i=0; i < item[1].length; i++){

                        ingredients += item[1][i].description, item[1][i].amount, item[1][i].measurement_unit + "\n"; 

                    }

                    this.recipe.ingredients = ingredients;
                    
                    //console.log(ingredients);

                    //console.log(this.recipe.ingredients);

                    this.similar_recipes = [];

                    let items = response.data[2];

                    items.forEach (element => {
                        if(this.similar_recipes.length <= 2){
                            this.similar_recipes.push({

                                id: element.id, 
                                image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                                name: element.name, 
                                category: element.category, 
                                likes: element.likes
                            
                            });
                        }

                    });
    
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

        },

        onClickLogin(email, password){

            this.email = email;
            this.password = password;

            //console.log(email);

            axios({

                method: 'post',
                url:'http://localhost/proyecto/public/api/users/login?email='+email+'&password='+password
    
            })
            .then(
                (response) => {
                    
                    console.log(response.data); 

                    //let item = response.data.user;

                    window.location.href = 'useraccount.html';
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },

        onClickLogOut(){

            axios({

                methods: 'get',
                url:'http://localhost/proyecto/public/api/users/logout'
    
            })
            .then(
                (response) => {
                    
                    console.log(response.data); 

                    window.location.href = 'index.html';
    
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

