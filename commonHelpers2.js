import"./assets/modulepreload-polyfill-ec808ebb.js";const r=document.querySelector("section"),n=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`;r.insertAdjacentHTML("beforeend",n);const t=document.querySelector(".feedback-form"),a=t.querySelector('[name="email"]'),o=t.querySelector('[name="message"]'),s=localStorage.getItem("feedback-form-state");if(s){const e=JSON.parse(s);a.value=e.email,o.value=e.message}t.addEventListener("input",()=>{const e={email:a.value.trim(),message:o.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",i);function i(e){e.preventDefault();const m=a.value.trim(),l=o.value.trim();if(m===""||l===""){alert("Будь ласка, заповніть обидва поля форми.");return}else console.log({email:m,message:l}),localStorage.removeItem("feedback-form-state"),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
