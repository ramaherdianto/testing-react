// Belajar Ajax dan API

import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Api = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (err) {
                console.log('Something went wrong.', err);
            }
        };

        getUsers();
    }, []);
    // console.log(users);

    return (
        <>
            <div className='w-[50%]'>
                <Card>
                    <Card.Title>Users List</Card.Title>
                    <Card.Body>
                        {users.length > 0 ? (
                            <>
                                {users.map((user) => {
                                    return (
                                        <p key={user.id}>
                                            {user.name} ({user.username})
                                        </p>
                                    );
                                })}
                            </>
                        ) : (
                            <div>Tidak ada user.</div>
                        )}
                    </Card.Body>
                    <Card.Footer>There are {users.length} users.</Card.Footer>
                </Card>
            </div>
        </>
    );
};

export default Api;
