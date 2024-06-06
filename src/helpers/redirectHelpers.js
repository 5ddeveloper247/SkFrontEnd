// redirectHelpers.js
//import { redirectToPhoneDialer, redirectToWhatsApp, redirectToEmail } from '../helpers/redirectHelpers';

// Function to check if the user is on a mobile device
const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

// Function to redirect to the phone dialer
export const redirectToPhoneDialer = () => {
    if (isMobileDevice()) {
        const phoneNumber =import.meta.env.VITE_ADMIN_CONTACT;
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert('Phone dialer redirection is supported only on mobile devices.');
    }
  };
  
  // Function to redirect to WhatsApp
  export const redirectToWhatsApp = () => {
    if (isMobileDevice()) {
        const phoneNumber =import.meta.env.VITE_ADMIN_WHATSAPP;
      const whatsappURL = `https://wa.me/${phoneNumber}`;
      window.location.href = whatsappURL;
    } else {
      alert('WhatsApp redirection is supported only on mobile devices.');
    }
  };

  // Function to redirect to the default email client
export const redirectToEmail = (subject = '', body = '') => {
    const emailAddress =import.meta.env.VITE_ADMIN_EMAIL_ADDRESS
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  
  
  