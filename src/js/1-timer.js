import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button[data-start]");
startBtn.disabled = true;
const timePicker = document.querySelector("input#datetime-picker");
const dataDays = document.querySelector("span[data-days]");
const dataHours = document.querySelector("span[data-hours]");
const dataMinutes = document.querySelector("span[data-minutes]");
const dataSeconds = document.querySelector("span[data-seconds]");
let userSelectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0].getTime() > Date.now())
    {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    } else {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        message: 'Please choose a date in the future',
        position: 'topRight',
        timeout: 2000
      });
    }
  },
};

flatpickr(timePicker, options);
startBtn.addEventListener("click", startBtnClikHandler)

function startBtnClikHandler () {
  startBtn.disabled = true;
  timePicker.disabled = true;
  const intervalId = setInterval(() => {
    const timeDiff = userSelectedDate - Date.now();
    if (timeDiff <= 0) {
        timePicker.disabled = false; 
        return clearInterval(intervalId);
    }
    const convertTimeDiff = convertMs(timeDiff);
    timerMarckupIntro(convertTimeDiff);
}, 1000)   
}

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

function timerMarckupIntro({ days, hours, minutes, seconds }) {
  dataDays.textContent = String(days).padStart(2, 0);
  dataHours.textContent = String(hours).padStart(2, 0);
  dataMinutes.textContent = String(minutes).padStart(2, 0);
  dataSeconds.textContent = String(seconds).padStart(2, 0);
}