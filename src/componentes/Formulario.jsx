import { useState, useEffect } from "react";
import Error from './Error';

const Formulario = ({pacientes, setPacientes, pacienteModificado}) => { 

    const [mascota, setMascota] = useState ('')
    const [propietario, setPropietario] = useState ('')
    const [email, setEmail] = useState ('')
    const [alta, setAlta] = useState ('')
    const [sintomas, setSintomas] = useState ('')

    const [error, setError] = useState(false)


    useEffect (()=> { 
        if (Object.keys(pacienteModificado).length > 0) { 
            setMascota(pacienteModificado.mascota)
            setPropietario(pacienteModificado.propietario)
            setEmail(pacienteModificado.email)
            setAlta(pacienteModificado.alta)
            setSintomas(pacienteModificado.sintomas)
        }
    },[pacienteModificado])


    const handleSubmit = (e) => {
        e.preventDefault();
       
        // Validacion Formulario
        if([mascota, propietario, email, alta, sintomas].includes('')) { //si un campo viene vacio '' aparece mensaje de error
            setError(true)
            return;
        } 
        setError(false)

        const generarID = () => { // para generar una ID única a cada paciente
            const random = Math.random().toString(36).substr(2);
            const fecha = Date.now().toString(36)

            return random + fecha
        }

        const objPaciente = {
            mascota,
            propietario,
            email,
            alta,
            sintomas,
        } 

        // Comprobar si es nuevo registro o edicion de uno existente.
        // Si existe id es porque ya fue creado el objeto Paciente, y lo estas modificando
        if (pacienteModificado.id) {
            // Editando registro

            objPaciente.id = pacienteModificado.id
            
            const pacienteActualizado = pacientes.map(pacienteActualizado =>  
                pacienteActualizado.id === pacienteModificado.id ? objPaciente : pacienteActualizado)
                
            setPacientes(pacienteActualizado)
        
        } else { 
            // Nuevo registro
            objPaciente.id = generarID(); //1° genero el ID, luego lo agrego a pacientes
            setPacientes([...pacientes, objPaciente]);
           }

        //Resetear formulario    
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }


    return(
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10"> Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

            {error && <Error mensaje='todos los campos son obligatorios'></Error>}

            <div className="mb-5">
                    <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
                    <input 
                        id='mascota'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type='text'
                        placeholder = 'Nombre del Propietario'
                        value={mascota} 
                        onChange={(e)=>setMascota(e.target.value)} // capturo el valor que se esta escribiendo y guardo en el estado
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">Nombre Porpietario</label>
                    <input 
                        id='propietario'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type='text'
                        placeholder = 'Nombre del Propietario'
                        value={propietario}
                        onChange={(e)=>setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email Contacto Propietario</label>
                    <input 
                        id='email'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type='email'
                        placeholder = 'Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        
                    />
                </div>

                
                <div className="mb-5">
                    <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input 
                        id='alta'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type='date'
                        value={alta}
                        onChange={(e)=>setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea 
                        id='sintomas'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e)=>setSintomas(e.target.value)}
                    />
                </div>

                <input
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    type='submit'
                    value={pacienteModificado.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>

        </div>
    )
}

export default Formulario;