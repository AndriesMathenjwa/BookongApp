import Sidebar from "../../componets/sidebar/Sidebar";
import NavBar from "../../componets/navbar/Navbar";
import "./home.scss";
import Widget from "../../componets/widget/Widget";

const Home = () => {
  return (
    <div className="home">
           <Sidebar/>
           <div className="homeContainer">
            <NavBar/>
            <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
            </div>
            </div>
    </div>
  )
}

export default Home