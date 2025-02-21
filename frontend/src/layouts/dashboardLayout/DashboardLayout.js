import { Outlet } from 'react-router-dom';
import './dashboardLayout.css'

function DashboardLayout() {
    return (
        <div className="DashboardLayout">
            <div className="menu"></div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;