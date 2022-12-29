import formFetch from '../axios/config';
import { useState, useEffect, React} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const [form, setForms] = useState([])
    const getForms = async() => {
        try {
            const response = await formFetch.get("/api/form")
            const data = response.data;

            console.log(data)

            setForms(data)
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
                        <Link to={`/form/${form.id}`} className="btn-gerenciar" >Gerenciar produto</Link>
                    </div>
                ))
            )}
        </div>
    )
}

export default Home