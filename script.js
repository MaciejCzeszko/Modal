const openModal = document.querySelector('#open-modal-btn');
const closeModal = document.querySelector('#close-modal-btn');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

function showModal(){
    overlay.classList.remove('hide');
    modal.classList.remove('hide');
}

function hideModal(){
    overlay.classList.add('hide');
    modal.classList.add('hide');
}

openModal.addEventListener('click', () => {
    showModal();
})

closeModal.addEventListener('click', () => {
    hideModal();
})

overlay.addEventListener('click', () => {
    hideModal();
})