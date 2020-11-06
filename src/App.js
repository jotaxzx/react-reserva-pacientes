import React, { Fragment, useState } from 'react';
import Cita from './components/Cita';

import Formulario from './components/Formulario';

function App () {

  //arreglo de todas las citas
  const [citas, setCitas] = useState([]);

  //fc para leer citas y guardar nuevas citas
  const crearCita = (cita) => {
    setCitas([ ...citas,
      cita
    ]);
  }

  //eliminar cita por id
  const eliminarCita = id => {
    const  listaCitas = citas.filter(cita => cita.id !== id);
    setCitas(listaCitas);
  }

  //titulo condicional
  const titulo = citas.length === 0 ? 'No existen citas' : 'Administrador de citas';


  return (

    <>
    <h1>Reserva de horas</h1>

    <div className="container">
    <div className="row">
      <div className="one-half column">
        <Formulario crearCita={crearCita} />
      </div>
      <div className="one-half column">
        <h2> {titulo} </h2>
        {citas.map(cita => (
          <Cita 
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
          />
        ))}
      </div>
    </div>
    </div>

    </>
  );
}

export default App;
