import React from 'react';
import api from '../../services/api';

export default function Dashboard() {
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            })

            console.log(response.data);
        }

        loadSpots();
    }, []);

    return <h1>Dashboard</h1>
}