import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, InputTxt, TaskList } from './components';
import { fetchTasks, postTasks } from "./redux/actions/tasks";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const addTsk = (userInput) => {
    let task = {
      id: Math.random().toString(36).substr(2,9),
      title: userInput,
      check: false
    }
    dispatch(postTasks(task));
  }

  return (
    <div className="App">
      <Header/>
      
      <div className='bodyApp'>
          <InputTxt addTask={ addTsk }/>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
