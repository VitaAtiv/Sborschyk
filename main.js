import './style.css'
import { Notify } from "notiflix/build/notiflix-notify-aio";
Notify.init({
  position: right-bottom,
})
console.log(Notify.success);
Notify.success("Hello")
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  
  Notify.success("Hello");
})

