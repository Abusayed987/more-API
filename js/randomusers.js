const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    // console.log(users);
    const user_container = document.getElementById('users_container')
    for (const user of users) {
        console.log(user);
        const user_div = document.createElement('div')
        user_div.innerHTML = `
        <h3> User Name:  ${user.name.title} ${user.name.first} ${user.name.last} </h3>
        <p> user Location:${user.location.city} </p>
        <p> user email : ${user.email} </p>
        `
        user_container.appendChild(user_div)
    }
}
loadUsers();