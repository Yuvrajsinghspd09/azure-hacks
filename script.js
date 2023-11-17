const button = document.querySelector('button');
button.addEventListener('click', () => {});


button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#45a049';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#3498db';
});
