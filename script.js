// Mobile Popup
const bgContainer = document.querySelector('.bgContainer');
const menu = document.querySelector('.menu');

function popup() {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popupContainer');
  popupContainer.style.display = 'block';
  bgContainer.append(popupContainer);

  const modalBox = document.createElement('div');
  modalBox.classList.add('modalBox');
  popupContainer.append(modalBox);

  // Close Modal
  const closeBtn = document.createElement('img');
  closeBtn.classList.add('closeBtn');
  closeBtn.setAttribute('src', './assets/close.svg');
  modalBox.append(closeBtn);

  closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });

  // Create links
  const ulLink = document.createElement('ul');
  ulLink.classList.add('ulLink');

  const liLink1 = document.createElement('li');
  const aLink1 = document.createElement('a');
  liLink1.classList.add('liLinks');
  liLink1.classList.add('first');
  aLink1.textContent = 'About';
  aLink1.addEventListener('click', () => {
    aLink1.setAttribute('href', '#about');
    popupContainer.style.display = 'none';
  });
  liLink1.append(aLink1);
  const liLink2 = document.createElement('li');
  const aLink2 = document.createElement('a');
  liLink2.classList.add('liLinks');
  aLink2.setAttribute('href', '#program');
  aLink2.textContent = 'Program';
  aLink2.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink2.append(aLink2);
  const liLink3 = document.createElement('li');
  const aLink3 = document.createElement('a');
  liLink3.classList.add('liLinks');
  aLink3.setAttribute('href', '#speakers');
  aLink3.textContent = 'Speakers';
  aLink3.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink3.append(aLink3);
  ulLink.append(liLink1, liLink2, liLink3);
  modalBox.append(ulLink);
}

menu.addEventListener('click', popup);
