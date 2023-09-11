import { KeyboardArrowDown, MoreVert } from "@mui/icons-material";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVert fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">R300</p>
            <p className="desc">Previous transeactions Processing. Last payment may not br included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult">
                        <KeyboardArrowDown fontSize="small" />
                        <div className="resultAmount">R15.7K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult">
                        <KeyboardArrowDown fontSize="small" />
                        <div className="resultAmount">R17.7K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult">
                        <KeyboardArrowDown fontSize="small" />
                        <div className="resultAmount">R20.7K</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured