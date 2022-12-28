import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <>
      <h2>This is a form</h2>
      <form onSubmit={handleSubmit()}>
        <label>
          Código de produto
          <input type="number" { ...register("codproduto")} />
        </label>
        <label>
          Descrição
          <input type="text" { ...register("descricao")} />
        </label>        
      
        <button type='submit'>Enviar</button>

  </form>
    </>
  )
}

export default App
