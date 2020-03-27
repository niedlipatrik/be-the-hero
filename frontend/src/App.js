import React, {useState} from 'react';
// useState recebe um array com duas informações[valor atual, e função de atualização ]

import Header from './Header';

function App() {
  const [counter, setCounter]=useState(0)
  function incrementar(){
  setCounter(counter + 1);
   console.log(counter);
}
  return (
    <div>
    <Header> Contador: {counter} </Header>
    <button onClick={incrementar}> Incrementar</button>
    </div>
    );
}

export default App;
