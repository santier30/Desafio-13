import { useState } from 'react';
const Form = ({messageHandler})=>{
   
    const [name , setName]=useState('');
    const [age , setAge]=useState();

    const submitHandler=(event)=>{
        event.preventDefault();
        messageHandler(name,age);
      }

    return(
    <section>
        <article>
            <form action="" onSubmit={submitHandler}>
                <input type="text" placeholder='NOMBRE' required onChange={(event)=>setName(event.target.value.trim())}/>
                <input type="number" placeholder='EDAD' required onChange={(event)=>setAge(event.target.value)}/>
                <button>loggIn</button>
                </form>
        </article>
    </section>)
}
export default Form;