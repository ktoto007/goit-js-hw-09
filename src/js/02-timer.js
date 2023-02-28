import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let waitingTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    waitingTime = selectedDates[0].getTime() - new Date().getTime();

    if (waitingTime < 0) {
      Notify.warning('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const timerValues = document.querySelectorAll('.value');

flatpickr(datetimePicker, options);

function timerLogic() {
  if (waitingTime < 999) {
    return;
  }

  const newTimerValues = Object.values(convertMs(waitingTime));

  waitingTime -= 1000;

  for (let i = 0; i < timerValues.length; i += 1) {
    timerValues[i].textContent = addLeadingZero(newTimerValues[i]);
  }
}

function timerStart() {
  datetimePicker.disabled = true;
  startButton.disabled = true;
  setInterval(timerLogic, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startButton.addEventListener('click', timerStart);
