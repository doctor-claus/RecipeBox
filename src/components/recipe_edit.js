import React from 'react';
const RecipeEdit = (props) => {
        return (
            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit recipe</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label className= "recipe"><strong>Recipe</strong></label>
                                <input type= "text" placeholder= "Recipe Name" id= "editTitle" className= "form-control" />
                                <label className= "ingredients"><strong>Ingredients</strong></label>
                                <input type= "textarea" placeholder= "Enter ingredients separated by commas" id= "editIngredients" className= "form-control" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick= {event => props.onInput(document.getElementById("editTitle").value, document.getElementById("editIngredients").value)} data-dismiss= "modal">Edit Recipe</button>
                            <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default RecipeEdit;