
const loginUrl = "https://parseapi.back4app.com/login"
const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const data = {
            "username": username.value,
            "password": password.value
    }
    
    const headers = {
        headers: {
            "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
            "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
            "X-Parse-Revocable-Session": "1",
            "Content-Type": "application/json"
        }
    }

    await axios.post(loginUrl, data, headers)
        .then(response => {
            sessionStorage.setItem('sessionToken', response.data.sessionToken)
            document.location.href = "/html/gestao-conteudo.html"
        })
        .catch(error => {
            alert("Dados Inválidos!")
            console.log(error)
        })

})