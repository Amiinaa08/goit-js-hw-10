import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') resolve(delay);
      else reject(delay);
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        titleColor: '#fff',
        messageColor: '#fff',
        theme: 'dark',
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        theme: 'dark',
      });
    });

  form.reset();
});
