import React, { useState } from 'react'
import './todo.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ShowTodo from './ShowTodo';

const Todo = () => {

    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(true);
    const [editId, setEditId] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if(task && toggleBtn){
            const allInputData = {
                id: new Date().getTime().toString(),
                task: task
            }
        setData([...data,allInputData]);

        setTask('');
        } else if(task && !toggleBtn) {
            setData(
                data.map( (elem) => {
                    if(elem.id === editId){
                        return {...elem, task};
                    }
                    return elem;
                } )
            )
            setToggleBtn(true);
            setTask("");
        } else{
            alert("Add Some Task First")
        }
    }
    
    // Delete Function
    const deleteItem = (id) => {
        const finalData = data.filter((element) => {
            return element.id != id;
        })
        setData(finalData);
    };
    
    // Edit Button
    const editBtn = (id) => {
        let newEditItem = data.find( (elem) => {
            return elem.id === id
        } );
        // console.log(newEditItem);
        setTask(newEditItem.task);
        setToggleBtn(false);
        setEditId(id);
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col-10 shadow main-col bg-white">
                    <div className="row mainHeading text-white">
                        <div className="col p-2">
                            <h4 className='text-center'>React JS Todo App</h4>
                        </div>
                    </div>
                    <form>
                        <div className="row inputBox justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input
                                onChange={ e => {setTask(e.target.value)} }
                                placeholder='Add Some Task'
                                id="todo-input" 
                                type="text" 
                                className="form-control"
                                value={task}/>
                            </div>
                            {
                                toggleBtn ? (<button onClick={submitHandler} type="submit" title='Add Item'
                                className="btn btn-outline-primary mb-2 ml-2 col-3">
                                <i type="submit" className='fa fa-plus fa-2x'></i></button>)
                                : (
                                    <button onClick={submitHandler} type="submit" title='Edit Item'
                                    className="btn btn-outline-primary mb-2 ml-2 col-3">
                                    <i type="submit" className='fa-solid fa-pen-to-square'></i></button>
                                )
                            }
                        </div>
                    </form>
                    {data.map((elem) => {
                        return <ShowTodo
                            key={elem.id}
                            id={elem.id}
                            task={elem.task}
                            onSelcet={deleteItem}
                            editBtn={editBtn}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
