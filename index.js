// class Human {
//     constructor(email, first_name, last_name, avatar) {
//         this.email = email;
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.avatar = avatar;
//     }
//     generateUser() {
//         const block = document.createElement("div");
//         block.classList.add("myBlock");
//         block.innerHTML += 
//         `
//             <h1>${this.email}</h1>
//             <h1>${this.first_name}</h1>
//             <h1>${this.last_name}</h1>
//             <h1>${this.avatar}</h1>
//         `;
//         document.body.append(block);
//     }
// }
// const getData = async (url) => {
//     const result = await fetch(url);
//     if(!result.ok) {
//         console.log("Случилось ошибка");
//     }
//     return result.json();
// }
// getData("https://reqres.in/api/users?page=2")
// .then(data => {
//     data.data.forEach(({email, first_name,last_name,avatar})=> {
//         new Human(email,first_name,last_name,avatar).generateUser();
//     });
// });