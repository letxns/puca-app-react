import formFetch from '../axios/config';
import { useState, useEffect, React} from 'react';
import './Home.css'

const ManageForm = () => {

    const [id, setId] = useState(0)
    const [form, setForms] = useState([])
    const getForms = async() => {
        try {
            const response = await formFetch.get(`/api/form/${id}`)
            const data = response.data;

            console.log(data)

            setId(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getForms()
    }, [])

    return (
        <div className='home'>
            <h1>Últimos produtos</h1>
            {form.length === 0 ? 
            <p> Carregando dados... </p> : (
                form.map((form) => (
                    <div className="form" key={form.id}>
                        <h2>produto: {form.codproduto}</h2>
                        <p>descrição: {form.descricao}</p>
                        <p>data do registro: {form.incluidoEm}</p>
                        <button className="btn-gerenciar" >Atualizar produto</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default ManageForm
