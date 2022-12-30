import React from 'react'
import formFetch from '../axios/config';
import { useState } from 'react';
import './ConfigForm.css'

const ConfigForm = () => {
    const [codproduto, setCodproduto] = useState()
    const [descricao, setDescricao] = useState()

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
        <>
            <form onSubmit={(e) => createForm(e)}>
                    <div className='new-form-control'>
                        <label htmlFor='codproduto'>codproduto</label>
                        <input type='number' name='codproduto' id='codproduto' placeholder='Digite o codproduto' onChange={(e) => setCodproduto(Number(e.target.value))}></input>
                    </div>
                    <div className='new-form-control'>
                        <label htmlFor='descricao'>descricao</label>
                        <textarea name='descricao' id='descricao' placeholder='Digite a descricao' onChange={(e) => setDescricao(e.target.value)}></textarea>
                    </div>
                    {/* <div className='new-form-control'>
                        <label htmlFor='inputNumber'></label>
                        <input type='number' name='inputNumber' id='inputNumber' placeholder='Digite um número' onChange={(e) => setCodproduto(Number(e.target.value))}></input>
                    </div>
                    <div className='new-form-control'>
                        <label htmlFor='inputText'>inputText</label>
                        <textarea name='inputText' id='inputText' placeholder='Digite um texto' onChange={(e) => setDescricao(e.target.value)}></textarea>
                    </div> */}
                    <input type='submit' value='Enviar resposta' className='btn-enviar'></input>
                    <button className='btn-add'>Adicionar novo item</button>

            </form>
        </>
    )
}

export default ConfigForm