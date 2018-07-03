const getUsers = document.querySelector('#btn-users');
const outputUsers = document.querySelector('#output-users');
const outputUser = document.querySelector('#output-user');
const userById = document.querySelector('#btn-user');
const submit = document.querySelector('#sbmt');
const delet = document.querySelector('#btn-dlt');
const remove = document.querySelector('#btn-remove');

const getAllUsers = () => {

    fetch(" https://test-users-api.herokuapp.com/users/")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .then(data1 => {
            console.log("Clients list:", data1);
            const obj = data1;
            console.log(obj.data.length)

            for (let i = 0; i < obj.data.length; i++) {
                const parentP = document.createElement('tr');
                parentP.classList.add(`class${i}`);
                outputUsers.append(parentP);
                console.log(JSON.stringify(obj.data[i]))
                parentP.textContent = JSON.stringify(obj.data[i]);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        })
}



const getUserById = () => {

    const id = (document.querySelector('#txt')).value;
    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .then(user => {
            const object = user
            outputUser.textContent = JSON.stringify(`name: ${object.data.name}, age: ${object.data.age}`);
        })
        .catch(error => {
            console.error("Error:", error);
        })
}


const addUser = () => {
    const name = (document.querySelector('#name')).value;
    const age = (document.querySelector('#age')).value;
    fetch('https://test-users-api.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                age: age
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .catch(error => {
            console.error("Error:", error);
        })
};



const removeUser = () => {

    const id = (document.querySelector('#dlt')).value;
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .catch(error => {
            console.error("Error:", error);
        })
};


const updateUser = () => {
    const id = (document.querySelector('#remove')).value;
    const newName = (document.querySelector('#new-name')).value;
    const newAge = (document.querySelector('#new-age')).value;
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: newName,
                age: newAge
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .catch(error => {
            console.error("Error:", error);
        })
}

getUsers.addEventListener("click", getAllUsers);
userById.addEventListener("click", getUserById);
submit.addEventListener("click", addUser);
delet.addEventListener("click", removeUser);
remove.addEventListener("click", updateUser);