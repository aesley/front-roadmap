const courseEdit = JSON.parse(sessionStorage.getItem('courseEdit'))

if (courseEdit != null) {
    let name = document.getElementById("name")
    name.value = courseEdit.name
    let description = document.getElementById("description")
    description.value = courseEdit.description
    let link = document.getElementById("link")
    link.value = courseEdit.link
    let category = document.getElementById("category")
    category.selected = courseEdit.category
}

