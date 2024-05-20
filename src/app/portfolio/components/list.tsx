import styles from "./list.module.css";
import Image from "next/image";
import cat from "../images/cat.jpg"


export const ListProyect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>LISTA DE PROYECTOS</div>

        <div key="wearfashion" className={styles.proyect}>
          <Image src={cat} alt="cat" width={200} height={200} className={styles.image}/>
          <h1 className={styles.name}>Wearfashion</h1>
          <div className={styles.text}>
            <p className={styles.description}>Wearfashion es un E-commerce de ropa urbana donde se muestran los diferentes productos añadidos por los administradores donde el usuario puede filtrarlos para una busqueda especifica y ver los detalles del producto. Los usuarios tienen la posibilidad de registrarse para acceder a la posibilidad de comprar un producto, a la hora de comprar implementamos una pasarela de pagos con Paypal.</p>
          </div>
        </div>

        <div key="Dogs" className={styles.proyect}>
          <Image src={cat} alt="cat" width={400} height={200} className={styles.image}/>
          <h1 className={styles.name}>Dogs</h1>
          <div className={styles.text}>
            <p className={styles.description}>Wearfashion es un E-commerce de ropa urbana donde se muestran los diferentes productos añadidos por los administradores donde el usuario puede filtrarlos para una busqueda especifica y ver los detalles del producto. Los usuarios tienen la posibilidad de registrarse para acceder a la posibilidad de comprar un producto, a la hora de comprar implementamos una pasarela de pagos con Paypal.</p>
          </div>
        </div>

        <div key="Drivers" className={styles.proyect}>
          <Image src={cat} alt="cat" width={400} height={200} className={styles.image}/>
          <h1 className={styles.name}>Drivers</h1>
          <div className={styles.text}>
            <p className={styles.description}>Wearfashion es un E-commerce de ropa urbana donde se muestran los diferentes productos añadidos por los administradores donde el usuario puede filtrarlos para una busqueda especifica y ver los detalles del producto. Los usuarios tienen la posibilidad de registrarse para acceder a la posibilidad de comprar un producto, a la hora de comprar implementamos una pasarela de pagos con Paypal.</p>
          </div>
        </div>

        <div key="Videogames" className={styles.proyect}>
          <Image src={cat} alt="cat" width={400} height={200} className={styles.image}/>
          <h1 className={styles.name}>Videogames</h1>
          <div className={styles.text}>
            <p className={styles.description}>Wearfashion es un E-commerce de ropa urbana donde se muestran los diferentes productos añadidos por los administradores donde el usuario puede filtrarlos para una busqueda especifica y ver los detalles del producto. Los usuarios tienen la posibilidad de registrarse para acceder a la posibilidad de comprar un producto, a la hora de comprar implementamos una pasarela de pagos con Paypal.</p>
          </div>
        </div>



    </div>
  );
};
