

class beers {
    constructor(price, name, rating, image) {
        this.price = price;
        this.name = name;
        this.rating = rating;
        this.image = image;
    }
    generateUser() {

        const [beerlist, setBeerlist] = useState([]);
        const [randomBeer, setRandomBeer] = useState();
        const getRandomBeer = () => {
          const randomIndex = Math.floor(Math.random() * beerlist.length);
          setRandomBeer(beerlist[randomIndex]);
        }
        const getBeerlist = () => {
          fetch('https://api.sampleapis.com/beers/ale')
            .then(response => response.json())
            .then(setBeerlist)
            .catch(alert)



        const block = document.createElement("div");
        block.classList.add("myBlock");
        block.innerHTML += 
        `
            <h1>${this.price}</h1>
            <h1>${this.name}</h1>
            <h1>${this.rating}</h1>
            <h1>${this.image}</h1>
        `;
        document.body.append(block);
    }
}
const getData = async (url) => {
    const result = await fetch(url);
    if(!result.ok) {
        console.log("Случилось ошибка");
    }
    return result.json();
}
getData("https://api.sampleapis.com/beers/ale")
.then(data => {
    data.data.forEach(({price, name, rating, image})=> {
        new Human(price, name, rating, image).generateUser();
    });
});