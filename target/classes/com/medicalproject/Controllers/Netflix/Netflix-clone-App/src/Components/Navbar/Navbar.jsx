import "./Navbar.css";
import netflixlogo from "../../assets/netflixlogo.jpg";
// import  searchicon from '../../assets/searchicon.jpg'
// import  bellicon from '../../assets/bellicon.jpg's
import profileicon from "../../assets/profileicon.jpg";
// import  dropdownicon from '../../assets/dropdownicon.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src={netflixlogo} alt="" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Brows by Language</li>
        </ul>
      </div>
      <div className="navbar_right">
        {/* <img src={searchicon} alt="" className='icons' /> */}
        <div>
          <i className="fas fa-search"></i>
        </div>

        <p>Children</p>
        {/* <img src={bellicon} alt="" className='icons' /> */}
        <i className="far fa-bell" aria-hidden="true"></i>

        <div className="navbar-profile">
          <img src={profileicon} alt="" className="profile" />
          {/* <img src={dropdownicon} alt="" className='drop'/> */}
          <i className="fa fa-caret-down" aria-hidden="true"></i>

           <div className="dropdown">
          <p>Sign Out of Netflix</p>
        </div>
          </div>

       
      </div>
    </div>
  );
};

export default Navbar;
