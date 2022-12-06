import Paciente from './Paciente'


const ListadoPacientes = ({pacientes, setPacienteModificado, eliminarPaciente}) => { 

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
            
            {pacientes.length ? (
                <>        
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes</span>
                    </p>

                    {pacientes.map ((paciente)=> // por cada paciente que se agrega se va a muestrar en el componente Paciente
                    <Paciente 
                        // key={index}  hacerlo por index es mala práctica
                        paciente={paciente} // paso todos los datos por props
                        key={paciente.id}
                        setPacienteModificado={setPacienteModificado}
                        eliminarPaciente={eliminarPaciente}/>        
                    )}
                </>
            ): (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">Comienza agregando {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes;