import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header')
        this.headerTriggerElement = document.querySelector('.large-hero__title')
        this.createHeaderWaypoint()
        this.pageSections = document.querySelectorAll('.page-section')
        this.headerLinks = document.querySelectorAll('.primary-nav a')
        this.createPageSectionWaypoints()
    }

    createHeaderWaypoint() {
        let that = this
        new Waypoint({
            element: that.headerTriggerElement,
            handler: function(direction) {
                if(direction === "down") {
                    that.siteHeader.classList.add('site-header--dark')
                } else {
                    that.siteHeader.classList.remove('site-header--dark')
                }
            }
        }) 
    }

    createPageSectionWaypoints() {
        let that = this
        for(let i = 0; i < this.pageSections.length; i++) {
            let currentItem = this.pageSections[i]
            new Waypoint({
                element: currentItem,
                handler: function(direction) {
                    if (direction === "down") {
                        let matchingHeaderLink = currentItem.getAttribute('data-matching-link')
                        for (let i = 0; i < that.pageSections.length; i++) {
                            that.headerLinks[i].classList.remove('is-current-link')
                        }
                        document.querySelector(matchingHeaderLink).classList.add('is-current-link')
                    }                     
                },
                offset: '40%'
            })

            new Waypoint({
                element: currentItem,
                handler: function (direction) {
                    if (direction === "up") {
                        let matchingHeaderLink = currentItem.getAttribute('data-matching-link')
                        for (let i = 0; i < that.pageSections.length; i++) {
                            that.headerLinks[i].classList.remove('is-current-link')
                        }
                        document.querySelector(matchingHeaderLink).classList.add('is-current-link')
                    }
                },
                offset: '-20%'
            })
        }
    }
}

export default StickyHeader