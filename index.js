class Human {
    constructor(email, first_name, last_name, avatar) {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
    generateUser() {
        const block = document.createElement("div");
        block.innerHTML += 
        `
            <h1>${this.email}</h1>
            <h1>${this.first_name}</h1>
            <h1>${this.last_name}</h1>
            <h1>${this.avatar}</h1>
        `;
        block.classList.add("change")
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
    // data.forEach(({price, name, rating,image})=> {
    //     new Human(price, name, rating.average,rating.reviews).generateUser();
    // });
    for(let i=0; i< 10; i++) {
        new Human(data[i].price, data[i].name, data[i].rating.average,data[i].rating.reviews).generateUser();
    }
});