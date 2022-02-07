import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
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

    const updateSelectedUserList = async (list = selectedUsers) => {
        const updatedSelectedUsers = list.map((currUser) => {
            return userList.find((user) => user.id === currUser.id);
        });

        console.log(updatedSelectedUsers);

        await setSelectedUsers(updatedSelectedUsers);
    }
    
    const handleClickSelectUserButton = (event) => {
        updateSelectedUserList();

        dispatch(update(selectedUsers));
    }

    return (
        <div className='user-list-div'>
            <Button variant='outline-primary populate-user-list-button' onClick={handleClickPopulateButton}> Get users </Button>
            <Button variant='outline-primary display-selected-user-list-button' onClick={handleClickSelectUserButton}> Display Selected User Details</Button>

            {
                userList.length > 0 &&
                <>
                    {
                        selectedUsers.length > 0 &&
                        <>
                        <ListGroup className='selected-user-list' horizontal>
                            <div className='selected-user-list__title'> Selected Users: </div>
                            {
                                selectedUsers.map((currUser) => <ListGroup.Item key={nanoid()}> { currUser.name } </ListGroup.Item>)
                            }
                        </ListGroup>
                        </>
                    }

                    <ListGroup>
                        { 
                            userList.map((currUser) => 
                                <ListGroup.Item action onClick={() => handleClickUserListItem(currUser)} key={nanoid()}>
                                    <div> { currUser.name } </div>
                                    <div> { currUser.company } </div>
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </>
            }
        </div>
    );
}