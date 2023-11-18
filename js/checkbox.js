//função JavaScript para que a caixa de seleção no cabeçalho selecione ou desmarque todas as 
//caixas de seleção nas linhas da tabela quando clicada.
function selectAllCheckboxes(source) {
    let checkboxes = document.querySelectorAll('.row-checkbox')
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = source.checked
    })
}

function getSelectedItems() {
    let selectedCheckboxes = document.querySelectorAll('.row-checkbox:checked')
    let selectedItems = Array.from(selectedCheckboxes).map(cb => cb.id)
    return selectedItems
}

function alterSelectedItems() {
    let selectedItems = getSelectedItems()
    if (selectedItems.length === 0 || selectedItems.length > 1) {
        alert('Por favor, selecione um item.')
        return
    }
    const course = {
        id: selectedItems[0],
        name: document.getElementById(selectedItems[0] + "0").innerHTML,
        description: document.getElementById(selectedItems[0] + "1").innerHTML,
        link: document.getElementById(selectedItems[0] + "2").href,
        category: document.getElementById(selectedItems[0] + "3").innerHTML
    }
    sessionStorage.setItem('courseEdit', JSON.stringify(course))
    window.location.href = "/html/alterar-conteudo.html"
}

function removeSelectedItems() {
    let selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
        alert('Por favor, selecione um ou mais itens.')
        return
    }
    let response = confirm("Tem certeza que deseja excluir os itens selecionados?")
    if (response) {
        deleteCourse(selectedItems)
    }

}

function removeSelectedMessages() {
    let selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
        alert('Por favor, selecione um ou mais itens.')
        return
    }
    let response = confirm("Tem certeza que deseja excluir os itens selecionados?")
    if (response) {
        deleteMessages(selectedItems)
    }

}

async function deleteCourse(itemsId) {

    const url = "https://parseapi.back4app.com/parse/classes/Courses"
    
    const headers = {
        headers: {
            "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
            "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
            "X-Parse-Session-Token": sessionStorage.getItem('sessionToken'),
            "Content-Type": "application/json"
        }
    }
    
    let err = true
    
    for (i = 0; i < itemsId.length; i++) {
        await axios.delete(`${url}/${itemsId[i]}`, headers)
        .then(() => {
            console.log("Item Id "+itemsId[i]+" excluido.")
        }
        )
        .catch(error => {
            err = false
            console.log(error)
            document.location.href = "/html/login.html"
        })
    }
    if (err) {
        window.location.reload()
    }
}

async function deleteMessages(itemsId) {

    const url = "https://parseapi.back4app.com/parse/classes/FormSubmission"
    
    const headers = {
        headers: {
            "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
            "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
            "X-Parse-Session-Token": sessionStorage.getItem('sessionToken'),
            "Content-Type": "application/json"
        }
    }
    
    let err = true
    
    for (i = 0; i < itemsId.length; i++) {
        await axios.delete(`${url}/${itemsId[i]}`, headers)
        .then(() => {
            console.log("Item Id "+itemsId[i]+" excluido.")
        }
        )
        .catch(error => {
            err = false
            console.log(error)
            document.location.href = "/html/login.html"
        })
    }
    if (err) {
        window.location.reload()
    }
}