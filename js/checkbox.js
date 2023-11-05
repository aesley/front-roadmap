
//função JavaScript para que a caixa de seleção no cabeçalho selecione ou desmarque todas as 
//caixas de seleção nas linhas da tabela quando clicada.
function selectAllCheckboxes(source) {
    let checkboxes = document.querySelectorAll('.row-checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = source.checked;
    });
}

function getSelectedItems() {
    let selectedCheckboxes = document.querySelectorAll('.row-checkbox:checked');
    let selectedItems = Array.from(selectedCheckboxes).map(cb => cb.value);
    return selectedItems;
}

function alterSelectedItems() {
    let selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
        alert('Por favor, selecione os itens que deseja alterar.');
        return;
    }
    console.log('Alterando itens com IDs:', selectedItems);
    // Implemente aqui a lógica de alteração.
}

function removeSelectedItems() {
    let selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
        alert('Por favor, selecione os itens que deseja remover.');
        return;
    }
    console.log('Removendo itens com IDs:', selectedItems);
    // Implemente aqui a lógica de remoção.
}

