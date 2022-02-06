import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Accordion } from 'react-bootstrap';
import { UpdateUserForm } from '../update-user-form/update-user-form.component.jsx';

export const SelectedUserPanel = () => {
    const selectedUserList = useSelector((state) => state.selectedUserList.value);
    const [localSelectedUserList, setLocalSelectedUserList] = useState();

    useEffect(() => {
        const selectedUserListArray = selectedUserList.map((currUser, idx) => {
            let currUserProfileArray = [];

            for (let key in currUser.profile) {
                currUserProfileArray.push(<div key={nanoid()}> { key }: { currUser.profile[key] } </div>)
            }
    
            return (
                <Accordion.Item eventKey={idx} key={nanoid()}>
                    <Accordion.Header> { currUser.name } </Accordion.Header>
                    <Accordion.Body>
                        <div> id: { currUser.id } </div>
                        <div> company: { currUser.company } </div>
                        <div> position: { currUser.position } </div>
    
                        { currUserProfileArray }

                        <UpdateUserForm targetUser={currUser} />
                    </Accordion.Body>
                </Accordion.Item>
            );
        });

        setLocalSelectedUserList(selectedUserListArray);
    }, [selectedUserList]);

    return (
        <Accordion className='selected-user-panel'>
            { 
                localSelectedUserList
            }
        </Accordion>
    )
};