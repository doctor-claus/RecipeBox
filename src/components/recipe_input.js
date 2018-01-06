import React from 'react';
const RecipeInput = (props) => {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a recipe</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label className= "recipe"><strong>Recipe</strong></label>
                                <input type= "text" placeholder= "Recipe Name" id= "title" className= "form-control" />
                                <label className= "ingredients"><strong>Ingredients</strong></label>
                                <input type= "textarea" placeholder= "Enter ingredients separated by commas" id= "ingredients" className= "form-control" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick= {event => props.onInput(document.getElementById("title").value, document.getElementById("ingredients").value)} data-dismiss= "modal">Add Recipe</button>
                            <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default RecipeInput;