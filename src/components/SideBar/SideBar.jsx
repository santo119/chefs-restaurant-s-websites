

// eslint-disable-next-line react/prop-types
const SideBar = ({receipeQue, handlePreparing, preparing,
     // eslint-disable-next-line react/prop-types
     calculateTotal, totalTimes,totalCalories}) => {
    console.log(receipeQue)

    // const {} = receipeQue
    
    return (
        <div className="md:w-1/3 border-2 rounded-xl">
          {/* want to cook table */}
         <h3 className="text-3xl text-slate-900 text-center border-b-2 p-3">Want to cook: {receipeQue.length} </h3>
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    receipeQue.map((recipe, index) =>

                        <tr key={index} className="hover">
                        <th>{index + 1}</th>
                        <td>{recipe.recipe_name}</td>
                        <td>{recipe.preparing_times} Minutes</td>
                        <td>{recipe.calories} Calories</td>
                        <td>
                                
                        <div className="pr-3 mr-4">
                        <button onClick={() => {handlePreparing(recipe.recipe_id)
                            calculateTotal(recipe.preparing_times, recipe.calories)
                        }} className=" rounded-full p-3 bg-[#0BE58A]">Preparing</button>
                        </div>
                               
                        </td>
                      </tr>

                     )}
                    
                   
                </tbody>
                </table>

                <h3 className="text-3xl mt-6 text-slate-900 text-center border-b-2 p-3">Currently Cook: {preparing.length} </h3>
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    preparing.map((recipe, index) =>

                        <tr key={index} className="hover">
                        <th>{index + 1}</th>
                        <td>{recipe.recipe_name}</td>
                        <td>{recipe.preparing_times} Minutes</td>
                        <td>{recipe.calories} Calories</td>
                        
                      </tr>

                     )}
                     <tr className="border-none">
                       <th></th>
                       <td></td>
                        <td>Total Times = {totalTimes}</td>
                        <td>Total Calories= {totalCalories}</td>
                     </tr>
                    
                   
                </tbody>
                </table>


          {/* current table */}


        </div>
    );
};

export default SideBar;