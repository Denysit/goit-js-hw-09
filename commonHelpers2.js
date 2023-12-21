import"./assets/modulepreload-polyfill-ec808ebb.js";const s=document.querySelector("section"),n=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`;s.insertAdjacentHTML("beforeend",n);const t=document.querySelector(".feedback-form"),a=t.querySelector('[name="email"]'),o=t.querySelector('[name="message"]'),m=localStorage.getItem("feedback-form-state");if(m)try{const e=JSON.parse(m);a.value=e.email,o.value=e.message}catch(e){console.error("LOCAL STORAGE PARSE ERROR",e)}t.addEventListener("input",()=>{const e={email:a.value.trim(),message:o.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",c);function c(e){e.preventDefault();const r=a.value.trim(),l=o.value.trim();if(r===""||l===""){alert("Будь ласка, заповніть обидва поля форми.");return}else console.log({email:r,message:l}),localStorage.removeItem("feedback-form-state"),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
