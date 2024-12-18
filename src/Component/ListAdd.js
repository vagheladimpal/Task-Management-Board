import React, { useState } from 'react';

const ListAdd = () => {

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [editingTask, setEditingTask] = useState();

    const addTask = (e) => {
        e.preventDefault();


        if (editingTask) {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === editingTask.id
                        ? { ...task, title: taskInput, description: descriptionInput }
                        : task
                )
            );
            setEditingTask();
        } else {
            const newTask = {
                id: Date.now(),
                title: taskInput,
                description: descriptionInput,
            };

            console.log(newTask)



            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
        setTaskInput("");
        setDescriptionInput("");
    };


    const deleteTask = (taskId) => {
        console.log("taskId", taskId)


        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const editTask = (taskId) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        setEditingTask(taskToEdit);
        setTaskInput(taskToEdit.title);
        setDescriptionInput(taskToEdit.description);
    };
    return (
        <div>

            <div className="w-full max-w-xs">
                <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 item-centre ">Task Management Board</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={addTask}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Add Title:
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            placeholder="Task Title" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Add Description:
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={descriptionInput}
                            onChange={(e) => setDescriptionInput(e.target.value)}
                            placeholder="Task Description" />

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            submit
                        </button>

                    </div>
                </form>

            </div>

            <div className="flex flex-col w-96">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 border-2">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Edit</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {tasks.map((task, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800" >{task.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{task.description}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"><button type="button" onClick={() => editTask(task.id)} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Edit</button></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <button type="button" onClick={() => deleteTask(task.id)} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ListAdd;
