function norequiere(e){
    let target = e.target,

     randomW = numeroRandom(0, 500),
     randomH = numeroRandom(0, 900);
     

     target.style.position = "absolute";
     target.style.top = randomW + 'px';
     target.style.left= randomH + 'px';

  
}
const correcto = ()=>{
    Swal.fire("Sabia que dirias que Siii! ❤️");
}

const numeroRandom = (min, max) =>{
    return Math.floor(Math.random()*(max-min))+min;
}

