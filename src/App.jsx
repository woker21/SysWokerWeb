import Menu from './componentes/menu';
import './css/general.css'
import { Footer } from './pages/inicio';
import Rutas from './pages/rutas';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Rutas/>
      <Footer/>
    </div>
  );
}

export default App;




/* links de apis para usar 
https://blog.facialix.com/mas-de-35-api-publicas-gratuitas-que-te-seran-de-ayuda-en-tus-proyectos/

y la explicacion de como cambiar de api 

Claro, te explico el código y cómo adaptarlo a diferentes APIs.

El código es un componente de React que utiliza la API de Rick and Morty para mostrar información sobre los personajes. Primero, se importan los hooks useState y useEffect de React. Luego, se crea un estado para almacenar la lista de personajes (characters) y otro estado para almacenar el número de página actual (page). El valor inicial de page es 1.

En el useEffect, se hace una petición a la API de Rick and Morty para obtener la lista de personajes de la página actual. El número de página se especifica en la URL como un parámetro de consulta (page=1 para la primera página). La respuesta se convierte a formato JSON y se actualiza el estado de characters con los resultados.

El componente renderiza un título y una lista de personajes. La lista se genera con el método map sobre el estado de characters. Para cada personaje, se crea un elemento li con su información (nombre, especie, imagen).

Para permitir al usuario cambiar de página, se crea un botón "Next Page" que actualiza el estado de page y, por lo tanto, vuelve a hacer la petición a la API con el número de página correspondiente.

Para adaptar este código a otra API, los pasos principales son:

Actualiza la URL de la petición en el useEffect para que coincida con la API que deseas usar.
Asegúrate de que el formato de respuesta sea JSON o actualiza el código en consecuencia.
Actualiza el método map para generar la lista de elementos con la información relevante de la API que estás usando.
Si la API requiere parámetros de consulta adicionales o autenticación, asegúrate de incluirlos en la URL o en el cuerpo de la petición según sea necesario.
Recuerda que cada API puede tener diferentes estructuras de datos y formas de acceder a la información, por lo que es posible que debas ajustar el código en consecuencia.


*/