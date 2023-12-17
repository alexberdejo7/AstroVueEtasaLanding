
import services from './Services.js';

function createCard(cardInfo) {
    const card = document.createElement("div");
    // card.className = "group bg-gray-900 border border-yellow-600 shadow-xl shadow-slate-400 hover:bg-gray-950 rounded-xl p-0 h-62 w-70 md:h-auto md:w-auto xl:h-80 xl:w-68 xs:w-1/4 justify-center items-center mx-auto";

    const link = document.createElement("a");
    link.href = cardInfo.link;

    const image = document.createElement("img");
    image.src = cardInfo.imageUrl;
    // image.className = "h-auto w-full object-cover rounded-xl rounded-b-none";
    link.appendChild(image);

    const contentDiv = document.createElement("div");
    // contentDiv.className = "items-center mx-auto m-0 mb-10 justify-center font-sans";

    const title = document.createElement("h3");
    
    title.textContent = cardInfo.title;
    contentDiv.appendChild(title);

    const hr = document.createElement("hr");
    // hr.className = "border m-0 border-etasa min-w-auto";
    contentDiv.appendChild(hr);

    const description = document.createElement("p");
   
    description.textContent = cardInfo.description;
    contentDiv.appendChild(description);

    card.appendChild(link);
    card.appendChild(contentDiv);

    return card;
}

function cardData(containerSelector) {
    const container = document.querySelector(containerSelector);
    services.forEach(cardInfo => {
        const cardElement = createCard(cardInfo);
        container.appendChild(cardElement);
    });
}

export default cardData;
