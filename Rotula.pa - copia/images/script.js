function E(selector, parent) {
    if (selector instanceof HTMLAnchorElement)
        return selector;

    return (parent || document).querySelectorAll(selector);
}

function hasClass (element, className) {
    return element.classList.contains(className)
}

function radioClass(element, className) {
    E("." + className).forEach((elem) => {
        element.classList.remove(className);
    });
}


function tabs(nav) {
    let navElem = E(nav)[0];
    
    navElem.addEventListener('click', (e) => {
        let target = e.target;

        if(hasClass (target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id) [0]

        radioClass(linkedTab, "visible")
    });

    let active = E(".tab.active") [0]
    if (active) {
        radioClass (E ("."+active.id )[0], "visible");
    }
}

tabs(".menu-nav");