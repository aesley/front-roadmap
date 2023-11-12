const url = "https://parseapi.back4app.com/parse/classes/Courses"
const register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()
  
    const data = {
        "name": document.getElementById("name").value,
        "description": document.getElementById("description").value,
        "link": document.getElementById("link").value,
        "category": document.getElementById("category").value
    }

    const headers = {
        headers: {
            "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
            "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
            "X-Parse-Session-Token": sessionStorage.getItem('sessionToken'),
            "Content-Type": "application/json"
        }
    }

    await axios.post(url, data, headers)
        .then(response => {
            alert("Curso Cadastrado com Sucesso!")
            document.location.href = "/html/gestao-conteudo.html"
        })
        .catch(error => {
            console.log(error)
            document.location.href = "/html/login.html"
        })
})