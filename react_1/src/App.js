// Saludo.js
import React from 'react';

const Saludo = ({ nombre }) => {
  return <h1>¡Hola, {nombre}! Bienvenido a mi aplicación React.</h1>;
};

export default Saludo;

// Informacion.js
import React from 'react';

const Informacion = ({ detalle }) => {
  return <p>{detalle}</p>;
};

export default Informacion;

// App.js (Componente principal)
import React from 'react';
import Saludo from './Saludo';  
import Informacion from './Informacion';

const App = () => {
  return (
    <div>
      <Saludo nombre="Juan" />
      <Informacion detalle="Esta es una aplicación sencilla en React." />
    </div>
  );
};

export default App;
