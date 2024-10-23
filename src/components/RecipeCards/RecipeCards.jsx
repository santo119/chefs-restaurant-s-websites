import { useEffect, useState } from "react";




const RecipeCards = ({handleReceipe}) => {

    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('chefs.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
   

    return (
        <div className="md:w-2/3">
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            recipes.map(recipe =>
            
            <div key={recipe.recipe_id} className="card bg-base-100 border-2">
                <figure className="px-8 pt-8">
                <img className="md:h-52 w-full rounded-xl"
                    src={recipe.recipe_image}
                    alt="recipe images" />
                </figure>
                <div className="card-body">
                <h2 className="card-title text-xl font-bold">{recipe.recipe_name}</h2>
                <p>{recipe.short_description}</p>
                <h3 className="text-xl">Ingredients: {recipe.ingredients.length}</h3>
                <ul className="ml-8">
                    {
                        recipe.ingredients.map((item, index) => <li className="list-disc" key={index}>{item}</li>)
                    }
                </ul>
                <div className="flex gap-3 space-x-3">
                    <div className="flex items-center space-x-2">
                    <i className="fa-regular fa-clock text-2xl"></i>
                    <p>{recipe.preparing_times} Minutes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                    <p>{recipe.calories} Calories</p>
                    </div>
                </div>
                <div className="card-actions justify-center mt-4">
                    <button onClick={() => handleReceipe(recipe)} className="btn w-full font-bold bg-[#0BE58A]">Want to Cook</button>
                </div>
                </div>
                </div>

        )}
          </div>
           
        </div>
    );
};

export default RecipeCards;