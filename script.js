function getGitHubProfileInfo() {
    let dados = {
        profileImage: document.querySelector(".profileImg"),
        name: document.querySelector(".name"),
        description: document.querySelector(".description"),
        github: document.querySelector(".userId"),
    };
    const urlLucas = "https://api.github.com/users/GodLucs";

    fetch(urlLucas)
        .then((response) => response.json())
        .then((data) => {
            dados.name.src = data.name;
            dados.description.innerText = data.bio;
            dados.github.innerHTML = data.login;
            dados.profileImage.src = data.avatar_url;
        });
}

getGitHubProfileInfo();
