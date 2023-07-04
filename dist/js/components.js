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

            saved_recipes:[],

            trending_recipes:[],

            results_recipes:[],

            similar_recipes:[],

            recipe:{},

            user:{},

            password:{}
            
        }
    },

    mounted:function(){

        this.all_recipes = this.recipes;
        
        //Obtener id de usuario desde localStorage para utilizarlo en la url de recetas guardadas por el usuario
        let id = localStorage.getItem('id');
        
        //Obtener nombre de usuario para introducirlo en el perfil del usuario
        let nameUser = localStorage.getItem('name');

        this.user.name = nameUser;

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

        //conexión a API para colocar información de recetas guardadas
        axios({

            method: 'get',
            url:'http://localhost/proyecto/public/api/users/savedrecipes/'+id

        })
        .then(
            (response) => {
                
                //console.log(response.data);

                    let items = response.data;

                    this.saved_recipes = [];

                    items.forEach (element => {
                        this.saved_recipes.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes
                            
                        });
                    });

                    //console.log(this.saved_recipes);

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
        onClickHeart(index){

            let id = localStorage.getItem('id');

            axios({

                method: 'get',
                url:'http://localhost/proyecto/public/api/users/likes/'+id+'/'+index
    
            })
            .then(
                (response) => { 
                    
                    console.log(response.data)

                    //let item = response.data;
    
                }
                
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón encargado de guardar recetas
        onClickSaveRecipe(index){

            //console.log("id receta " + index);
            let id = localStorage.getItem('id');

            axios({

                method: 'get',
                url:'http://localhost/proyecto/public/api/users/saverecipe/'+id+'/'+index
    
            })
            .then(
                (response) => { 

                    console.log(response.data);
    
                }
                
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que muestra los detalles de la receta
        onClickViewMore(index){

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
        //Botón que muestra recetas según su categoría (by type)
        onClickCategoryButton(id){  
            
            //console.log(id);

            axios({

                methods: 'get',
                url:'http://localhost/proyecto/public/api/recipes/filterby/category/'+id
    
            })
            .then(
                (response) => {
                    //console.log(response.data);

                    this.recipes_category = [];

                    let items = response.data;

                    items.forEach(element  => {
                        this.recipes_category.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes

                        });
                    });
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que muestra recetas según su nivel (complexity)
        onClickLevelButton(id){  
            
            //console.log(id);

            axios({

                methods: 'get',
                url:'http://localhost/proyecto/public/api/recipes/filterby/level/'+id
    
            })
            .then(
                (response) => {
                    //console.log(response.data);

                    this.recipes_category = [];

                    let items = response.data;

                    items.forEach(element  => {
                        this.recipes_category.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes

                        });
                    });
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que muestra recetas según su ocasión (by occasion)
        onClickOccasionButton(id){  
            
            //console.log(id);

            axios({

                methods: 'get',
                url:'http://localhost/proyecto/public/api/recipes/filterby/occasion/'+id
    
            })
            .then(
                (response) => {
                    //console.log(response.data);

                    this.recipes_category = [];

                    let items = response.data;

                    items.forEach(element  => {
                        this.recipes_category.push({

                            id: element.id, 
                            image: "http://localhost/proyecto/public/storage/imgs/"+element.image, 
                            name: element.name, 
                            category: element.category, 
                            likes: element.likes

                        });
                    });
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que ejecuta la función del inicio de sesión
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

                    let item = response.data;

                    let token = item.accessToken;

                    localStorage.setItem('token', token);

                    //console.log(localStorage.getItem('token'));

                    let items = response.data.user;

                    id = items.id;

                    localStorage.setItem('id', id);

                    nameUser = items.name;

                    localStorage.setItem('name', nameUser);

                    window.location.href = 'useraccount.html';
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que ejecuta la función del cierre de sesión
        onClickLogOut(){

            let token = localStorage.getItem('token');

            axios({

                methods: 'get',
                url:'http://localhost/proyecto/public/api/users/logout',

                headers: {

                    'Authorization': `Bearer ${token}`

                }
    
            })
            .then(
                (response) => {
                    
                    console.log(response.data); 

                    localStorage.clear();

                    window.location.href = 'index.html';
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que ejecuta la función de registrar un nuevo usuario
        onClickSignUp(userName, lastName, country, email, password){

            this.userName = userName;
            this.lastName = lastName;
            this.country = country;
            this.email = email;
            this.password = password;

            //console.log(email);

            axios({

                method: 'post',
                url:'http://localhost/proyecto/public/api/users/register?name='+userName+'&last_name='+lastName+'&country='+country+'&email='+email+'&password='+password
    
            })
            .then(
                (response) => {
                    
                    console.log(response.data); 

                    //let item = response.data.user;

                    window.location.href = 'userlogin.html';
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que ejecuta la función de recuperar contraseña
        onClickRecoverPassword(emailRecover){

            this.emailRecover = emailRecover;

            //console.log(email);

            axios({

                method: 'post',
                url:'http://localhost/proyecto/public/api/users/recoverpassword?email='+emailRecover
    
            })
            .then(
                (response) => {
                    
                    console.log(response.data); 

                    let item = response.data;

                    this.password.password = item.password;
                    
                    //console.log(this.password);
    
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        //Botón que ejecuta la función de borrar una receta guardada por el usuario
        onClickDeleteSavedRecipe(index){

            let id = localStorage.getItem('id');

            axios({

                methods: 'get',
                url:'http://localhost/proyecto/public/api/users/removesavedrecipe/'+id+'/'+index
    
            })
            .then(
                (response) => {
                    
                    console.log(response.data); 
    
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

