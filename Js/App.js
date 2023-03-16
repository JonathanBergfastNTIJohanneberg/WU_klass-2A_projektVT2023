const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.textContent;
    if (buttonText === 'Like') {
      event.target.textContent = 'Liked';
      event.target.style.backgroundColor = '#28a745';
    } else {
      event.target.textContent = 'Like';
      event.target.style.backgroundColor = '#007bff';
    }
  });
});