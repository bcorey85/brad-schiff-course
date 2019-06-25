class Modal {
    constructor() {
        this.openModalButton = document.querySelector('.open-modal')
        this.modal = document.querySelector('.modal')
        this.closeModalButton = document.querySelector('.modal__close')
        this.events()
    }

    events() {
        this.openModalButton.addEventListener('click', this.openModal.bind(this))
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this))
        document.addEventListener('keyup', this.keyPressHandler.bind(this))
    }

    keyPressHandler(e) {
        if(e.keyCode === 27) {
            this.closeModal()
        }
    }

    openModal() {
        this.modal.classList.add('modal--is-visible')
        return false
    }

    closeModal() {
        this.modal.classList.remove('modal--is-visible')
        return false
    }
}

export default Modal