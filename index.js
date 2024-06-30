const gnrt = document.getElementById('gnrt');
const form = document.getElementById('form');
const pic = document.getElementById('dpic');
const dname = document.getElementById('dname');
const loc = document.getElementById('dloc');
const clg = document.getElementById('dclg');
const card = document.getElementById('dcard');
console.log(card)
card.style.visibility = 'hidden';
gnrt.addEventListener('click',(e)=>{
    e.preventDefault();
    card.style.visibility = 'visible';
    const [file] = form.elements.pic.files;
    pic.src = URL.createObjectURL(file);
    URL.revokeObjectURL(file);
    dname.innerText = form.elements.sname.value;
    loc.innerText = form.elements.loc.value;
    clg.innerText = form.elements.clg.value;
})