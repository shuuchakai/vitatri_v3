import { useState, useEffect } from 'react';

import './DashboardProfile.css';

function DashboardProfile() {
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
            <p className="profileTitle">Perfil</p>
            <div className="profileContainer">
                <div className="profile_top">
                    <div className="profile_topLeft">
                        <div className="profile_topLeft_left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 -960 960 960" width="90"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                        </div>
                        <div className="profile_topLeft_right">
                            <p>{user ? user.name : 'Usuario'}</p>
                            <p>{user ? user.email : 'Usuario'}</p>
                            <p>{user ? user.dateOfBirth : 'Usuario'}</p>
                        </div>
                    </div>
                    <div className="profile_topRight">
                        <p className="profile_topRight_title">Información Médica</p>
                        <div className="profile_topRight_descriptionTop">
                            <p>Peso: {user ? user.weight : 'Usuario'} kg</p>
                            <p>Altura: {user ? user.height : 'Usuario'} cm</p>
                            <p>Sexo Biológico: {user ? user.biologicalSex : 'Usuario'}</p>
                        </div>
                        <div className="profile_topRight_descriptionBottom">
                            <p>Tipo de sangre: {user ? user.bloodType : 'Usuario'}</p>
                            <p>Limitaciones médicas: {user ? user.medicLimitations : 'Usuario'}</p>
                        </div>
                    </div>
                </div>
                <div className="profileBottom">
                    <p className="profileBottom_title">Preferencias dietéticas y físicas</p>
                    <div className="profileBottom_container">
                        <div className="profileBottom_containerContent">
                            <p className="profileBottom_content">Meta principal: {user ? user.mainGoal : 'Usuario'}</p>
                            <p className="profileBottom_content">Preferencias dietéticas: {user ? user.dieteticPreferences : 'Usuario'}</p>
                        </div>
                        <div>
                            <p className="profileBottom_content">Preferencias de entrenamiento: {user ? user.personalFitnessPreferences : 'Usuario'}</p>
                            <p className="profileBottom_content">Experiencia en el entrenamiento: {user ? user.fitnessExperience : 'Usuario'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardProfile;