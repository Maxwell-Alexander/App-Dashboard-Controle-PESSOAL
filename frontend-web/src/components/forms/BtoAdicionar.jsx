/* eslint-disable react/prop-types */
import styles from '../../styles/Forms.module.css';
import { CiMedicalCross } from "react-icons/ci";



function BtoAdicionar({ onClick }) {


    return (
        <div>
            <button className={styles.bto_adicionar} onClick={onClick} >
                <span><CiMedicalCross /></span>
                <span>Adicionar</span>
            </button>
        </div>
    );
}

export default BtoAdicionar;