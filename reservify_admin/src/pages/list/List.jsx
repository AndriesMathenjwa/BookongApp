import "./list.scss"
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import Datatable from "../../componets/datatable/Datatable";

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List