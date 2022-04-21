let conteo=0;
let auto;
const numero_t = document.querySelector('#numero');
const sumar =document.querySelector('.aumentar');
const resta =document.querySelector('.disminuir');
const comienzos = document.querySelectorAll('.botones');


    sumar.addEventListener('click',function(e){
            conteo++;
    numero_t.textContent=conteo;

    })
    resta.addEventListener('click',function(e){
        conteo--;
    numero_t.textContent=conteo;

    })
    
    comienzos.forEach(botones => {
        botones.addEventListener('click',function(e){
            
        const actual =e.currentTarget.classList;
       
        if(actual.contains('reiniciar')){
            conteo=0;
            clearInterval(auto);
        }
        if(actual.contains('iniciar')){
           auto = setInterval(() => {
                    conteo++;
                    numero_t.textContent=conteo; 
                },1000);

        }



        numero_t.textContent=conteo;     
       })
    })




