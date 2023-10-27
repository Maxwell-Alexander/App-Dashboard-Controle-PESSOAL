import styles from '../styles/Container.module.css';
import FormClient from '../components/forms/FormCliente';

function Clientes() {

    return (
        <div className={styles.containerPage}>
            <h2>Clientes</h2>
            <FormClient />
        </div>
    );

}

export default Clientes;