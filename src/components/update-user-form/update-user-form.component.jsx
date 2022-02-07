import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { updateUser } from "../../features/userList.js";
import { updateSelectedUser } from "../../features/selectedUserList.js";

export const UpdateUserForm = ({ targetUser }) => {
    const [fieldName, setFieldName] = useState("");
    const [fieldValue, setFieldValue] = useState("");
    const dispatch = useDispatch();

    const handleChangeFieldName = (event) => {
        event.preventDefault();
        setFieldName(event.target.value);
    }

    const handleChangeFieldValue = (event) => {
        event.preventDefault();
        setFieldValue(event.target.value);
    }

    const handleSubmitUpdateUserForm = (event) => {
        event.preventDefault();
        const targetUserID = event.target.getAttribute("label");

        const targetUserData = {
            targetUserID: targetUserID,
            fieldName: fieldName,
            fieldValue: fieldValue
        };

        dispatch(updateUser(targetUserData));
        dispatch(updateSelectedUser(targetUserData));

        setFieldName("");
        setFieldValue("");
    }

    return (
        <Form className="update-user-form" label={targetUser.id} onSubmit={handleSubmitUpdateUserForm}>
            <Form.Group controlId="updateUserForm">
                <Form.Control
                    type="text"
                    placeholder="Field name"
                    value={fieldName}
                    onChange={handleChangeFieldName}
                />
                <Form.Control 
                    type="text"
                    placeholder="Field value"
                    value={fieldValue}
                    onChange={handleChangeFieldValue}
                />
                <Button type="submit"> Add Field </Button>
            </Form.Group>
        </Form>
    );
}