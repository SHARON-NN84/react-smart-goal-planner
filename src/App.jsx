import { useEffect, useState } from "react";
import { Plus } from 'lucide-react'
import goallist from './components/goallist'
import dialog from './components/GoalDialog'
import goals from './components/goals'
import './App.css'

function App() {
  const [isNewClicked, updateIsNewClicked] = useState(false);
  const [goalsList, updateGoalsList] = useState([]);    
    useEffect(() => {
        fetch("http://127.0.0.1:3000/goals")
            .then(res => res.json())
            .then(goals => {
                updateGoalsList(goals);
            })
    }, [])
  return (
    <div className='w-full h-full bg-gray-50 z-40'>
      <NewGoalDialog isClicked={isNewClicked} goalsList={goalsList} updateIsClicked={updateIsNewClicked}/>
      <header className='w-full md:h-24 bg-white shadow p-6 flex justify-between items-center fixed'>
        <div>
          <h1 className='font-semibold text-3xl'>Financial Goals</h1>
          <p className='text-gray-500'>Track your progress </p>
        </div>
        <div>
          <button 
            className='bg-orange-600 rounded-full flex p-3.5 items-center gap-2.5 cursor-pointer'
            onClick={() => updateIsNewClicked(true)}
            >
            <Plus color='white'/>
            <span className='text-white font-semibold text-lg'>New Goal</span>
          </button>
        </div>
      </header>
      <div className={`p-11 pt-36 ${isNewClicked ? "h-screen overflow-hidden" : ""}`}>
        <GoalsList goalsList={goalsList}/>
      </div>
    </div>
  )
}

export default App