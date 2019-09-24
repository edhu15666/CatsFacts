let facts = [
    "The CIA spent US$20 million in the 60s training cats to spy on the Soviets. The first spy cat was hit by a taxi.",
    "Cats can't taste sweetness.",
    "Domestic cats spend about 70 percent of the day sleeping. And 15 percent of the day grooming.",
    "Koko the gorilla got a pet cat for her birthday in 1985 after she requested to have one as a birthday present.",
    "Basically all cartoon cats lied to us: Raw fish is off the table for cats as well.",
    "A group of cats is called a clowder.",
    "Cats can hear the ultrasonic noises that rodents and dolphins make to communicate.",
    "It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.",
    "The technical term for a cat’s hairball is a bezoar.",
    "The world's largest cat measured 48.5 inches long.",
    "People who own cats have on average 2.1 pets per household, where dog owners have about 1.6.",
    "The oldest cat video on YouTube dates back to 1894.",
    "Female cats are typically right-pawed while male cats are typically left-pawed.",
    "Cats and humans have nearly identical sections of the brain that control emotion.",
    "There are 45 Hemingway cats living at the author's former home in Key West, Fla.",
    "A house cat is faster than Usain Bolt.",
    "The goddess of love, beauty, and fertility in Norse mythology, Freyja was the first cat lady. She is depicted in stories as riding a chariot that was drawn by cats.",
    "Cats love to eat olives or for that matter anything preserved in brine.",
    "Cats sleep 70% of their lives.",
    "By the time a cat is 9 years old, it will only have been awake for three years of its life.",
    "The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.",
    "A cat's cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dog's 160 million.",
    "In the 15th century, Pope Innocent VIII began ordering the killing of cats, pronouncing them demonic.",
    'Cats "knead" because of seperation from their mothers',
    "Cat owners are 17% more likely to have a graduate degree than non cat owners.",
    "Adult cats only meow to communicate with humans.",
    "In the 1960s, the CIA tried to turn a cat into a bonafide spy by implanting a microphone into her ear and a radio transmitter at the base of her skull. She somehow survived the surgery but got hit by a taxi on her first mission.",
    "Gatos são fofos por natureza.",
    "Gatos não caem de costas.",
    "Gatos não tem donos.",
    "Você não tem um gato, ele tem você.",
    "SE A TERRA FOSSE PLANA, Gatos já teriam derrubado tudo.",
    "Sorria, você está sendo 'gatado'.",
    "Gatos são amados por 99.9% de pessoas carentes.",
    "Macho coloca foto com gato na internet apenas para pegar mulher.",
    "nem eu sabia que existem tantos fatos sobre gatos.",
    "Houve casos de gatos que sobreviveram a quedas de 320 metros no concreto.",
    "O ouvido é o sentido mais forte dos gatos e eles são capazes de ouvir até 64 Khz; um humano só ouve 20.",
    "A temperatura dos alimentos preferidos dos gatos é, em média, 38 ° C, semelhante à de uma presa recém-pescada.",
    "Os gatos apenas suam pelas almofadas das patas.",
];

function gerar5 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 5; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar1 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 1; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}

function gerar2 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 2; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar3 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 3; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar4 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 4; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar5b (){
    gerar5();
}
function gerar6 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 6; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar7 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 7; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar8 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 8; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar9 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 9; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar10 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 10; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar11 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 11; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar12 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 12; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}

function gerar13 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 13; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar14 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 14; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}
function gerar15 (){
    let i = 0;
    let fato = document.querySelector('.receber');
    fato.innerHTML = "";
   for(let i = 0; i< 15; i++){
    fato.innerHTML += `<div class="list-group"> <a href="#" class="list-group-item list-group-item-action"> <img src="imagens/gato.png"> ${facts[Math.floor(Math.random()*facts.length)]}  </a> </div>`

    }
}