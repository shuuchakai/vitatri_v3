import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';

import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

    const { firstName, lastName, weight, height } = user.user;
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return 'Por debajo del peso normal';
        if (bmi >= 18.5 && bmi < 25) return 'Peso ideal';
        if (bmi >= 25 && bmi < 30) return 'Sobrepeso';
        if (bmi >= 30) return 'Obesidad';
    }

    return (
        <>
            <DashboardSidebar />
            <div className="dashboardPrincipalContainer">
                <section className="dashboardPrincipal_infoContainer">
                    <p className="dashboardPrincipal_title">Bienvenido, {firstName} {lastName}</p>
                    <div className="dashboardPrincipal_info">
                        <p><span className="dashboardPrincipal_infoTitle">Peso: </span>{weight} kg</p>
                        <p><span className="dashboardPrincipal_infoTitle">Altura: </span>{height} cm</p>
                        <p><span className="dashboardPrincipal_infoTitle">IMC: </span>{bmi.toFixed(2)} ({getBMICategory(bmi)})</p>
                    </div>
                </section>
                <section className="dashboardPrincipal_container">
                    <div className="dashboardPrincipal_progress">hola</div>
                    <div className="dashboardPrincipal_general">hola</div>
                    <div className="dashboardPrincipal_chart">hola</div>
                    <div className="dashboardPrincipal_map">hola</div>
                    <div className="dashboardPrincipal_calendar">hola</div>
                </section>
            </div>
        </>
    );
}

export default Dashboard;