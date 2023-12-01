import React, { useState } from "react";
import validator from "validator";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const onChangeName = (e) => setName(e.target.value);
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);

  const validarNombre = (name) =>{
    const withoutSpaces = name.trim();
    if (withoutSpaces.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  const validarEmail = (email) =>{
    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isNameValid = validarNombre(name);
    const isEmailValid = validarEmail(email);

    if (!isNameValid || !isEmailValid) {
      alert("Por favor verifique su información nuevamente");     
    } else {
      alert(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={onChangeName}/>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" value={email} onChange={onChangeEmail}/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
