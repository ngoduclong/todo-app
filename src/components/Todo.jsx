import React, { useState } from 'react';

import './Todo.css';
import CreateTask from './CreateTask';
import Task from './Task';

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: false,
            edit: false
        },
        {
            title: "Do your workout",
            completed: false,
            edit: false
        },
        {
            title: "Hangout with friends",
            completed: false,
            edit: false
        }
    ]);


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        if(!tasks[index].edit){
            const newTasks = [...tasks];
            newTasks[index].completed = !tasks[index].completed;
            setTasks(newTasks);
        }
    };
    const updateTask = index =>{
      const newTasks = [...tasks];
        newTasks[index].edit = true;
        setTasks(newTasks);
    }
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">My To-dos</div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
            <div className="Tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        updateTask={updateTask}
                        removeTask={removeTask}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todo;