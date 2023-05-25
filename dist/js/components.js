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
                    this.recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: 'Side dish', time: "20 mins", level: "Easy", likes: 18, ingredients: "NA", instructions: "NA"});
                    });
                    


            }
            
        )
        .catch(
            error => console.log(error)
        );

    },

    methods:{

        onClickViewMore(index){

            console.log("Id " + index);

            axios({

                methods: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+index
    
            })
            .then(
                (response) => {
                   
                    //console.log(response.data.meals);

    
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
                        this.recipes.push({id: element.idMeal, image: element.strMealThumb, name: element.strMeal, category: category, time: "50 mins", level: "Easy", likes: 1, ingredients: "NA", instructions: "NA"});
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

