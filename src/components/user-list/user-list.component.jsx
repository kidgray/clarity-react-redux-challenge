import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { populate } from '../../features/userList.js';
import axios from 'axios';

export const UserList = () => {
    const userList = useSelector((state) => state.userList.value);
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        event.preventDefault();

        await axios
        .get('https://immense-bastion-95145.herokuapp.com/api/users')
        .then(res => {
            console.log(res.data.users);
            dispatch(populate(res.data.users));
        })
        .catch(error => {
            console.error(error);
        });
    };
    return (
        <div className="user-list-div">
            <Button variant='outline-primary' onClick={handleClick}> Get users </Button>
            
            <ListGroup>
                { 
                    userList.map((currUser, idx) => 
                        <ListGroup.Item action key={idx}>
                            <div> { currUser.name } </div>
                            <div> { currUser.company } </div>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
}