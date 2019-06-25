import $ from 'jquery'

class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header')
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__menu-content')
        this.events()
    }    

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__menu-content--is-visible')
        this.siteHeader.classList.toggle('site-header--is-expanded')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }

    events() {
        this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this))
    }
}

export default MobileMenu