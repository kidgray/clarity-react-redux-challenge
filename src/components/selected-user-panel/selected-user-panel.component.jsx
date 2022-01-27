import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion } from 'react-bootstrap';

export const SelectedUserPanel = () => {
    const selectedUserList = useSelector((state) => state.selectedUserList.value);
    const dispatch = useDispatch();

    const selectedUserListArray = selectedUserList.map((currUser, idx) => {
        return (
            <Accordion.Item eventKey={idx} key={idx}>
                <Accordion.Header> { currUser.name } </Accordion.Header>
                <Accordion.Body>
                    <div> ID: { currUser.id } </div>
                    <div> Company: { currUser.company } </div>
                    <div> Position: { currUser.position } </div>
                    <div> Age: { currUser.profile.age } </div>
                    <div> Gender: { currUser.profile.gender } </div>
                    <div> Planet: { currUser.profile.planet } </div>
                    <div> Species: { currUser.profile.species } </div>
                    <div> Status: { currUser.profile.status } </div>
                    
                </Accordion.Body>
            </Accordion.Item>
        );
    })

    return (
        <Accordion className='selected-user-panel'>
            { selectedUserListArray }
        </Accordion>
    )
};