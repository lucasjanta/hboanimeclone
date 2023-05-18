const mainslider = document.querySelector(".contentslider1");
const api_url = "https://api.jikan.moe/v4/top/anime?limit=5";

function animesmainslider() {
    fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.data);
            console.log(data.data[0]);
            for (let i = 0; i < data.data.length; i++) {
                const images = document.createElement('img');
                images.setAttribute("src", data.data[i].images.webp.large_image_url);
                mainslider.appendChild(images);
            }
        })
        }

animesmainslider();