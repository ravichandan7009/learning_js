import './Header.css';
import {LOGO_URL} from '../../Constants/urls';
const Header = ()=>{
    return(
        <div className="header-container">
            <div className="logo-contianer">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Orders</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;