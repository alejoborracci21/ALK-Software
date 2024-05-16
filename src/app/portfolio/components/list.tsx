import styles from "./list.module.css"
import proyectos from "../proyects.json"

interface Proyecto {
  name: string,
  description: string,
  image: string
}

const {proyects} = proyectos



export const ListProyect = () => {


    return (
      <div className={styles.container}>
        <div>LISTA DE PROYECTOS</div>
        <div>{proyects.map((p:any) => 
        <div className={styles.proyect}>
            <h1 className={styles.name}>{p.name}</h1>
            <p className={styles.description}>{p.description}</p>
            <h1 className={styles.image}>{p.image}</h1>
        </div>)}</div>
      </div>
    );
}