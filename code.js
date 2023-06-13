const mainslider = document.querySelector(".contentslider1");
const contentslider = document.querySelector(".contentslider2");



const api_url = "https://api.jikan.moe/v4/top/anime?limit=5";
const recomendations = "https://api.jikan.moe/v4/recommendations/anime?limit=10";

function animesmainslider() {
    fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
            /* console.log(data);
            console.log(data.data);
            console.log(data.data[0]); */
            for (let i = 0; i < data.data.length; i++) {
                const images = document.createElement('img');
                images.setAttribute("src", data.data[i].images.webp.large_image_url);
                mainslider.appendChild(images);
            }
        })
        }

function recomendationslider() {
    fetch(recomendations)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data[0].entry[0].images.jpg.image_url);
            for (let i = 0; i < 10; i++) {
                const recomendationimgs = document.createElement('img');
                recomendationimgs.setAttribute("src", data.data[i].entry[0].images.jpg.image_url);
                contentslider.appendChild(recomendationimgs);
            }
        })
        }

animesmainslider();
recomendationslider();
