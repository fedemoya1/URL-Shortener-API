//------Handling mobile menu-------------------
const menu = document.querySelector('.burger');

menu.addEventListener("click", showMenu);

function showMenu(){
    const thisIsMyMenu = document.querySelector(".nav-bar");
    thisIsMyMenu.classList.toggle("active");
}


//-------I don't know what I'm doin'g----
const btn = document.querySelector('.btn');
const link = document.querySelector(".url-link");
const box = document.querySelector(".extra-box");

btn.addEventListener("click", thisDoSomething);

async function thisDoSomething(){

    const url = await fetch(`https://api.shrtco.de/v2/shorten?url=${link.value}`);
    const data = await url.json();
    const res = data?.result?.short_link?? "";
    let anotherBtn = document.querySelector(".copy-btn");

    if(res != ""){
        box.style.display = "flex";
        document.querySelector(".post-url").innerHTML = link.value;
        document.querySelector(".short-url").innerHTML = res;
        anotherBtn.addEventListener("click", () => {

            navigator.clipboard.writeText(res);
			anotherBtn.style.backgroundColor = "#3b3054";
			anotherBtn.innerText = "Copied!";
            setTimeout(() => {
				anotherBtn.style.backgroundColor = "#2acfcf";
				anotherBtn.innerText = "Copy";
			}, 5000);
        });
        
    }
    else{
        box.style.display = none;
    }

}