const listContainer = document.getElementById('peopleList');
const detailContainer = document.getElementById('detailContainer');


const loadUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.map(person => {
            const li = document.createElement('li');
            li.classList.add('cursor-pointer')
            li.innerText = person.name;
            li.addEventListener('click', () => {
                showDetails(person.id)
            });
            listContainer.appendChild(li);
        });
    }

    catch (err) {
        console.log('Error loading users:', err);
        alert('There was an issue loading the users. Please try again later.');
    }
}

const showDetails = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    detailContainer.classList.remove('hidden')
    detailContainer.innerHTML = `
    <p class="text-lg"><span class="text-lg font-semibold">Name: </span>${data.name}</p>
        <p class="text-lg"><span class="text-lg font-semibold">Email: </span>${data.email}</p>
        <p class="text-lg"><span class="text-lg font-semibold">Website: </span>${data.website}</p>
        <p class="text-lg"><span class="text-lg font-semibold">Phone Number: </span>${data.phone}</p>
        <p class="text-lg"><span class="text-lg font-semibold">Address: </span>${data.address?.street || 'N/A'}</p>
    `
}
loadUser();