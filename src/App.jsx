import './Styles.css';
import Form from './Componrntd/Form/Form';
import Message from './Componrntd/Message/Message';
import { useState } from 'react';


function App() {
  const [message,setMessage]=useState('')
const messageHandler=(name,age)=>{
setMessage(age>18?`Bienvenido ${name}, gracias por usar nuestra aplicación`:
`Hola ${name}, eres muy joven para usar esta aplicación`)
}
  return (
 <main>
  <Form messageHandler={messageHandler}/>
  <Message message={message}/>
 </main>
  );
}

export default App;
