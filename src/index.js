import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeItemList from './components/recipe_item_list';
import RecipeInput from './components/recipe_input';
import RecipeEdit from './components/recipe_edit';
import axios from 'axios';
class App extends Component{
    constructor(props){
        super(props);
        this.state = { values: [] }
    }
    addRecipe(){
        return (
            <RecipeInput onInput= {(recipe, ingredient) => this.store(recipe, ingredient)}/>
        );
    }
    editRecipe(){
        return (
            <RecipeEdit onInput= {(recipe, ingredient) => {
                    let c = 0;
                    for(let i = 0; i< this.state.values.length; i++){
                        if(this.state.values[i].recipe == recipe){
                            this.update(recipe, ingredient);
                            c += 1;
                            break;
                        }
                    }
                    if(c == 0){
                        this.store(recipe, ingredient);
                    } 
                }
            }   />
        );   
    }
    store(r, i){
        const ingred = i.split(",");
        axios.get('https://www.googleapis.com/customsearch/v1?q=' + r + '&cx=003021187965229391816%3Aumiozavkxb4&num=1&searchType=image&key=AIzaSyC1YxAMc8Ebts_EvzeAhwneZbUnvEtfvOA')
            .then(response => {
                this.setState({ values: this.state.values.concat([{recipe: r, ingredients: ingred, image: response.data.items[0].link}])});    
            })
            .catch(error => {
                console.log(error);
            });
    }
    update(r, i){
        const ingred = i.split(",");
        for(let i = 0; i < this.state.values.length; i++){
            if(this.state.values[i].recipe == r){
                let newarray = this.state.values.slice();
                newarray[i].ingredients = ingred;
                this.setState({ values: newarray });
            }
        }
    }
    restore(){
        document.getElementById("title").value = "";
        document.getElementById("ingredients").value = "";
    }
    delRecipe(recipe){
        for(let i = 0; i< this.state.values.length; i++){
            if(this.state.values[i].recipe == recipe){
                this.setState({values: this.state.values.slice(0, i).concat(this.state.values.slice(i+1))});
            }
        }
    }
    ediRecipe(r, i){
        const ingredients = i.join(",");
        document.getElementById("editTitle").value = r;
        document.getElementById("editIngredients").value = ingredients;
    }
    render(){
        return (
            <div>
                <RecipeItemList items= {this.state.values} deleteRecipe= {recipe => this.delRecipe(recipe)} editRecipe= {(recipe, ingredients) => this.ediRecipe(recipe, ingredients)} />
                {this.addRecipe()}
                {this.editRecipe()}
                <button type= "button" className= "btn btn-primary butt" data-toggle= "modal" data-target= "#exampleModal" onClick= {event => this.restore()}>Add Recipe</button>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));