import { AccountCircle, CreditCard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PersonOutlined, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from "@mui/icons-material";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">MathenjwaFam</span>
            </Link>
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
                 <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                    <PersonOutlined className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/hotels" style={{textDecoration: "none"}}>
                <li>
                    <Store className="icon"/>
                    <span>Hotels</span>
                </li>
                </Link>
                <Link to="/rooms" style={{textDecoration: "none"}}>
                <li>
                    <CreditCard className="icon"/>
                    <span>Rooms</span>
                </li>
                </Link>
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
            <div className="colorOption" onClick={()=>{dispatch({type: "LIGHT"})}}></div>
            <div className="colorOption" onClick={()=>{dispatch({type: "DARK"})}}></div>
        </div>
    </div>
  )
}

export default Sidebar