import formFetch from '../axios/config';
import { useState, useEffect, React} from 'react';
import './Home.css'

const ManageForm = () => {
    
    // const [id, setId] = useState([2])
    const [form, setForm] = useState([])
    const getForm = async() => {

        try {
            const response = await formFetch.get(`/api/form/`)
            const data = response.data;

            console.log(data)

            setForm(data)

        } catch (error) {
            console.log(error)
        }
        // console.log(id)
    }


    useEffect(() => {
        getForm()
    }, [])

    return (
        <div>
            {form === 0 ? 
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
