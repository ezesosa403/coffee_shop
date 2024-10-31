var imagenes = ['img/café_negro.jpg', 'img/capuchino_clásico.jpg', 'img/café_con_leche.jpg', 'img/café_con_hielo.jpg']
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