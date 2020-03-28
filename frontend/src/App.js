import React from 'react';
//import React, {useState} from 'react'; -utilizado para o exemplo conter
// useState recebe um array com duas informações[valor atual, e função de atualização ]

// import Header from './Header'; ->exemplo de counter
import './global.css'

import Routes from './routes'

function App() {
// ***** exemplo counter 
//   const [counter, setCounter]=useState(0)
//   function incrementar(){
//   setCounter(counter + 1);
//    console.log(counter);
// }
//   return (
//     <div>
//     <Header> Contador: {counter} </Header>
//     <button onClick={incrementar}> Incrementar</button>
//     </div>
//     );
return (
<Routes />
);
}

export default App;
