import Navbar from "../../componets/navbar/Navbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import "./single.scss";
import Chart from "../../componets/charts/Chart";
import List from "../../componets/table/Table";
import burnner from "../../images/prof.jpg";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={burnner}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Andries Matenjw</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">matenjwa@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">0729493400</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Aubrey Matlakala St. 234 Soshanguve. Gauteng
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">South Africa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};


export default Single