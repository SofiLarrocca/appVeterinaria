import { useState, useEffect } from 'react'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import ListadoPacientes from './componentes/ListadoPacientes'

function App() {

  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState (INITIAL) // me va a llenar con todos los pacientes que se vayan agregando
  const [pacienteModificado, setPacienteModificado] = useState ({}) // paciente que se va a modificar
  
  
  //GUARDAR EN LOCAL STORAGE
  useEffect (()=> { //almaceno en LocalStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])


  const eliminarPaciente = (id) => { 
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header></Header>
      <div className='mt-12 md:flex'>
        {/* para poder pasar info de formulario a App */}
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteModificado={pacienteModificado}
          setPacienteModificado={setPacienteModificado}>
        </Formulario>
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteModificado={setPacienteModificado}
          eliminarPaciente={eliminarPaciente}>
          </ListadoPacientes>
      </div>
    </div>
  )
}

export default App
