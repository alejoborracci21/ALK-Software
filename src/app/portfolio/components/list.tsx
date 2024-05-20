import styles from "./list.module.css";
import proyectos from "../proyects.json";


interface Proyecto {
  name: string;
  description: string;
  image: string;
}

const { proyects } = proyectos;



export const ListProyect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>LISTA DE PROYECTOS</div>
      {proyects.map((p: Proyecto, index: number) => (
        <div key={index} className={styles.proyect}>
          <h1 className={styles.name}>{p.name}</h1>
          <div className={styles.text}>
            <p className={styles.description}>{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
