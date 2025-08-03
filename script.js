let cards = document.querySelector("#userCards")
let input = document.querySelector("input")

const allUsers = [
    {
        name: "Virat Kohli",
        bio: "Frontend developer passionate about clean UI and modern web design.",
        image: "https://i.pinimg.com/736x/98/a6/3d/98a63dd214ab30ec6d4cfc92bea34d12.jpg"
    },
    {
        name: "MS Dhoni",
        bio: "Full stack engineer with love for backend and database architecture.",
        image: "https://i.pinimg.com/736x/f8/1b/55/f81b55234f08e431d75664b43baf1f6c.jpg"
    },
    {
        name: "Rohit Sharma",
        bio: "UX/UI designer with a focus on mobile-first user experiences.",
        image: "https://i.pinimg.com/736x/03/5d/70/035d705b245fb0c1f36e0fbbfd643ba7.jpg"
    },
    {
        name: "Hardik Pandya",
        bio: "JavaScript enthusiast and aspiring open-source contributor.",
        image: "https://i.pinimg.com/736x/d2/2d/0b/d22d0b8a9edb4411b5989820b954cf00.jpg"
    },
    {
        name: "Ravindra Jadeja",
        bio: "React developer who loves building interactive web apps.",
        image: "https://i.pinimg.com/1200x/cd/ea/a0/cdeaa0d1ef36de0f4f8595d993ab3e34.jpg"
    },
    {
        name: "Jasprit Bumrah",
        bio: "DevOps learner exploring CI/CD and containerization tools.",
        image: "https://i.pinimg.com/736x/c8/61/3d/c8613dc969fe3a333b43ce7c68256c78.jpg"
    }
];

let showUsers = function (arr) {
    arr.forEach(user => {

        let card = document.createElement("div")
        card.classList.add("card")

        let image = document.createElement("img")
        image.setAttribute(
            "src",
            user.image
        )

        let title = document.createElement("h3")
        title.textContent = user.name

        let bio = document.createElement("p")
        bio.textContent = user.bio

        card.append(image, title, bio)
        cards.append(card);

    });
}
showUsers(allUsers);

input.addEventListener("input", function () {
    let inpVal = input.value.toLowerCase().trim();

    let newUsers = allUsers.filter(function (user) {
        return user.name.toLowerCase().includes(inpVal);
    })

    if (newUsers.length > 0) {
        cards.innerHTML = "";
        showUsers(newUsers);
    } else {
        cards.innerHTML = "<h3>No users found...</h3>"
    }
})