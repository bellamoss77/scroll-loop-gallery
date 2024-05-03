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
    if (!pageTitle) {
        console.log('No page title found.')
        return;
    }

    const pageSubtitle = document.createElement('h3');
    pageSubtitle.className = 'gallery-subtitle';
    pageSubtitle.textContent = 'Une Galerie';
    headerContainer.appendChild(pageSubtitle);

    const titleVector = document.createElement('img');
    titleVector.src = 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/flower-vector.png?raw=true';
    titleVector.className = 'vector';
    headerContainer.appendChild(titleVector);

    const galleryWrapper = document.getElementById('galleryWrapper');
    body.appendChild(galleryWrapper);

    body.insertBefore(headerContainer, galleryWrapper);

    const thumbList = document.createElement('ul');
    thumbList.className = 'thumb-list';
    galleryWrapper.appendChild(thumbList);

    const thumbItems = document.createElement('li');
    thumbList.appendChild(thumbItems);

    const featuredImg = document.createElement('div');
    featuredImg.className = 'featured';
 
    featuredImg.innerHTML = `<img src="images/fleurs_1 .png" alt="flower">`
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
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_10.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_11.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_12.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_13.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_2.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_3.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_4.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_5.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_6.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_7.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_8.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_9.png?raw=true', alt: 'flower' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/sunset_1.png?raw=true', alt: 'sunset' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/sunset_2.png?raw=true', alt: 'sunset' },
        { src: 'https://github.com/bellamoss77/scroll-loop-gallery/blob/main/images/fleurs_1%20.png?raw=true', alt: 'flower' }
    ]
    
    
    function createGallery() {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.className = 'gallery-img';
            thumbItems.appendChild(img);
        })
    }
    createGallery();

    
})