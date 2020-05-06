import React, { Fragment , useEffect, useState } from "react";
const ListTodos = () => {

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos" )
            const jsonData = await response.json()
            console.log(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect (() => {
        getTodos();
    })
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

        </tbody>
        </table>
    </Fragment> 
  )
};

export default ListTodos;
