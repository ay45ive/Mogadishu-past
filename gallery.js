console.log("Hello Mogadishu");
const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");
const images = [
    {
        src: 'MGQ.jpg',
        alt: 'City'

    },
    {
        src: 'MGQ2.jpg',
        alt: 'Lighthouse'

    },
    {
        src: 'mgq3.jpg',
        alt: 'History'
    },
    {
        src: 'mgq4.jpg',
        alt: 'Parliament square'
    },
    {
        src: 'mgq5.jpg',
        alt: 'Historical market'
    },
    {
        src: 'mgq6.jpg',
        alt: 'Arch'
    
    },
    {
        src: 'mgq7.jpg',
        alt: 'Window'

    },
    {
        src: 'mgq8.jpg',
        alt: 'Dervish statue'
    },
    {
        src: 'mgq9.jpg',
        alt: 'Minaret'

    },
    {
        src: 'mgq10.jpg',
        alt: 'Revolution square'
    }
];

for (let i = 0; i < images.length; i++){
    const img = document.createElement("img");

    img.src = images[i].src;
    img.alt = images[i].alt;

    img.addEventListener("click", function (){
        displayImage.src = images[i].src;
        displayImage.alt = images[i].alt;
    });

    thumbnailContainer.appendChild(img);
}
