import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';
import { populate } from '../../features/userList.js';
import { update } from '../../features/selectedUserList.js';
import axios from 'axios';

export const UserList = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const userList = useSelector((state) => state.userList.value);
    const dispatch = useDispatch();

    const handleClickPopulateButton = async (event) => {
        event.preventDefault();

        await axios
        .get('https://immense-bastion-95145.herokuapp.com/api/users')
        .then(res => {
            dispatch(populate(res.data.users));
        })
        .catch(error => {
            console.error(error);
        });
    };

    const handleClickUserListItem = (user) => {
        if (selectedUsers.some((currUser) => currUser.id === user.id)) {
            const newSelectedUsers = selectedUsers.filter((currUser) => currUser.id !== user.id);
            setSelectedUsers(newSelectedUsers);
        }
        else {
            setSelectedUsers([...selectedUsers, user]);
        }
    }
    
    const handleClickSelectUserButton = (event) => {
        console.log(selectedUsers);

        dispatch(update(selectedUsers));
    }

    return (
        <div className='user-list-div'>
            <Button variant='outline-primary populate-user-list-button' onClick={handleClickPopulateButton}> Get users </Button>
            <Button variant='outline-primary display-selected-user-list-button' onClick={handleClickSelectUserButton}> Display Selected User Details</Button>

            <ListGroup>
                { 
                    userList.map((currUser, idx) => 
                        <ListGroup.Item action onClick={() => handleClickUserListItem(currUser)} key={idx}>
                            <div> { currUser.name } </div>
                            <div> { currUser.company } </div>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
}