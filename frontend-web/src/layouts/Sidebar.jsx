import { NavLink } from 'react-router-dom';

import styles from '../styles/Sidebar.module.css';
import { CiHome, CiBarcode, CiBag1, CiUser } from "react-icons/ci";
import { VscGraphLine } from "react-icons/vsc";


function Sidebar() {



    return (
        <div className={styles.sidebar} id='sidebar'>

            <ul>

                <li>
                    <NavLink to='/'>
                        <span className={styles.icon}><CiHome /></span>
                        <span className={styles.descricaoIcon}>Home</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/pedidos'>
                        <span className={styles.icon}><CiBag1 /></span>
                        <span className={styles.descricaoIcon}>Pedidos</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clientes'>
                        <span className={styles.icon}><CiUser /></span>
                        <span className={styles.descricaoIcon}>Clientes</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/produtos'>
                        <span className={styles.icon}><CiBarcode /></span>
                        <span className={styles.descricaoIcon}>Produtos</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/relatorios'>
                        <span className={styles.icon}><VscGraphLine /></span>
                        <span className={styles.descricaoIcon}>Relatórios</span>

                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;