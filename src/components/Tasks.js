import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <>
            {/* para cada task vamos renderizar uma task */}
            {tasks.map((task) => (
                <Task task={task} />
            ))}
        </>
    )
};

export default Tasks;