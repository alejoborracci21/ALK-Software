'use client'

import styles from "../page.module.css"
import { useState } from "react"

interface Mensaje {
  name: string,
  subname: string,
  email: string,
  msj: string
}



export const Form = () => {


    const [mensaje, setMensaje] = useState<Mensaje>({
        name: "",
        subname: "",
        email:"",
        msj: ""
      })
    
      const onSubmit = (evento:any) => {
        alert("Su mensaje fue enviado correctamente. Te responderemos en menos de 24 horas!")
      }
    
      const onChange = (evento:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setMensaje({
          ...mensaje,
          [evento.target.name]: evento.target.value
        })
      }


    return(
        <div className={styles.container}>
        <form onSubmit={onSubmit}className={styles.form}>
          <label className={styles.label}>
             Nombre:
            <input  name="name" onChange={onChange} className={styles.input} type="text" value={mensaje.name} placeholder="Nombre"></input>
          </label>

          <label className={styles.label}>
             Apellido:
            <input  name="subname" onChange={onChange} className={styles.input} type="text" value={mensaje.subname} placeholder="Apellido"></input>
          </label>

          <label className={styles.label}>
             Email:
            <input  name="email" onChange={onChange} className={styles.input} type="email" value={mensaje.email} placeholder="Tu Email"></input>
          </label>

          <label className={styles.label}>
             Dejanos tu consulta:
            <textarea name="msj" onChange={onChange} className={styles.input} value={mensaje.msj} placeholder="Deje aqui su mensaje"></textarea>
          </label>

          <button className={styles.button} type="submit">Enviar</button>
        </form>
      </div>
    )
}