import styles from "./page.module.css"
import { useState } from "react";


export default function Contact() {

  const onSubmit:Function = () => {
    //Validaciones del formulario
    console.log("Gracias por comunicarte con nosotros, te responderemos en menos de 24 horas")
    
  }

    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <form onSubmit={onSubmit()} className={styles.form}>
            <label className={styles.label}>
               Nombre:
              <input className={styles.input} type="text"></input>
            </label>

            <label className={styles.label}>
               Apellido:
              <input className={styles.input} type="text"></input>
            </label>

            <label className={styles.label}>
               Email:
              <input className={styles.input} type="email"></input>
            </label>

            <label className={styles.label}>
               Dejanos tu consulta:
              <input className={styles.input} type="text"></input>
            </label>

            <button className={styles.button} type="submit">Enviar</button>
          </form>
        </div>
      </main>
    );
  }
  