import styles from '../styles/Navbar.module.css';
import { CiMenuBurger } from "react-icons/ci";



function Navbar() {

    let openSidebar = false;

    function Expandir() {

        let sidebar = document.getElementById('sidebar');
        let root = document.getElementById('root');


        if (openSidebar == false) {
            openSidebar = true;
            root.style.gridTemplateColumns = '220px';
            sidebar.style.width = '220px';


        } else if (openSidebar) {
            openSidebar = false;
            root.style.gridTemplateColumns = '70px'
            sidebar.style.width = '70px';

        }

    }



    return (
        <div className={styles.navbar}>

            <div id={styles.iconExpandir} onClick={Expandir}>
                <CiMenuBurger />
            </div>

        </div>
    );



}

export default Navbar;