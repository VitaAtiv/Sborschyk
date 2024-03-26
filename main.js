import './style.css'
import { Notify } from "notiflix/build/notiflix-notify-aio";
Notify.init({
  success: {position: "center-top", background: "rgba(3,0.5,0,0.5)"},
});
console.log(Notify.success);
Notify.success("Hello")
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  
  Notify.success("Hello");
})

