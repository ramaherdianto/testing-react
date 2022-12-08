import React from 'react';
import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { Input } from './Input';

export const Todo = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);
        setNewTask('');
    };

    const handleCompleted = (id) => {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setTasks(updateTask);
    };

    const handleRemove = (id) => {
        const removeTask = tasks.filter((task) => task.id !== id);
        setTasks(removeTask);
    };

    return (
        <div className='w-[50%] min-h-screen mt-20'>
            <Card>
                <Card.Title>Todo React</Card.Title>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-2 mb-10'>
                            <Input
                                isFocused
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                required
                            />

                            <Button className='bg-slate-800' type='submit'>
                                Add Task
                            </Button>
                        </div>
                    </form>

                    {tasks.length > 0 ? (
                        <ol className='space-y-4'>
                            {tasks.map((task) => (
                                <li key={task.id}>
                                    <div className='flex justify-between items-center'>
                                        <span>
                                            {task.name}
                                            {task.completed ? '✅' : '❌'}
                                        </span>

                                        <div className='flex gap-4'>
                                            <button
                                                onClick={() => handleCompleted(task.id)}
                                                className='px-2 py-1 border border-slate-500'
                                            >
                                                {task.completed ? 'Completed' : 'Incompleted'}
                                            </button>
                                            <button
                                                onClick={() => handleRemove(task.id)}
                                                className='px-2 py-1 border border-red-500'
                                            >
                                                remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : null}
                </Card.Body>
                <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
            </Card>
        </div>
    );
};
