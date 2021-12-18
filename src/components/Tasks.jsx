import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {/* para cada task vamos renderizar uma task */}
            {tasks.map((task) => (
                <Task 
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </>
    )
};

export default Tasks;