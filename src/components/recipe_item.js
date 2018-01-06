import React from 'react';
import RecipeIngredients from './recipe_ingredients'
import RecipeEdit from './recipe_edit';
const RecipeItem = (props) => {
    const recipeIngredients = props.ingredients.map(item => {
        return <RecipeIngredients ingredients= {item} key= {item} /> 
    });
    return (
        <div className="card">
            <div className="card-header" role="tab" id="headingOne">
                <h5 className="mb-0">
                    <a data-toggle="collapse" href= {"#" + props.recipe} role="button" aria-expanded="true" aria-controls="collapseOne">
                        {props.recipe}
                    </a>
                </h5>
            </div>
            <div id= {props.recipe} className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card mb-3">
                    <img className="card-img-top" src= {props.image} alt="Card image cap" />
                    <div className="card-body ingreds">
                        <h5 className= "ingredi">Ingredients</h5>
                        {recipeIngredients}
                        <button type= "button" className= "btn btn-danger" onClick= {event => props.deleteR(props.recipe)}>Delete Recipe</button>
                        <button type= "button" className= "btn btn-default" data-toggle= "modal" data-target= "#editModal" onClick= {event => props.editR(props.recipe, props.ingredients)} >Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RecipeItem;