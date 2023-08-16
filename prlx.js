let hut_ri = document.getElementById('hut_ri'); //ini buat nyomot id hut_ri di html



window.addEventListener('scroll', () => {
    let value = window.scrollY;
    hut_ri.style.marginTop = value * 2.0 + 'px'; //ini buat atur value scrollnya
    
});