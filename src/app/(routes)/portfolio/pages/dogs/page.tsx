import style from './dogs.module.css';
import Image from 'next/image';
import paws from '../../../portfolio/images/landingD.jpeg';
import Link from 'next/link';

export default function Page() {
    return (
        <div className={style.main}>
            <div className={style.page}>
                <h1 className={style.h1}>Paws</h1>
                <Image src={paws} alt='paws' height={400} width={650} className={style.detailImage} />

                <div className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui commodi dolore ipsam facere ab eligendi in ratione illo? Quis, dolorem laborum doloremque doloribus inventore beatae sequi obcaecati earum odit optio.
                </div>
                <div className={style.tech}>
                    <h3>Tecnologías utilizadas:</h3>
                    <ul>
                        <li><i className="fab fa-html5"></i> HTML</li>
                        <li><i className="fab fa-css3-alt"></i> CSS</li>
                        <li><i className="fab fa-js"></i> JavaScript</li>
                        <li><i className="fab fa-react"></i> React JS</li>
                        <li><i className="fab fa-redux"></i> Redux</li>
                        <li><i className="fab fa-node-js"></i> Express</li>
                        <li><i className="fab fa-node"></i> Node JS</li>
                        <li><i className="fas fa-database"></i> PostgreSQL</li>
                        <li><i className="fas fa-code"></i> Sequelize</li>
                    </ul>
                </div>
                <Link href="http://localhost:3000/portfolio">
                    <button className={style.backButton}>Volver al Portafolio</button>
                </Link>
            </div>
        </div>
    );
}
