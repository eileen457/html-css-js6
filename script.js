  const letras = document.querySelector("#text-input");

  function updateCount(letras) {
  const contador = document.querySelector("#char-count");

   if(letras.value.length>49){
    contador.style.color="red";
    letras.value=letras.value.slice(0,50);
    }else if(letras.value.length<=50){
       contador.style.color="grey";
    }
  
  contador.textContent = `Character Count: ${letras.value.length}/50`;
}

  letras.addEventListener("input",()=>{
  updateCount(letras);
  }
  )
