import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserList } from './components/user-list/user-list.component.jsx';

export const App = () => {
    return (
        <Container>
            <Row>
                <Col> 
                    <UserList /> 
                </Col>
            </Row>
        </Container>
    );
};