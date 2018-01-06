import React, { Component } from 'react';
import axios from 'axios';
class RecipeIngredients extends Component{
    constructor(props){
        super(props);
        this.state = {};
        {this.ingredientsImage()};
    }
    ingredientsImage(){
        axios.get('https://www.googleapis.com/customsearch/v1?q=' + this.props.ingredients + '&cx=003021187965229391816%3Aumiozavkxb4&num=1&searchType=image&key=AIzaSyC1YxAMc8Ebts_EvzeAhwneZbUnvEtfvOA')
            .then(response => {
                this.setState({ image: response.data.items[0].image.thumbnailLink });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render(){
        return <ul className="list-group list-group-flush">
            <li className="list-group-item"><img src= {this.state.image} className= "image"/><span>{this.props.ingredients}</span></li>
        </ul>
    }
}
export default RecipeIngredients;