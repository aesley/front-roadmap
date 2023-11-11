const url = "https://parseapi.back4app.com/parse/classes/Courses"

const courseEdit = JSON.parse(sessionStorage.getItem('courseEdit'))

const register = document.getElementById("register")

let name = document.getElementById("name")
let description = document.getElementById("description")
let link = document.getElementById("link")
let category = document.getElementById("category")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    courseEdit.name = name.value
    courseEdit.description = description.value
    courseEdit.link = link.value
    courseEdit.category = category.value
    
    const headers = {
        headers: {
            "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
            "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
            "X-Parse-Session-Token": "r:97f4923fb6b3645b1ff77c57a0069093",
            "Content-Type": "application/json"
        }
    }

    await axios.put(`${url}/${courseEdit.id}`, courseEdit, headers)
        .then(() => {
            alert("Produto Atualizado!")
            document.location.href = "/html/gestao-conteudo.html"
        })
        .catch(error => {
            console.log(error)
        })

})

function dataEdit() {
    if (courseEdit == null) {
        return
    }
    name.value = courseEdit.name
    description.value = courseEdit.description
    link.value = courseEdit.link
    category.selected = courseEdit.category
}