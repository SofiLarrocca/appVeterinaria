

const Paciente = ({paciente, setPacienteModificado, eliminarPaciente}) => {

    const {id} = paciente

    const handleEliminar = () => { 
        const respuesta = confirm('¿Deseas eliminar este paciente?')
        if (respuesta) { 
            eliminarPaciente(id)
        }
    }

    return (
        <>
            <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl" >
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                    <span className="font-normal normal-case ml-1">{paciente.mascota}</span>
                </p>
                
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                    <span className="font-normal normal-case ml-1">{paciente.propietario}</span>
                </p>
            
                <p className="font-bold mb-3 text-gray-700 uppercase">Email:
                    <span className="font-normal normal-case ml-1">{paciente.email}</span>
                </p>
            
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
                    <span className="font-normal normal-case ml-1">{paciente.alta}</span>
                </p>
            
                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:
                    <span className="font-normal normal-case ml-1">{paciente.sintomas}</span>
                </p>

                <div className="mt-10 flex justify-between">
                    <button
                        type='button'
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={()=>setPacienteModificado(paciente)}
                    >Editar</button>
                    <button
                     type='button'
                     className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                     onClick={handleEliminar}>Eliminar</button>
                </div>
        </div>
        </>
    )
}

export default Paciente;
