import Sidebar from "../../componets/sidebar/Sidebar";
import NavBar from "../../componets/navbar/Navbar";
import "./home.scss";
import Widget from "../../componets/widget/Widget";
import Chart from "../../componets/charts/Chart";
import Featured from "../../componets/featured/Featured";
import Table from "../../componets/table/Table";

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

            <div className="charts">
              <Featured />
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              < Table />
            </div>
            </div>

           
    </div>
  )
}

export default Home