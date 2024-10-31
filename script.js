var imagenes = ['img/cafe2.jfif', 'img/cafe3.jfif', 'img/cafe1.jfif', 'img/cafe4.jpg']
    i = 0;

function carrousel(cont) {
    cont.addEventListener('click', e => {
        let anterior = cont.querySelector('.anterior'),
            siguiente = cont.querySelector('.siguiente'),
            img = cont.querySelector('img'),
            tgt = e.target;

        if(tgt == anterior){
            if(i > 0){
                img.src = imagenes[i - 1];
                i--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                i = imagenes.length - 1; 
            }

        } else if(tgt == siguiente){
            if(i < imagenes.length - 1){
                img.src = imagenes[i + 1];
                i++;
            } else {
                img.src = imagenes[0];
                i = 0; 
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carrousel');

    carrousel(contenedor);
})