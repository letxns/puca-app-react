import formFetch from '../axios/config';
import { useNavigate } from 'react-router-dom';
import './NewForm.css';

const NewForm = () => {
    const navigate = useNavigate()

    const createForm = async (e) => {
        e.preventDefault();
        console.log("teste", codproduto, descricao)
        const form = { codproduto, descricao };

        await formFetch.post('/api/form/', form, {
            body: form,
        })
        .then(() => {
            console.log("deu bom")            
        })

        .catch(() => {
            console.log("deu ruim")
        })

        // navigate('/form');
    }

    return (
        <div className='new-form'>
            <h2>Novo formulário</h2>
            {/* <form onSubmit={(e) => createForm(e)}>
                <div className='new-form-control'>
                    <label htmlFor='codproduto'>codproduto</label>
                    <input type='number' name='codproduto' id='codproduto' placeholder='Digite o codproduto' onChange={(e) => setCodproduto(Number(e.target.value))}></input>
                </div>
                <div className='new-form-control'>
                    <label htmlFor='descricao'>descricao</label>
                    <textarea name='descricao' id='descricao' placeholder='Digite a descricao' onChange={(e) => setDescricao(e.target.value)}></textarea>
                </div>
                <input type='submit' value='Criar form' className='btn-gerenciar'></input>
            </form> */}
        </div>
    )
}

export default NewForm