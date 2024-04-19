import {Outlet} from 'react-router-dom'
import Navber from '../shared/Navber/Navber';
import Footer from '../shared/Footer/Footer';
export default function MainLeyout() {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
}