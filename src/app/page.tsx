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
        <div className= {styles.title2}>
          <h2 className={styles.h2}>Servicios de Software</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus a quod, corporis id recusandae nisi fuga sed magni labore!</p>
        </div>

        <div className={styles.services}>
          <div className={styles.service}>
            <h3 className={styles.h3}>Service 1</h3>
             <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              exercitationem dicta facere, ratione omnis corrupti impedit recusandae dolorem necessitatibus officia neque 
              blanditiis ea accusamus commodi iure? Quaerat voluptatem quas consectetur.</p>
          </div>
          <div className={styles.service}>
          <h3 className={styles.h3}>Service 1</h3>
             <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              exercitationem dicta facere, ratione omnis corrupti impedit recusandae dolorem necessitatibus officia neque 
              blanditiis ea accusamus commodi iure? Quaerat voluptatem quas consectetur.</p>
          </div>
          <div className={styles.service}>
          <h3 className={styles.h3}>Service 1</h3>
             <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              exercitationem dicta facere, ratione omnis corrupti impedit recusandae dolorem necessitatibus officia neque 
              blanditiis ea accusamus commodi iure? Quaerat voluptatem quas consectetur.</p>
          </div>
          <div className={styles.service}>
          <h3 className={styles.h3}>Service 1</h3>
             <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              exercitationem dicta facere, ratione omnis corrupti impedit recusandae dolorem necessitatibus officia neque 
              blanditiis ea accusamus commodi iure? Quaerat voluptatem quas consectetur.</p>
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
