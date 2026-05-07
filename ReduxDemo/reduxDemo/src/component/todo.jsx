import {useSelector, useDispatch} from 'react-redux'
import { useState } from "react";
import { addtodo, deletetodo, toggle } from "../redux/action";

function Todo()
{

    const dispatch = useDispatch();
    const [text, setText] = useState()
    const todos = useSelector(state => state.todo);

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => dispatch(addtodo(text))}>Add Task</button>

            {todos.map(todo => (
                <div key={todo.id}>
                    <span
                    onClick={() => dispatch(toggle(todo.id))}
                    style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}
                    >
                    {todo.text}
                    </span>
               
                <button onClick={() => dispatch(deletetodo(todo.id))}>Delete Task</button>
                </div>))
            }
        </div>
    )

}

export default Todo;