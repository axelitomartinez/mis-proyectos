function E(selector, parent) {
    if (parent instanceof HTMLElement) 
        return parent.querySelector(selector);
    
    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    document.querySelectorAll("." + className).forEach((elem) => 
        elem.classList.remove(className)
    );
    element.classList.toggle(className); 
}

function tabs(nav) {
    let navElem = E(nav) [0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if(hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id) [0];

        radioClass(linkedTab, "visible");


    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id), "visible");
    }
}

tabs(".menu-nav");




