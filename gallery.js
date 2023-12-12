

document.querySelector('.gallery__thumbs').onclick = (e) => {
    e.preventDefault();
    /**
     * @type {HTMLElement}
     */
    const target = e.target;
    console.log(e);
    let link = target.closest('a');
    console.log(link.href);
    const popUp = document.querySelector('.pop-up');
    popUp.style.display = 'block';
    const img = document.createElement('img');
    img.setAttribute('src', link.href);
    const imgCon = popUp.querySelector('.pop-up__img');
    if (imgCon.children.length > 0) {
        [...imgCon.children].forEach(item => item.remove());
    }
    popUp.querySelector('.pop-up__img').append(img);
}

