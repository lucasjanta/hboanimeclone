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
                const itemdiv = document.createElement('div');
                itemdiv.className = "itemslider";
                mainslider.appendChild(itemdiv);
                const images = document.createElement('img');
                images.setAttribute("src", data.data[i].images.webp.large_image_url);
                itemdiv.appendChild(images);
                const texts = document.createElement('div');
                texts.className = "textmainslider";
                texts.innerHTML = `<h3>Os animes que você ama e outros para descobrir</h3>
                <p>Ação, aventura e muita diversão com os animes do nosso catalogo.</p>`;
                itemdiv.appendChild(texts);
            }

            let arraydetextos1 = document.querySelectorAll(".textmainslider");
            let posicionatexto = 0

            for (let i = 0; i < data.data.length; i++) {
                arraydetextos1[i].style.left = posicionatexto + "%";
                posicionatexto += 100;
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

