import React, { Fragment , useEffect, useState } from "react";
import EditTodo from "../components/EditTodo";


const ListTodos = () => {

    const [todos , setTodos] = useState([]) 

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await  fetch(`http://localhost:5000/todos/${id}` ,  {
                method: "DELETE"
            })
            setTodos(todos.filter(todo  => todo.todo_id !== id))

        } catch (err) {
            console.error(err.message)
        }
    }
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos" )
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect (() => { getTodos(); } , [])
  return (
    <Fragment>
        <table className="table mt-5 text-center">
        <thead>
            <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(({todo_id , description}) => (
                    <tr key={ todo_id}>
                        <td>{ description}</td>
                        <td><EditTodo /></td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
    </Fragment> 
  )
};

export default ListTodos;
