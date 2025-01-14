(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",n="/vite.svg";function a(i){let r=0;const c=o=>{r=o,i.innerHTML=`count is ${r}`};i.addEventListener("click",()=>c(r+1)),c(0)}document.querySelector("#app").innerHTML=`
      <div id="app"
        class="m-5 p-5 flex flex-col justify-center items-center" >
        <div id="app-container"
          class="m-5 p-5 flex flex-row justify-start items-center" >
          <h1 classe="m-2.5 p-2.5 text-2.5xl font-semibold" >
            Templates
          </h1>
          <a href="https://vitejs.dev" target="_blank">
          <img src="${n}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${l}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        </div>
        <div id="app-card"
          class="m-2.5 p-2.5 flex flex-row justify-center items-center" >
          <div class="card">
            <button id="counter" type="button"></button>
          </div>
          <p class="m-2.5 p-2.5 bg-[#1A1A21] text-slate-300 rounded-xl" >
            Edit <code>./src/main.js</code> and save to test Hmr
          </p>
        </div>
        <p id="read" class="m-2.5 p-2.5 bg-[#1A121A] rounded-lg"  >
          Click on the Vite and React Logos to learn more
        </p>
      </div>
`;a(document.querySelector("#counter"));
