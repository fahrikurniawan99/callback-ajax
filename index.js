const getUser = (url, callback) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => {
        callback(xhr.responseText)
    }
    xhr.send()
}

const users = getUser("https://jsonplaceholder.typicode.com/users", (res) => {
    const json = JSON.parse(res)
    table(json)
})

const table = (users) => {
    const loading = document.getElementById("loading")
    const tbody = document.getElementById("tbody")
    let data = ""
    users.forEach(user => {
        data += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street},${user.address.suite},${user.address.city}</td>
            <td>${user.company.name}</td>
        </tr>
        `
    })
    tbody.innerHTML = data
    loading.classList.toggle("d-none")
}
