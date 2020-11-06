import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const Formulario = ({crearCita}) => {

        const [cita, setCita] = useState({
            nombre: '',
            telefono: '',
            email: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });



        const [error, setError] = useState(false)


        const actualizarState = ({target}) => {
            setCita({
                ...cita,
                [target.name]: target.value
            })
        }

        //extraer valores

        const { nombre, telefono, email, fecha, hora, sintomas } = cita;

        //funcion reservar hora
         const submitCita = (e) => {
            e.preventDefault();
                //validacion de campos
               if (nombre.trim() === '' || telefono.trim() === '' || email.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
                  setError(true); 
                  return;

               }
               setError(false);

               //asignar id
               cita.id = uuidv4();

               // crear la cita
               crearCita(cita);

               //setear el formulario
               setCita({
                nombre: '',
                telefono: '',
                email: '',
                fecha: '',
                hora: '',
                sintomas: ''
               })

               
               

        }


    return (
        <>
            <h2>Crear cita</h2>

            
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null}

            <form onSubmit={ submitCita  } >
                <label> Nombre Completo</label>
                <input 
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Nombre "
                onChange={ actualizarState }
                value={nombre}
                />


            <label> Telefono </label>
                <input 
                type="text"
                name="telefono"
                className="u-full-width"
                placeholder="Telefono "
                onChange={ actualizarState }
                value={telefono}
                />

            <label> Email</label>
                <input 
                type="text"
                name="email"
                className="u-full-width"
                placeholder="Correo"
                onChange={ actualizarState }
                value={email}
                />

            <label> Fecha</label>
                <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={ actualizarState }
                value={fecha}
                
                />

            <label> Hora</label>
                <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={ actualizarState }
                value={hora}
                
                />

<           label> Sintomas</label>
                <textarea className="u-full-width"
                name="sintomas"
                onChange={ actualizarState }
                    value={sintomas}>
                
                </textarea>

            <button type="submit"
            className="u-full-width button-primary"> 
                
                Reservar hora 
                
                </button>    

            </form>
        </>


    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;