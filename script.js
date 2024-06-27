// Create elements
const container = document.createElement('div');
container.className = 'container';

const card = document.createElement('div');
card.className = 'card';

const img = document.createElement('imgg');
img.src = 'imgg.png';
img.alt = 'Felicia Sephodi';
img.style.width = '100%';

const h1 = document.createElement('h1');
h1.textContent = 'Felicia Sephodi';

const title = document.createElement('p');
title.className = 'title';
title.textContent = 'Software Engineer';

const company = document.createElement('p');
company.textContent = 'Keeys Consulting';

const twitterLink = document.createElement('a');
twitterLink.href = '#';
twitterLink.innerHTML = '<i class="fa fa-twitter"></i>';

const linkedinLink = document.createElement('a');
linkedinLink.href = '#';
linkedinLink.innerHTML = '<i class="fa fa-linkedin"></i>';

const facebookLink = document.createElement('a');
facebookLink.href = '#';
facebookLink.innerHTML = '<i class="fa fa-facebook"></i>';

const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';

// Append elements to the card
card.appendChild(imgg);
card.appendChild(h1);
card.appendChild(title);
card.appendChild(company);
card.appendChild(twitterLink);
card.appendChild(linkedinLink);
card.appendChild(facebookLink);
card.appendChild(contactButton);

// Append card to the container
container.appendChild(card);

// Append container to the body
document.body.appendChild(container);
