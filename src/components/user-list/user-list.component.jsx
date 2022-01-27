import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export const UserList = () => {
    const handleClick = async (event) => {
        event.preventDefault();

        await axios
        .get('https://immense-bastion-95145.herokuapp.com/api/users')
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <Button onClick={handleClick}> Get users </Button>

            
        </div>
    );
}