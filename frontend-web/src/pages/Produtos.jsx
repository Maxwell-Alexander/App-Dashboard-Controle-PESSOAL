import styles from '../styles/Container.module.css';
import FormProduto from '../components/forms/FormProdutos';


function Produtos() {

    return (
        <div className={styles.containerPage}>
            <h2>Produtos</h2>
            <FormProduto />
        </div>
    );

}

export default Produtos;