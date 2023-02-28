import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const submitButton = document.querySelector('[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

function promisesResultsOutput(e) {
  e.preventDefault();
  let delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);
  submitButton.disabled = true;
  for (i = 1; i <= amount; i += 1) {
    let fullDelay = 0;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;

    fullDelay += delay;
    if (i === amount) {
      setTimeout(() => {
        submitButton.disabled = false;
      }, delay);
    }
  }
}

submitButton.addEventListener('click', promisesResultsOutput);
