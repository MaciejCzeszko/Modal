const openModal = document.querySelector('#open-modal-btn');
const closeModal = document.querySelector('#close-modal-btn');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

openModal.addEventListener('click', () => {
    overlay.classList.remove('hide');
    modal.classList.remove('hide');
})

closeModal.addEventListener('click', () => {
    overlay.classList.add('hide');
    modal.classList.add('hide');
})

overlay.addEventListener('click', () => {
    overlay.classList.add('hide');
    modal.classList.add('hide');
})