
import { useState } from 'react'
import './App.css'
import RecipeCards from './components/RecipeCards/RecipeCards'
import SideBar from './components/SideBar/SideBar'

function App() {
 
  const [receipeQue, setReceipeQue] = useState([])
  const [preparing, setPreparing] = useState([])
  const [totalTimes, setTime] = useState(0)
  const [totalCalories, setCalories] = useState(0)

  const handleReceipe = (recipe) =>{

    const isExist = receipeQue.find(previousRecipe =>
       previousRecipe.recipe_id === recipe.recipe_id)
       if(!isExist){
        setReceipeQue([...receipeQue, recipe])

       }else{
        alert('Receipe All Ready Exists!!!')
       }

    
  }

  const handlePreparing = id =>{
    // find which recipe to remove
    const deletedRecipe = receipeQue.find((recipe) => recipe.recipe_id === id)
    // remove from want to cook table
    const updatedQue = receipeQue.filter((recipe) => recipe.recipe_id !== id)
    setReceipeQue(updatedQue)
    setPreparing([...preparing, deletedRecipe])
  }
  
  const calculateTotal = (time, calorie) =>{
    setTime(totalTimes + time)
    setCalories(totalCalories + calorie)
  }

  return (


    <div className='flex flex-col md:flex-row gap-5 mt-5 mx-auto max-w-7xl'>
      <RecipeCards handleReceipe={handleReceipe}></RecipeCards>
      <SideBar receipeQue={receipeQue}
        handlePreparing ={handlePreparing}
        preparing ={preparing}
        calculateTotal = {calculateTotal}
        totalTimes= {totalTimes}
        totalCalories = {totalCalories}
      ></SideBar>
      
    </div>
  )
}

export default App
