const btns = document.querySelectorAll('button');
let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  /*  i++;
  if (i == 1) {
    btn.removeEventListener('click', deleteElement);
  } */
};
btns.forEach((el) =>
  el.addEventListener('click', deleteElement, { once: true })
);
/* btn.addEventListener('click', (e) => {
  e.target.remove();
}); */
//btn.addEventListener('click', () => console.log('ways'));

//btn.addEventListener('click', deleteElement);
const overlay = document.querySelector('.overlay');
//overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
