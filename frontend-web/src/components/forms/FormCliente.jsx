import Modal from 'react-modal';
import { useState } from 'react';

import CampoBusca from './CampoBusca';

import { CiEdit, CiTrash } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

import styles from '../../styles/Forms.module.css';
import stylesTbl from '../../styles/Table.module.css';
import '../../styles/Modal.css';


Modal.setAppElement('#root');


function FormClient() {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => { setIsOpen(true) }
    const closeModal = () => { setIsOpen(false) }

    const clientes = [
        { nome: 'ADIR DE SOUZA', tel: '(63)99733011' },
        { nome: 'JOÃO CARLOS FASSINA', tel: '(63)96001348' },
        { nome: 'ROBERT YURI PFAFFENZELLER', tel: '(63)96618974' },
        { nome: 'ELIZEU DE OLIVEIRA FREITAS', tel: '(63)98147143' },
        { nome: 'ANTONIO VILSON DE DEUS', tel: '(63)99717312' },
        { nome: 'SERGIO SERGIO PEQUENO', tel: '(63)99772229' },
        { nome: 'PAULO WOCJIK', tel: '(63)96159166' },
        { nome: 'JULIO CESAR DE OLIVEIRA', tel: '(63)96248795' },
        { nome: 'ELIAS CORDEIRO', tel: '(63)96307744' },
        { nome: 'NEY CESAR KOS', tel: '(63)99457555' },
        { nome: 'OLIVIO GUSTAVO CONTE', tel: '(63)91019999' },
        { nome: 'SERGIO RIBEIRO CARVALHO', tel: '(63)88744326' },
        { nome: 'AMILTON DE JESUS ANTUNES', tel: '(63)99413809' },
        { nome: 'ELOY LOPES CIDREIRA JR.', tel: '(63)99487562' },
        { nome: 'ARI ANTUNES', tel: '(63)99742078' },
        { nome: 'WELLINGTON SIMAS', tel: '(63)99364835' },
        { nome: 'LINELSON RODRIGUES', tel: '(63)85078319' },
        { nome: 'EVILÁSIO FRANCISCO PINHEIRO', tel: '(63)91994142' },
        { nome: 'IDEL CHAVES MACHADO', tel: '(63)97720597' },
        { nome: 'DARCI MARIA DA ROSA', tel: '(63)99722130' },
        { nome: 'MICHELE MAROUVO', tel: '(63)99945415' },
        { nome: 'PATRICIA DIAS MASSANARES', tel: '(63)99492102' },
        { nome: 'ZULEICA OLIVEIRA ROSA', tel: '(63)99599825' },
        { nome: 'MARCOS JOSÉ FONTES', tel: '(63)99426971' },
        { nome: 'LEONICE CLARO SOARES', tel: '(63)96882551' },
        { nome: 'GUILHERME SANCHES', tel: '(63)98098679' },
        { nome: 'EDSON FELICIDADE', tel: '(63)99715485' },
        { nome: 'WILSON POLIMENI', tel: '(63)32745829' },
        { nome: 'PAULO AUGUSTO COSTA', tel: '(63)99714035' },
        { nome: 'RUDNEI VIANA MENDES', tel: '(63)91016875' },
        { nome: 'JEAN CARLOS TEIXEIRA', tel: '(63)98128186' }
    ]



    return (

        <>
            <CampoBusca modalFuncao={openModal} />

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="modal-overlay" contentLabel="Example Modal">

                <span className="modalClose">
                    <MdOutlineClose onClick={closeModal}></MdOutlineClose>
                </span>

                <form action="" className={styles.form}>
                    <fieldset>
                        <legend>Adicionar Clientes</legend>
                        <input type="text" id="name" name="name" aria-label="name" placeholder="Nome" required />
                        <input type="tel" id="tel" name="tel" aria-label="tel" placeholder="Telefone" required />
                        <input type="submit" className={styles.bto_cadastrar} value="Cadastrar" />
                    </fieldset>
                </form>

            </Modal>

            <div>
                <table className={stylesTbl.table} id='table'>
                    <thead>
                        <tr>
                            <th>Seq</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((data, indice) => (
                            <tr key={indice + 1} >
                                <td>{indice + 1}</td>
                                <td>{data.nome}</td>
                                <td>{data.tel}</td>
                                <td className={stylesTbl.btoAcoes}>
                                    <span className={stylesTbl.iconEdit} title='Editar'><CiEdit /></span>
                                    <span className={stylesTbl.iconDelete} title='Excluir'><CiTrash /></span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FormClient;