import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Accordion } from "react-bootstrap";
import { UpdateUserForm } from "../update-user-form/update-user-form.component.jsx";

export const SelectedUserPanel = () => {
    const selectedUserList = useSelector((state) => state.selectedUserList.value);
    const [localSelectedUserList, setLocalSelectedUserList] = useState([]);

    useEffect(() => {
        const selectedUserListArray = selectedUserList.map((currUser, idx) => {
            let currUserProfileArray = [];

            for (let key in currUser.profile) {
                currUserProfileArray.push(<div key={nanoid()}> { key }: { currUser.profile[key] } </div>)
            }
    
            return (
                <Accordion.Item data-testid={`selected-user-list-item-${idx}`} eventKey={idx} key={nanoid()}>
                    <Accordion.Header data-testid={`selected-user-list-item-${idx}-name`}> { currUser.name } </Accordion.Header>
                    <Accordion.Body>
                        <div> id: { currUser.id } </div>
                        <div data-testid={`selected-user-list-item-${idx}-company`}> company: { currUser.company } </div>
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
        localSelectedUserList.length > 0 &&
        <Accordion data-testid="selected-user-panel" className="selected-user-panel">
            { 
                localSelectedUserList
            }
        </Accordion>
    )
};