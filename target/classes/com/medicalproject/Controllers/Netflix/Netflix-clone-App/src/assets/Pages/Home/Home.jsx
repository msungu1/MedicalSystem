import "./Home.css";
import Navbar from "../../../Components/Navbar/Navbar";
// import netflix2 from "../../../assets/netflix2.jpg";
import roberrrr from '../../../assets/22222.jpg';
// import play1 from "../../../assets/play1.jpg";
// import info from "../../../assets/info.jpg";
import TitleCards from "../../../Components/TitleCards/TitleCards";
import Footer from "../../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img src={roberrrr} alt="" />
        <div className="banner-img"></div>

        {/* <img src={netflix2} alt="" className="banner-img" /> */}
        <div className="hero-caption">
          {/* <img src={robertoo} alt="" className='caption-img' /> */}

          <p>
            Discovering his ties to a secrete ancient order, ayoung man living
            in mordern instabul embarks on aquest to save the  Migori city from immortal
            Politics.
          </p>
          <div className="hero-btns">
            <button className="btn">
              {" "}
              <i className="fa fa-play" aria-hidden="true"></i>
              Play
            </button>
            <button className="btn dark-btn">
              {" "}
              <i className="fa fa-info" aria-hidden="true"></i>
              More info
            </button>
          </div>

          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster movies"} category={"top_rated"}/>
      <TitleCards title={"Only On Netflix"} category={"popular"}/>
      <TitleCards title={"Romantic & intimate"} category={"upcoming"}/>
      <TitleCards title={"Action Movies "}category={"now_playing"}/>


      </div>
      <Footer/>
    </div>
  );
};

export default Home;
