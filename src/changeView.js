const create_list = document.querySelector("#create_list");
const create_block = document.querySelector("#create_block");


let findClasses = (view="") => {
    return {
        products: document.querySelectorAll(`.product${view}`), 
        content: document.querySelectorAll(`.product${view}__content`),
        titles: document.querySelectorAll(`.product${view}__title`),
        titles1: document.querySelectorAll(`.product${view}__title1`),
        descriptions:document.querySelectorAll(`.product${view}__description`),
        rateNums: document.querySelectorAll(`.product${view}__rate-num`),
        sendingInfo: document.querySelectorAll(`.product${view}__sending-info`),
        store: document.querySelectorAll(`.product${view}__store`),
        productAdd: document.querySelectorAll(`.product${view}__add`)
    }
}

let toggleClasses = (classes, i, view="") => {
        classes.products[i].classList.toggle(`product${view}`);
        classes.content[i].classList.toggle(`product${view}__content`);
        classes.titles[i].classList.toggle(`product${view}__title`);
        classes.titles1[i].classList.toggle(`product${view}__title1`);
        classes.descriptions[i].classList.toggle(`product${view}__description`);
        classes.rateNums[i].classList.toggle(`product${view}__rate-num`);
        classes.sendingInfo[i].classList.toggle(`product${view}__sending-info`);
        classes.store[i].classList.toggle(`product${view}__store`);
        classes.productAdd[i].classList.toggle(`product${view}__add`);
}

create_list.onclick = () => {
    let classes = findClasses();
    for (let i = 0; i < classes.products.length; i++) {
        toggleClasses(classes, i);
        toggleClasses(classes, i, "--listview");
        
    }
}

create_block.onclick = () => {
    let classes = findClasses('--listview');
    for(let i = 0; i < classes.products.length; i++) {
        toggleClasses(classes, i, "--listview");
        toggleClasses(classes, i);
    }
}