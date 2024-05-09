import styles from "./pagestyles.module.css"

export default function Landing() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.page1}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h1>Adaptative Learning Kit Software </h1>

            </div>
            <p className={styles.pp}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni reprehenderit cumque architecto dolorum, ab, et doloribus consectetur, odit praesentium vitae aperiam facere excepturi fugit eveniet? Est alias tenetur ipsa omnis!</p>
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
              <h3 className={styles.h3}>Landing Pages Personalizadas</h3>
              <p className={styles.p}>Diseño y desarrollo de páginas de aterrizaje a medida para promocionar productos, servicios o eventos específicos.Optimización para conversiones, asegurando que las páginas estén diseñadas para captar y retener la atención del usuario y fomentar la acción deseada.</p>
            </div>
            <div className={styles.service}>
              <h3 className={styles.h3}>Desarrollo de E-Comeerce</h3>
              <p className={styles.p}>Creación de tiendas virtuales personalizadas, adaptadas a las necesidades y especificaciones del cliente.
                Integración de pasarelas de pago seguras para facilitar transacciones en línea.
                Implementación de sistemas de gestión de inventario para un seguimiento eficiente de los productos.</p>
            </div>
            <div className={styles.service}>
              <h3 className={styles.h3}>Desarrollo de Sistemas de Gestión Empresarial (ERP)</h3>
              <p className={styles.p}>Diseño e implementación de sistemas de gestión empresarial completos que abarcan áreas como contabilidad, recursos humanos, inventario y ventas.
Personalización para adaptarse a las operaciones específicas de cada cliente y mejorar la eficiencia y la productividad.</p>
            </div>
            <div className={styles.service}>
              <h3 className={styles.h3}>Desarrollo de Aplicaciones Móviles</h3>
              <p className={styles.p}>Creación de aplicaciones móviles personalizadas para iOS y Android que brinden experiencias de usuario intuitivas y funcionales.
Desarrollo de aplicaciones tanto para uso interno de la empresa como para llegar a clientes externos, según las necesidades del cliente.</p>
            </div>
          </div>
        </div>
        <div className={styles.page3}>
          <p>Section 3</p>
        </div>
      </div>
    </main>
  );
}
