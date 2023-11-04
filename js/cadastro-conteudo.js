const url = "https://parseapi.back4app.com/parse/classes/Courses"
const register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    let category = document.getElementById("category").selectedIndex
    if (category == 0) {
        alert('Por favor, selecione uma categoria!');
        event.preventDefault(); // Impede o envio do formulário se a categoria não estiver selecionada
    }
    
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
            "X-Parse-Session-Token": "r:97f4923fb6b3645b1ff77c57a0069093",
            "Content-Type": "application/json"
        }
    }

    await axios.post(url, data, headers)
        .then(response => {
            alert("Produto Cadastrado com Sucesso!")
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
})