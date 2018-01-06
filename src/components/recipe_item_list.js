import React from 'react';
import RecipeItem from './recipe_item';
const RecipeItemList = (props) => {
    if(props.items.length == 0){
        const recipeItems = "No recipe added";
        return (
            <div className= "card card-body bg-light">
                {recipeItems}
            </div>
        );
    }
    const recipeItem = props.items.map(item => {
        return <RecipeItem recipe= {item.recipe} ingredients= {item.ingredients} image= {item.image} key= {item.recipe} deleteR= {props.deleteRecipe} editR = {props.editRecipe}/>
    });
    return (
        <div className= "card card-body bg-light">
            <div id= "accordion" role= "tablist">
                {recipeItem}
            </div>
        </div> 
    )
    
}
export default RecipeItemList;