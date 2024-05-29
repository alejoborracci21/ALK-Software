import { Form } from "./(routes)/contact/components/form";
import styles from "./pagestyles.module.css"
import Contratanos from './components/contratanos/Contratanos'
import Link from "next/link";


export default function Landing() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.page1}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h1>Adaptative Learning Kit Software </h1>

            </div>
               <p className={styles.pp}>En ALK ofrecemos soluciones de software personalizadas. Nos especializamos en desarrollo web y móvil, combinado con servicios de Marketing Digital y posicionamiento. Creamos aplicaciones robustas y escalables para mejorar la eficiencia de tu negocio. </p>
               <Link href={"/about"}><button className={styles.infobutton}>Más Información</button></Link>

          </div>
          <div className={styles.right}>

          </div>
        </div>
        <div className={styles.page2}>
          <div className={styles.title2}>
            <h2 className={styles.h2}>Servicios de Software</h2>
            <p id={styles.par}>Desarrollando Software a tu Medida con Tecnología Avanzada y Experiencia UX/UI</p>
          </div>

          <div className={styles.services}>
            <div className={styles.service}>
<div className={styles.h3}>
<svg className={styles.svg} width="34" height="34" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 3H3C1.895 3 1 3.895 1 5V19C1 20.105 1.895 21 3 21H21C22.105 21 23 20.105 23 19V5C23 3.895 22.105 3 21 3ZM21 5V8H3V5H21ZM3 19V10H21V19H3Z" fill="#000"/>
  <circle cx="5" cy="6" r="1" fill="#000"/>
  <circle cx="8" cy="6" r="1" fill="#000"/>
  <circle cx="11" cy="6" r="1" fill="#000"/>
</svg>
<h3 className={styles.h3}>Landing Pages Personalizadas</h3>

</div>            
              <p className={styles.p}>Diseño y desarrollo de Landing page a medida para promocionar productos, servicios o eventos específicos, diseñadas para captar y retener la atención del usuario y fomentar la acción deseada.</p>
     </div>


            <div className={styles.service}>
              <div className={styles.h3}>
                <svg   className={styles.svg} width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 18C6.447 18 6 18.447 6 19C6 19.553 6.447 20 7 20C7.553 20 8 19.553 8 19C8 18.447 7.553 18 7 18ZM1 1V3H3L6.6 11.59L5.24 14.04C5.086 14.311 5 14.629 5 15C5 15.553 5.447 16 6 16H19V14H6.42C6.282 14 6.172 13.891 6.172 13.754L6.18 13.735L7.1 12H14.55C14.85 12 15.13 11.84 15.29 11.56L19.88 4.47C19.96 4.34 20 4.17 20 4C20 3.447 19.553 3 19 3H5.21L4.27 1H1ZM16 18C15.447 18 15 18.447 15 19C15 19.553 15.447 20 16 20C16.553 20 17 19.553 17 19C17 18.447 16.553 18 16 18Z" fill="#000"/>
</svg>

              <h3 className={styles.h3}>Desarrollo de eCommerce</h3>
              </div>
            
              <p className={styles.p}>Creación de tiendas virtuales personalizadas, adaptadas a las necesidades  del cliente.
                Integración de pasarelas de pago seguras para transacciones en línea.
                </p>
            </div>
            <div className={styles.service}>
            <div className={styles.h3}>
            <svg  className={styles.svg}  width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 2C6.791 2 5 3.791 5 6C5 8.209 6.791 10 9 10C11.209 10 13 8.209 13 6C13 3.791 11.209 2 9 2ZM9 4C10.105 4 11 4.895 11 6C11 7.105 10.105 8 9 8C7.895 8 7 7.105 7 6C7 4.895 7.895 4 9 4ZM15 14C12.791 14 11 15.791 11 18C11 20.209 12.791 22 15 22C17.209 22 19 20.209 19 18C19 15.791 17.209 14 15 14ZM15 16C16.105 16 17 16.895 17 18C17 19.105 16.105 20 15 20C13.895 20 13 19.105 13 18C13 16.895 13.895 16 15 16ZM9 12C6.791 12 5 13.791 5 16C5 18.209 6.791 20 9 20C11.209 20 13 18.209 13 16C13 13.791 11.209 12 9 12ZM9 14C10.105 14 11 14.895 11 16C11 17.105 10.105 18 9 18C7.895 18 7 17.105 7 16C7 14.895 7.895 14 9 14Z" fill="#000"/>
</svg>

            <h3 className={styles.h3}>Desarrollo de Sistemas de Gestión Empresarial (ERP)</h3>
            </div>
              
              <p className={styles.p}>Diseño e implementación de sistemas de gestión empresarial completos que abarcan áreas como contabilidad, recursos humanos, inventario y ventas.
               </p>
            </div>
            <div className={styles.service}>
            <div className={styles.h3}>
            <svg  className={styles.svg}  width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 2C5.895 2 5 2.895 5 4V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V4C19 2.895 18.105 2 17 2H7ZM7 0H17C18.654 0 20 1.346 20 3V21C20 22.654 18.654 24 17 24H7C5.346 24 4 22.654 4 21V3C4 1.346 5.346 0 7 0ZM12 19C11.448 19 11 18.552 11 18C11 17.448 11.448 17 12 17C12.552 17 13 17.448 13 18C13 18.552 12.552 19 12 19Z" fill="#000"/>
</svg>

            <h3 className={styles.h3}>Desarrollo de Aplicaciones Móviles</h3>
            </div>
             
              <p className={styles.p}>Creación de aplicaciones móviles personalizadas para iOS y Android que brinden experiencias de usuario intuitivas y funcionales.
                </p>
            </div>
            <div className={styles.service}>
            <div className={styles.h3}>
            <svg  className={styles.svg}  width="40" height="40" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1L8.59 4.41L10 5.83L10 20.17L8.59 21.59L12 25L15.41 21.59L14 20.17L14 5.83L15.41 4.41L12 1ZM12 0L18 6L14 6L14 20L18 20L12 26L6 20L10 20L10 6L6 6L12 0Z" fill="#000"/>
</svg>

            <h3 className={styles.h3}>Servicios de Marketing Digital y SEO</h3>
            </div>
              
              <p className={styles.p}>Planificación y desarrollo de estrategia de marketing. Storytelling. Gestion y evaluacion de métricas. Posicionamiento de marca en buscadores. Publicidad en social media</p>
            </div>
            <div className={styles.service}>
            <div className={styles.h3}>
            <svg  className={styles.svg}  width="40" height="34"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="8" r="3" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.5 17C6.5 14 9.5 13 12 13C14.5 13 17.5 14 17.5 17V20H6.5V17Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="18" cy="8" r="3" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.5 17C17.5 14 20.5 13 23 13C23.609 13 24 13.391 24 14V20H20.5V17Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="6" cy="8" r="3" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.5 17C6.5 14 3.5 13 1 13C0.391 13 0 13.391 0 14V20H3.5V17Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            <h3 className={styles.h3}>Community management</h3>
            </div>
             
              <p className={styles.p}>Gestión y optimización la presencia de tu marca en redes sociales. Interaccion con la audiencia y análisis de métricas para mejorar el engagement y el crecimiento de la comunidad en línea.





</p>
            </div>
          </div>
        </div>
        <div>
          <Contratanos />
        </div>
        {/* <div className={styles.page3}>
          <Form />
        </div> */}
      </div>
    </main>
  );
}
