import React from 'react';
import './assets/css/App.css';
import SearchAppBar from './components/NavBar/NavBar';
import ControlledExpansionPanels from './components/Acordeon/Acordeon';
import InsetDividers from './components/Divider/Divider';
import './assets/css/FlexBox.css'
import OpenIconSpeedDial from './components/MyInfo/MyInfo';
import Alert from '@material-ui/lab/Alert';

function App() {
  return (

    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <header>
        <SearchAppBar />
        <Alert severity="info">La api https://reqres.in/ por algunos problemas no funciono, para este tome https://jsonplaceholder.typicode.com/users, que cumple la misma funcion
        <br></br> Para las operaciones CRUD lo hago individualmente en el codigo y en el front imprimos las respuestas de consumir el servicio</Alert>
      </header>
      <div id='main'>
        <article>
          <ControlledExpansionPanels />

        </article>
        <nav>
          <InsetDividers />
        </nav>
        <aside>          <OpenIconSpeedDial /></aside>
        
      </div>
      <footer></footer>

    </div>
  );
}

export default App;
