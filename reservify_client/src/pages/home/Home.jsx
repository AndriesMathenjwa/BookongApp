import "./home.css";
import FeaturedProperties from "../../componets/featuredProperties/FeaturedProperties"
import PropertyList from "../../componets/propertyList/propertyList";
import Featured from "../../componets/featured/featured";
import Navbar from "../../componets/navbar/navbar";
import Header from "../../componets/header/header";
import MailList from "../../componets/mailList/mailList";
import Footer from "../../componets/footer/footer";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
            <Featured/> ``
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>  
    );
};

export default Home;