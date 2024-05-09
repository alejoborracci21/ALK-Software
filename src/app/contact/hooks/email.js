// email.js
import emailjs from '@emailjs/browser';

export const sendEmail = (form) => {

  emailjs
    .sendForm('service_0tf6a8g', 'template_hf2vq5z', form, {
      publicKey: 'fXT0NWHnV_88scNAN',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
};
