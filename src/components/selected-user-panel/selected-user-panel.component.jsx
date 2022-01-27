import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion, Button, Form } from 'react-bootstrap';
import { updateUser } from '../../features/userList.js';
import { updateSelectedUser } from '../../features/selectedUserList.js';

export const SelectedUserPanel = () => {
    const selectedUserList = useSelector((state) => state.selectedUserList.value);
    const [fieldName, setFieldName] = useState('');
    const [fieldValue, setFieldValue] = useState('');
    const [localSelectedUserList, setLocalSelectedUserList] = useState();
    const dispatch = useDispatch();

    const handleChangeFieldName = (event) => {
        event.preventDefault();
        setFieldName(event.target.value);
    }

    const handleChangeFieldValue = (event) => {
        event.preventDefault();
        setFieldValue(event.target.value);
    }

    const handleClickAddFieldButton = (event) => {
        const targetUserID = event.target.getAttribute('label');

        const targetUserData = {
            targetUserID: targetUserID,
            fieldName: fieldName,
            fieldValue: fieldValue
        };

        dispatch(updateUser(targetUserData));
        dispatch(updateSelectedUser(targetUserData));
    }

    let selectedUserListArray = selectedUserList.map((currUser, idx) => {
        const currUserProfileArray = [];

        // console.log(currUser.profile);
        // console.log(Object.keys(currUser.profile));

        for (let key in currUser.profile) {
            currUserProfileArray.push(<div key={(Math.random() * 1000) + 50}> { key }: { currUser.profile[key] } </div>)
        }

        // console.log(currUserProfileArray);

        return (
            <Accordion.Item eventKey={idx} key={idx}>
                <Accordion.Header> { currUser.name } </Accordion.Header>
                <Accordion.Body>
                    <div> id: { currUser.id } </div>
                    <div> company: { currUser.company } </div>
                    <div> position: { currUser.position } </div>

                    {/* <div> Age: { currUser.profile.age } </div>
                    <div> Gender: { currUser.profile.gender } </div>
                    <div> Planet: { currUser.profile.planet } </div>
                    <div> Species: { currUser.profile.species } </div>
                    <div> Status: { currUser.profile.status } </div> */}

                    { currUserProfileArray }


                    <Form className='update-user-form'>
                        <Form.Group controlId='updateUserForm'>
                            <Form.Control
                                type='text'
                                placeholder='Field name'
                                value={fieldName}
                                onChange={handleChangeFieldName}
                            />
                            <Form.Control 
                                type='text'
                                placeholder='Field value'
                                value={fieldValue}
                                onChange={handleChangeFieldValue}
                            />
                            <Button label={currUser.id} onClick={handleClickAddFieldButton}> Add Field </Button>
                        </Form.Group>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        );
    });

    useEffect(() => {
        selectedUserListArray = selectedUserList.map((currUser, idx) => {
            const currUserProfileArray = [];

            for (let key in currUser.profile) {
                currUserProfileArray.push(<div key={(Math.random() * 1000) + 50}> { key }: { currUser.profile[key] } </div>)
            }
    
            return (
                <Accordion.Item eventKey={idx} key={idx}>
                    <Accordion.Header> { currUser.name } </Accordion.Header>
                    <Accordion.Body>
                        <div> id: { currUser.id } </div>
                        <div> company: { currUser.company } </div>
                        <div> position: { currUser.position } </div>
    
                        {/* <div> Age: { currUser.profile.age } </div>
                        <div> Gender: { currUser.profile.gender } </div>
                        <div> Planet: { currUser.profile.planet } </div>
                        <div> Species: { currUser.profile.species } </div>
                        <div> Status: { currUser.profile.status } </div> */}
    
                        { currUserProfileArray }
    
    
                        <Form className='update-user-form'>
                            <Form.Group controlId='updateUserForm'>
                                <Form.Control
                                    type='text'
                                    placeholder='Field name'
                                    value={fieldName}
                                    onChange={handleChangeFieldName}
                                />
                                <Form.Control 
                                    type='text'
                                    placeholder='Field value'
                                    value={fieldValue}
                                    onChange={handleChangeFieldValue}
                                />
                                <Button label={currUser.id} onClick={handleClickAddFieldButton}> Add Field </Button>
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            );
        });

        console.log(selectedUserListArray);

        setLocalSelectedUserList(selectedUserListArray);
    }, [selectedUserList]);

    //console.log(localSelectedUserList);
    //console.log(selectedUserList);
    console.log(localSelectedUserList);

    return (
        <Accordion className='selected-user-panel'>
            { 
                localSelectedUserList
                //selectedUserListArray 
            }
        </Accordion>
    )
};