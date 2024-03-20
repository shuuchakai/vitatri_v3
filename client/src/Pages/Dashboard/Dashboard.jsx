import { Outlet } from 'react-router-dom';

import Sidebar from '../../Components/UI/Sidebar/Sidebar';

import './Dashboard.css';

function Dashboard() {

    return (
        <>
            <Sidebar />
            <div className="dashboard">
                <div className="dashboard_container">
                    <p className="dashboard_containerTitle">
                        vitatri's<span>board</span>
                    </p>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Dashboard;