import styles from "./list.module.css";
import Image from "next/image";
import cat from "../images/drivers.png"
import videogames from '../images/videogames.png'
import image from '../images/image.png'
import dog from '../images/landingD.jpeg'


export const ListProyect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>LISTA DE PROYECTOS</div>

<div className={styles.projectsContainer}>
<div key="wearfashion" className={styles.proyect}>
<h1 className={styles.name}>Wearfashion</h1>
          <Image src={image} alt="cat" width={200} height={200} className={styles.image}/>
      
        </div>

        <div key="Dogs" className={styles.proyect}>
        <h1 className={styles.name}>Dogs</h1>
          <Image src={dog} alt="cat" width={400} height={200} className={styles.image}/>
        </div>

        <div key="Drivers" className={styles.proyect}>
        <h1 className={styles.name}>Drivers</h1>
          <Image src={cat} alt="cat" width={400} height={200} className={styles.image}/>

        </div>

        <div key="Videogames" className={styles.proyect}>
        <h1 className={styles.name}>Videogames</h1>
          <Image src={videogames} alt="cat" width={400} height={200} className={styles.image}/>
     
        </div>
</div>



    </div>
  );
};
