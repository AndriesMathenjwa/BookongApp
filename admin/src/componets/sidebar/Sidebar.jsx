import { AccountCircle, CreditCard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PersonOutlined, Psychology, PsychologyOutlined, Settings, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from "@mui/icons-material";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">MathenjwaFam</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                   <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                 <p className="title">LISTS</p>
                <li>
                    <PersonOutlined className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <Store className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCard className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShipping className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                   <InsertChart className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                   <NotificationsNone className="icon"/>
                    <span>Notification</span>
                </li>
                 <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlined className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                  <PsychologyOutlined className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                   <SettingsApplications className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                   <AccountCircle className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                   <ExitToApp className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar