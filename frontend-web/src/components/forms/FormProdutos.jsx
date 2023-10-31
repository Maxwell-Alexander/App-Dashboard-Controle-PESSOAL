import styles from '../../styles/Forms.module.css';
import stylesTbl from '../../styles/Table.module.css'
import { CiEdit, CiTrash } from "react-icons/ci";

import BtoAdicionar from './BtoAdicionar';
import inputDeBuscaClient from '../../functions/inputDeBusca';



function FormProduto() {

    const produtos = [
        { produto: 'Arroz', fornecedor: 'Alimentos LTDA', valorProduto: '17,99' },
        { produto: 'Feijão Carioquinha', fornecedor: 'Alimentos LTDA', valorProduto: '7,99' },
        { produto: 'Açúcar Cristal', fornecedor: 'Alimentos LTDA', valorProduto: '16,25' },
        { produto: 'Café em Pó', fornecedor: 'Alimentos LTDA', valorProduto: '7,79' },
        { produto: 'Farinha de Trigo', fornecedor: 'Alimentos LTDA', valorProduto: '4,49' },
        { produto: 'Batata Inglesa', fornecedor: 'Alimentos LTDA', valorProduto: '3,89' },
        { produto: 'Banana', fornecedor: 'Alimentos LTDA', valorProduto: '3,69' },
        { produto: 'Tomate', fornecedor: 'Alimentos LTDA', valorProduto: '4,98' },
        { produto: 'Ovos Brancos', fornecedor: 'Alimentos LTDA', valorProduto: '9,99' },
        { produto: 'Margarina', fornecedor: 'Alimentos LTDA', valorProduto: '5,89' },
        { produto: 'Óleo de Soja', fornecedor: 'Alimentos LTDA', valorProduto: '6,39' },
        { produto: 'Leite Integral', fornecedor: 'Alimentos LTDA', valorProduto: '4,59' },
        { produto: 'Macarrão Espaguete', fornecedor: 'Alimentos LTDA', valorProduto: '3,09' },
        { produto: 'Pão Francês', fornecedor: 'Alimentos LTDA', valorProduto: '10,99' },
        { produto: 'Sabão em Pó', fornecedor: 'Alimentos LTDA', valorProduto: '4,39' },
        { produto: 'Sabão em Barra', fornecedor: 'Alimentos LTDA', valorProduto: '10,98' },
        { produto: 'Água Sanitária', fornecedor: 'Alimentos LTDA', valorProduto: '1,29' },
        { produto: 'Detergente Líquido', fornecedor: 'Alimentos LTDA', valorProduto: '1,19' },
        { produto: 'Papel Higiênico', fornecedor: 'Alimentos LTDA', valorProduto: '2,59' },
        { produto: 'Creme Dental', fornecedor: 'Alimentos LTDA', valorProduto: '3,99' },
        { produto: 'Sabonete Liquido', fornecedor: 'Alimentos LTDA', valorProduto: '1,99' },
        { produto: 'Carne Coxão Mole', fornecedor: 'Alimentos LTDA', valorProduto: '33,00' },
        { produto: 'Carne Acém', fornecedor: 'Alimentos LTDA', valorProduto: '23,99' }
    ];

    return (

        <>
            <form action="" className={styles.form}>
                <input type="text" id="produto" name="produto" aria-label="produto" placeholder="Produto" required />
                <input type="text" id="fornecedor" name="fornecedor" aria-label="fornecedor" placeholder="Fornecedor" required />
                <input type="number" id="valorProduto" name="valorProduto" aria-label="valorProduto" placeholder="Valor unitario" step="0.01" required />
                <input type="submit" className={styles.bto_cadastrar} value="Cadastrar" />
            </form>

            <span className={styles.boxBusca}>
                <input type="search" id="campoBusca" className={styles.campoBusca} name="campo busca" aria-label="campo busca" placeholder="Pesquisar" onKeyUp={inputDeBuscaClient} />
                <BtoAdicionar />
            </span>

            <div>
                <table className={stylesTbl.table} id='table'>
                    <thead>
                        <tr>
                            <th>Seq</th>
                            <th>Produto</th>
                            <th>Fornecedor</th>
                            <th>Valor unit.</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((data, indice) => (
                            <tr key={indice + 1}>
                                <td>{indice + 1}</td>
                                <td>{data.produto.toUpperCase()}</td>
                                <td>{data.fornecedor}</td>
                                <td>R$ {data.valorProduto}</td>
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

export default FormProduto;