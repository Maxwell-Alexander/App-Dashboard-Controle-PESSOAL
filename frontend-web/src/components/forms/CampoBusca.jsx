/* eslint-disable react/prop-types */
import inputDeBuscaClient from '../../functions/inputDeBusca';
import BtoAdicionar from './BtoAdicionar';

import styles from '../../styles/Forms.module.css';

function CampoBusca({modalFuncao}) {


    return (
        <span className={styles.boxBusca}>
            <input type="search" id="campoBusca" className={styles.campoBusca} name="campoBusca" aria-label="campo busca" placeholder="Pesquisar" onKeyUp={inputDeBuscaClient} />
            <BtoAdicionar onClick={modalFuncao} />
        </span>
    );
}

export default CampoBusca;