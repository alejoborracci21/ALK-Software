import style from './wf.module.css';
import Image from 'next/image';
import wf from '../../../portfolio/images/landingW.jpeg';

export default function Page() {
    return (
        <div className={style.main}>
            <div className={style.page}>
                <h1 className={style.h1}>Wearfashion</h1>
                <Image src={wf} alt='paws' height={400} width={650} className={style.detailImage} />

                <div className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui commodi dolore ipsam facere ab eligendi in ratione illo? Quis, dolorem laborum doloremque doloribus inventore beatae sequi obcaecati earum odit optio.
                </div>
                <div className={style.tech}>
                    <h3>Tecnologías utilizadas:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>Node JS</li>
                        <li>PostgreSQL</li>
                        <li>Sequelize</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}