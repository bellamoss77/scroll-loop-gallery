document.addEventListener('DOMContentLoaded', function() {
    /*  POPULATE THE DOM    */

    const body = document.body;

    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    body.appendChild(headerContainer)

    const pageTitle = document.createElement('h1');
    pageTitle.className = 'gallery-title';
    pageTitle.textContent = 'Des Fleurs';
    headerContainer.appendChild(pageTitle);

    const pageSubtitle = document.createElement('h3');
    pageSubtitle.className = 'gallery-subtitle';
    pageSubtitle.textContent = 'Une Galerie';
    headerContainer.appendChild(pageSubtitle);

    const titleVector = document.createElement('img');
    titleVector.setAttribute.src = 'images/flower-vector.png';
    titleVector.className = 'vector';
    headerContainer.appendChild(titleVector);

    const galleryWrapper = document.getElementById('galleryWrapper');

    const thumbList = document.createElement('ul');
    thumbList.className = 'thumb-list';
    galleryWrapper.appendChild(thumbList);

    const thumbItems = document.createElement('li');
    thumbList.appendChild(thumbItems);

    const featuredImg = document.createElement('img');
    featuredImg.className = 'featured';
    galleryWrapper.appendChild(featuredImg);

    const galleryBtnsContainer = document.createElement('div');
    galleryBtnsContainer.className = 'gallery-btns-container';
    galleryWrapper.appendChild(galleryBtnsContainer);

    const dragBtn = document.createElement('button');
    dragBtn.className = 'drag-btn';
    dragBtn.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
    dragBtn.textContent = 'Drag!'
    galleryBtnsContainer.appendChild(dragBtn);

    const openLightboxBtn = document.createElement('button');
    openLightboxBtn.className = 'open-lightbox-btn';
    openLightboxBtn.innerHTML = `<i class="fa-solid fa-square-up-right"></i>`;
    openLightboxBtn.textContent = 'Open Lightbox';
    galleryBtnsContainer.appendChild(openLightboxBtn);

    const images = [
        { src: 'images/fleurs_1.png', alt: 'flower' },
        { src: 'images/fleurs_2.png', alt: 'flower' },
        { src: 'images/fleurs_3.png', alt: 'flower' },
        { src: 'images/fleurs_4.png', alt: 'flower' },
        { src: 'images/fleurs_5.png', alt: 'flower' },
        { src: 'images/fleurs_6.png', alt: 'flower' },
        { src: 'images/fleurs_7.png', alt: 'flower' },
        { src: 'images/fleurs_8.png', alt: 'flower' },
        { src: 'images/fleurs_9.png', alt: 'flower' },
        { src: 'images/fleurs_10.png', alt: 'flower' },
        { src: 'images/fleurs_11.png', alt: 'flower' },
        { src: 'images/fleurs_12.png', alt: 'flower' },
        { src: 'images/fleurs_13.png', alt: 'flower' },
        { src: 'images/sunset_1.png', alt: 'sunset' },
        { src: 'images/sunset_2.png', alt: 'sunset' },
    ]

    function createGallery() {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            galleryWrapper.appendChild(img);
        })
    }

    
})