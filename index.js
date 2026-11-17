const sobreBtn = document.getElementById('sobre');
const paginaSobre = document.getElementById('pag-sobre');
const animadoCarimbo = document.getElementById('img-animated');
const content = document.querySelector('.content1');
const feedback = document.querySelector('.feedbacks');

sobreBtn.addEventListener('click', (e) => {

    e.preventDefault;

    paginaSobre.classList.add('open');
    content.classList.add('scale');
    feedback.classList.add('hidden');
    
    setTimeout(() => {
        animadoCarimbo.classList.add('carimbar');
    }, 1400);
    

    setTimeout(() => {
        animadoCarimbo.classList.remove('carimbar');
        animadoCarimbo.classList.add('desl');
    }, 2400);


    document.getElementById('fecharsobre').addEventListener('click', () => {
        paginaSobre.classList.remove('open');
        content.classList.remove('scale');
        feedback.classList.remove('hidden');
    })
});


document.querySelectorAll('.carrosel').forEach((carrosel) => {
    const controles = carrosel.nextElementSibling; 
    if (!controles || !controles.classList.contains('btns-carrosel')) return;

    const btnNext = controles.querySelector('.next');
    const btnBack = controles.querySelector('.back');

    btnNext.addEventListener('click', () => {
        carrosel.scrollBy({ left: carrosel.clientWidth, behavior: 'smooth' });
    });

    btnBack.addEventListener('click', () => {
        carrosel.scrollBy({ left: -carrosel.clientWidth, behavior: 'smooth' });
    });
});

const abrirCat = document.getElementById('abrircat');
const catalogo = document.querySelector('.catalogo');


abrirCat.addEventListener('click', (e) => {
    e.preventDefault();

    catalogo.classList.add('active');
    content.classList.add('scale');
    feedback.classList.add('hidden');

    document.querySelector('.voltarmenu').addEventListener('click', () =>{
        catalogo.classList.remove('active');
        content.classList.remove('scale');
        feedback.classList.remove('hidden');
    })
});
