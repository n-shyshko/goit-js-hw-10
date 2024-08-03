import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconSuccess from '../img/ok.svg';
import iconError from '../img/nok.svg';

const formElement = document.querySelector('.form');

formElement.addEventListener('submit', onGetNotify);

function onGetNotify(event) {
  event.preventDefault();
  const getTime = event.target.elements.delay.value;
  const getRadio = event.target.elements.state.value;

  const popupShow = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRadio === 'fulfilled') {
        return resolve(getTime);
      }
      else {
        return reject(getTime);
      }
    }, getTime);
  });
  popupShow
    .then(() => {
      iziToast.success({
        iconUrl: iconSuccess,
        title: 'OK',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        message: `Fulfilled promise in ${getTime}ms`,
        timeout: 2000,
      });
    })
    .catch(() => {
      iziToast.error({
        iconUrl: iconError,
        title: 'Error',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        message: `Rejected promise in ${getTime}ms`,
        timeout: 2000,
      });
    });
  event.target.reset();
}