import styles from "./list.module.css";
import Image from "next/image";
import Link from "next/link";
import cat from "../images/drivers.png";
import videogames from '../images/videogames.png';
import image from '../images/image.png';
import dog from '../images/landingD.jpeg';

export const ListProyect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>LISTA DE PROYECTOS</div>

      <div className={styles.projectsContainer}>
        <div key="wearfashion" className={styles.proyect}>
          <h1 className={styles.name}>Wearfashion</h1>
          <Link href="/portfolio/pages/wearfashion">
            <Image src={image} alt="wearfashion" width={200} height={200} className={styles.image} />
          </Link>
        </div>

        <div key="Dogs" className={styles.proyect}>
          <h1 className={styles.name}>Dogs</h1>
          <Link href="/portfolio/pages/dogs">
            <Image src={dog} alt="dogs" width={400} height={200} className={styles.image} />
          </Link>
        </div>

        <div key="Drivers" className={styles.proyect}>
          <h1 className={styles.name}>Drivers</h1>
          <Link href="/portfolio/pages/drivers">
            <Image src={cat} alt="drivers" width={400} height={200} className={styles.image} />
          </Link>
        </div>

        <div key="Videogames" className={styles.proyect}>
          <h1 className={styles.name}>Pokemon</h1>
          <Link href="/portfolio/pages/pokemon">
            <Image src={videogames} alt="pokemon" width={400} height={200} className={styles.image} />
          </Link>
        </div>
      </div>
    </div>
  );
};
