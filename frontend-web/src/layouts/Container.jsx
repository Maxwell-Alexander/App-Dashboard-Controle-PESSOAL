import { Outlet } from 'react-router-dom';
import styles from '../styles/Container.module.css';

function Container() {

    return <div className={styles.container}><Outlet /></div>;

}

export default Container;