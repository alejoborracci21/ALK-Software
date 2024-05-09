'use client'


import styles from "../page.module.css";
import { useState } from "react";
import { sendEmail } from "../hooks/email.js";

interface Mensaje {
  user_name: string;
  user_email: string;
  message: string;
}

const initialState: Mensaje = {
  user_name: "",
  user_email: "",
  message: ""
};

export const Form = () => {
  const [mensaje, setMensaje] = useState<Mensaje>(initialState);

  const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const formElement = evento.currentTarget;
    sendEmail(formElement);
    setMensaje(initialState);
  };

  const onChange = (
    evento: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensaje({
      ...mensaje,
      [evento.target.name]: evento.target.value
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <label className={styles.label}>
          Nombre:
          <input
            name="user_name"
            onChange={onChange}
            className={styles.input}
            type="text"
            value={mensaje.user_name}
            placeholder="Nombre completo"
          />
        </label>

        <label className={styles.label}>
          Email:
          <input
            name="user_email"
            onChange={onChange}
            className={styles.input}
            type="email"
            value={mensaje.user_email}
            placeholder="Tu Email"
          />
        </label>

        <label className={styles.label}>
          Dejanos tu consulta:
          <textarea
            name="message"
            onChange={onChange}
            className={styles.input}
            value={mensaje.message}
            placeholder="Deje aqui su mensaje"
          ></textarea>
        </label>

        <button className={styles.button} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};