import React, { useState, useEffect } from 'react';

function DashboardHome() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const user = userData ? userData.user : null;

    return (
        <div>
            <h1>Bienvenido, {user ? user.name : 'Usuario'}</h1>
        </div>
    );
}

export default DashboardHome;