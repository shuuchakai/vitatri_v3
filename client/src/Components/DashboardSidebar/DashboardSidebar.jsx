import { NavLink, Link } from 'react-router-dom';

import './DashboardSidebar.css';

function DashboardSidebar() {
    return (
        <section className="dashboardSidebar">
            <div className="dashboardSidebar_container">
                <NavLink className="dashboardSidebar_title" to="/dashboard">vitatri</NavLink>
                <nav className="dashboardSidebar_linksContainer">
                    <NavLink className="dashboardSidebar_link" to="/dashboard-statistics">Estadísticas</NavLink>
                    <NavLink className="dashboardSidebar_link" to="/dashboard-calendar">Calendario</NavLink>
                    <NavLink className="dashboardSidebar_link" to="/dashboard-objectives">Metas</NavLink >
                    <NavLink className="dashboardSidebar_link" to="/dashboard-recipes">Recetas</NavLink >
                </nav >
                <Link className="dashboardSidebar_logout">Cerrar Sesión</Link>
            </div >
        </section >
    )
}

export default DashboardSidebar;