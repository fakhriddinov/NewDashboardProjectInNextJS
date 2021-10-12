import React, { useEffect } from 'react'
import { faBroom, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import styled from 'styled-components'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos } from '../redux/action'
import Header from "./Header"
const TodosWrapper = styled.div`
     .container{
         .inputSection{
             
         }
     }
`


const Todos = () => {
    const todos = useSelector(state => state.todos);
    console.log(todos + "todos mana bu yerda");
    const dispatch = useDispatch();
    useEffect(() => {
        setTodos(dispatch);
    }, []);
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="text-center">ToDo</h1>
                <div className="inputSection d-flex shadow border">
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="New Task"
                            aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <Button className="button bg-white text-primary border shadow">
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                    </Button>
                    <Button className="button bg-white text-danger border shadow">
                        <FontAwesomeIcon className="icon" icon={faBroom} />
                    </Button>
                </div>
                {/* table section  */}
                <List component="nav" aria-label="main mailbox folders">
                    {todos.map((v, i) => {
                        return <ListItem button className="d-flex justify-content-between align-items-center border shadow">
                            <ListItemText primary={`${i + 1}. ` + v.title} />
                            <ListItemIcon className="d-flex">
                                <Button className="button bg-white text-primary border shadow">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                                <Button className="button bg-white text-danger border shadow">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                            </ListItemIcon>
                        </ListItem>
                    })}
                </List>
            </div>
        </div>
    )
}

export default Todos;
