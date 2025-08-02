
function toggleMenu() {
    document.querySelector('.sidenav').classList.toggle('open');
}

const filters = document.querySelectorAll(".sidenav-link li");
const cards = document.querySelectorAll(".card");

filters.forEach(filter=>{
    filter.addEventListener('click',()=>{
        const select = filter.textContent.toLowerCase();
        
        let category = "";
        if (select === "mobiles") category = "phone";
        else if (select === "earphones") category = "headphone";
        else if (select === "speakers") category = "speaker";

        cards.forEach(item=>{
            const img = item.querySelector("img");
            const imgId = img.id.toLowerCase();

            if (imgId === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    })
})
