const body = document.querySelector("body");

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {

    data.users.forEach((user) => {

      const div = document.createElement("div");

      div.innerHTML = `
        <img src="${user.image}" alt="${user.username}">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
      `;

      body.appendChild(div);

    });

  })
  .catch((error) => {
    console.log(error);
  });