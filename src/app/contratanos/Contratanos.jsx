"use client";  // Indica que este es un componente del cliente

import React, { useEffect } from 'react';
import './page.css';
import Image from "next/image";
import ux from '../../img/Experiencia UX.png';
import mobile from '../../img/Experiencia UX (4).png';
import ecommerce from '../../img/Experiencia UX (1).png';
import landing from '../../img/Experiencia UX (3).png';

function Contratanos() {
    useEffect(() => {
        const services = document.querySelectorAll('.service');

        const handleTouchStart = (event) => {
            const service = event.currentTarget;
            service.classList.add('active');
        };

        const handleTouchEnd = (event) => {
            const service = event.currentTarget;
            service.classList.remove('active');
        };

        services.forEach(service => {
            service.addEventListener('touchstart', handleTouchStart);
            service.addEventListener('touchend', handleTouchEnd);
        });

        return () => {
            services.forEach(service => {
                service.removeEventListener('touchstart', handleTouchStart);
                service.removeEventListener('touchend', handleTouchEnd);
            });
        };
    }, []);

    return (
        <div>
            <div className='page'>
                <div className='title'>
                    <h2 className='h2'>Ventajas De Contratarnos</h2>
                </div>
                <div className='services'>
                    <div className='service'>
                        <Image src={ux} alt="ux / ui" className='img' />
                        <div className='service-text'>
                            <p className='p'>Nuestro enfoque en el desarrollo de software a medida con tecnología avanzada garantiza que tu producto esté a la vanguardia de la innovación. Además, nuestra experiencia en diseño UX/UI asegura que tus aplicaciones sean intuitivas y atractivas para los usuarios finales, mejorando la satisfacción y la retención.</p>
                        </div>
                    </div>
                    <div className='service'>
                        <Image src={landing} alt="Landing Pages" className='img' />
                        <div className='service-text'>
                            <p className='p'>Con nuestras landing pages personalizadas, no solo tendrás un diseño atractivo, sino que también te aseguramos una alta tasa de conversión. Implementamos estrategias específicas para captar y retener la atención del usuario, aumentando así las conversiones y maximizando el retorno de la inversión en marketing.</p>
                        </div>
                    </div>
                    <div className='service'>
                        <Image src={ecommerce} alt="E-commerce" className='img' />
                        <div className='service-text'>
                            <p className='p'>Nuestras tiendas virtuales personalizadas están diseñadas para adaptarse a las necesidades específicas de tu negocio. Con una integración segura de pasarelas de pago y sistemas de gestión de inventario, ofrecemos una solución completa que facilita las transacciones en línea y optimiza la gestión de productos.</p>
                        </div>
                    </div>
                    <div className='service'>
                        <Image src={mobile} alt="Aplicaciones Móviles" className='img' />
                        <div className='service-text'>
                            <p className='p'>Con nuestras aplicaciones móviles personalizadas, te garantizamos experiencias de usuario intuitivas y funcionales en dispositivos iOS y Android. Ya sea para uso interno de la empresa o para llegar a clientes externos, nuestras aplicaciones están diseñadas para satisfacer tus necesidades y objetivos comerciales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contratanos;

