import React from 'react'
import './showTodo.css'

const ShowTodo = (props) => {
    return (
        <div className='container itemsBox'>
            <div className="row mainBox my-2">
                <div className="taskList">
                    <h6>{props.task}</h6>
                </div>
                <div className="editBox">
                    <button title='Delete' className='btn-outline-primary' onClick={() => {
                        props.onSelcet(props.id)
                    }}><i className="fa-solid fa-trash-can"></i></button>
                    <button title='Edit' onClick={() => {
                        props.editBtn(props.id)
                    }}
                        className='btn-outline-primary'>
                        <i className="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ShowTodo
