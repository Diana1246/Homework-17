const apiKey = '39606920-bd6e9b735f561385f0c7b3b10';
const  lastPage = 10;
let currentPage = 1;

const imageList = document.querySelector('.image-list');
const loadMoreButton = document.getElementById('load-more');

function fetchImages(page) {
    const url = `https://pixabay.com/api/?key=${apiKey}&editors_choice=true&page=${page}&per_page=${perPage}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.hits)
        .catch(error => {
            console.error('Error fetching images:', error);
            return [];
        });
}

function Images(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        imageList.appendChild(imgElement);
    });
}

function loadMoreImages() {
    currentPage++;
    fetchImages(currentPage)
        .then(images => {
            Images(images);
        });
}

loadMoreButton.addEventListener('click', loadMoreImages);

 
fetchImages(currentPage)
    .then(images => {
     Images(images);
    });

