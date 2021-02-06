const ctas: any = document.querySelectorAll<HTMLElement>('.square');
 /*puedo usar solo un parámetro y borrar la i, 
    porque forEach lee cada elemento del array. 
    he puesto que elemento es un HTMLElement para interiorizar .ts */
ctas.forEach( (elemento :HTMLElement) : void => {
    elemento.addEventListener('mouseover', ():void => {
        elemento.classList.add('doble');
    });
    /* puedo quitar las llaves porque es sólo una linea,y también el ;*/
    elemento.addEventListener('mouseout', ():void => 
        elemento.classList.remove('doble')
    );
});
