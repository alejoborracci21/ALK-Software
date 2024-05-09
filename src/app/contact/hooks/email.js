// email.js
import emailjs from '@emailjs/browser';

export const sendEmail = (form) => {

  emailjs
    .sendForm('service_0tf6a8g', 'template_hf2vq5z', form, {
      publicKey: 'fXT0NWHnV_88scNAN',
    })
    .then(
      () => {
        alert("Su mensaje fue enviado correctamente. Te responderemos en menos de 24 horas!");
      },
      (error) => {
        console.log(error)
        alert('Hubo un error al envial el Email, porfavor intentalo de nuevo');
      },
    );
};
