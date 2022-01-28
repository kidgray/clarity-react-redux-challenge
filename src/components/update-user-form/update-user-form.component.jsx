import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { updateUser } from '../../features/userList.js';
import { updateSelectedUser } from '../../features/selectedUserList.js';

export const UpdateUserForm = ({ targetUser }) => {
    const [fieldName, setFieldName] = useState('');
    const [fieldValue, setFieldValue] = useState('');
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

    return (
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
                <Button label={targetUser.id} onClick={handleClickAddFieldButton}> Add Field </Button>
            </Form.Group>
        </Form>
    );
}