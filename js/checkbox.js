//função JavaScript para que a caixa de seleção no cabeçalho selecione ou desmarque todas as 
//caixas de seleção nas linhas da tabela quando clicada.
function selectAllCheckboxes(source) {
    let checkboxes = document.querySelectorAll('.row-checkbox')
    checkboxes.forEach(function(checkbox) {
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
        name: document.getElementById(selectedItems[0]+"0").innerHTML,
        description: document.getElementById(selectedItems[0]+"1").innerHTML,
        link: document.getElementById(selectedItems[0]+"2").innerHTML,
        category: document.getElementById(selectedItems[0]+"3").innerHTML
    }
    sessionStorage.setItem('courseEdit', course)
    window.location.href = "/html/alterar-conteudo.html"
}

function removeSelectedItems() {
    let selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
        alert('Por favor, selecione um ou mais itens.')
        return
    }
    sessionStorage.setItem('courseDelete', selectedItems)
}

