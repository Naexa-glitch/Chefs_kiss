app.component('list-recipes',{

    // Componente que muestra la lista de recetas

    data() {
        return {
            
        }
    },

    template:

    /*html*/

    ` 
<div class="table-responsive">
    <table class="table">
        <thead class="thead-dark table-warning">
            <tr>
                <th class="col recipe-info-title">Image</th>
                <th class="col recipe-info-title">Recipe name</th>
                <th class="col recipe-info-title">Type</th>
                <th class="col recipe-info-title">Preparation time</th>
                <th class="col recipe-info-title">Cook time</th>
                <th class="col recipe-info-title">Total time</th>
                <th class="col "></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img class="size-img-table" src="./imgs/LUNCH-salmon.jpeg" alt="" width="200"></td>
                <td class="detail-text space-table">Salmon</td>
                <td class="detail-text">Lunch</td>
                <td class="detail-text">20 min</td>
                <td class="detail-text">1 h</td>
                <td class="detail-text">1h 20min</td>
                <td><button type="button" class="btn btn-edit mb-3">Edit</button><button type="button" class="row btn btn-delete">Delete</button></td>
                
                
            </tr>
        </tbody>
    </table>
    <button class="btn green-btn-create mt-5">Create Recipe</button>
</div>  
        
    `

})