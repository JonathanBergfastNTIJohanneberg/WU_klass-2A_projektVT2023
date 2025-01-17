const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const likeButtons = document.querySelectorAll('.like-button');
const filterButtons = document.querySelectorAll('.filter_button');
const priceRangeInput = document.getElementById('price-range');
const articles = document.querySelectorAll('.box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;
        const articles = document.querySelectorAll('#explore_section article');
        articles.forEach(article => {
            if (filterValue === 'all' || article.dataset.type === filterValue) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });

        button.classList.add('active');
    });
});


likeButtons.forEach(button => {
    let isLiked = false;
    button.addEventListener('click', () => {
        isLiked = !isLiked;
        if (isLiked) {
            button.innerHTML = '<span class="fa fa-heart"></span>';
        } else {
            button.innerText = 'Like';
        }
    });
});

menuBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});


priceRangeInput.addEventListener('input', updateArticleVisibility);


function updateArticleVisibility() {
  const priceRange = parseInt(priceRangeInput.value);
  
  
  articles.forEach((article) => {
    const priceElement = article.querySelector('.price');
    const price = parseInt(priceElement.textContent.substring(1));
    
   
    if (price <= priceRange || priceElement.textContent === 'Free') {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}