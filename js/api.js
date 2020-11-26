async function getUsers() {
    let data = await fetch('https://reqres.in/api/users')
        .then(res => res.json())

    getTable(data.data)
}

function getTable(mass) {

    let $table = document.querySelector('.table');

    $table.innerHTML = mass.reduce((HTML, item) => {
        return (HTML += `<tr></tr>
        <td>${item.first_name}</td>
        <td>${item.last_name}</td>
        <td><a href="mailto:${item.email}">${item.email}</a></td>
        <td><img src="${item.avatar}"></td>
        </tr>`);
      }, '')
    }
    getUsers();