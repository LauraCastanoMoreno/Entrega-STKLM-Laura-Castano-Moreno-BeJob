var ctas = document.querySelectorAll('.square');
/*puedo usar solo un parámetro y borrar la i,
   porque forEach lee cada elemento del array.
   he puesto que elemento es un HTMLElement para interiorizar .ts */
ctas.forEach(function (elemento) {
    elemento.addEventListener('mouseover', function () {
        elemento.classList.add('doble');
    });
    /* puedo quitar las llaves porque es sólo una linea,y también el ;*/
    elemento.addEventListener('mouseout', function () {
        elemento.classList.remove('doble');
    });
});
