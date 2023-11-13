const url = "https://parseapi.back4app.com/parse/classes/Courses"

const headers = {
    headers: {
        "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
        "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
        "X-Parse-Revocable-Session": "1",
        "Content-Type": "application/json"
    }
}

async function axiosGet(tbodyId) {
    await axios.get(`${url}?where={"category":"${setParams(tbodyId)}"}`, headers)
        .then(response => {
            getObjs(response.data.results, tbodyId)
        })
        .catch(error => {
            console.log(error)
        })
}

function setParams(tbodyId) {
    if (tbodyId == 'cursos_logica') {
        const params = "Lógica de programação"
        return params
    }
    if (tbodyId == 'cursos_programacao') {
        const params = "Linguagem de programação"
        return params
    }
    if (tbodyId == 'cursos_poo') {
        const params = "Programação orientada a objetos"
        return params
    }
    if (tbodyId == 'cursos_git') {
        const params = "Sistema de controle de versão"
        return params
    }
}

function getObjs(objs, tbodyId) {
    const tbody = document.getElementById(tbodyId)
    for (o of objs) {

        const tr = document.createElement('tr')
        tr.className = "align-middle"
        tr.id = o.objectId

        td = document.createElement('td')
        td.id = o.objectId + "0"
        td.innerHTML = o.name
        tr.appendChild(td)

        td = document.createElement('td')
        let a = document.createElement('a')
        a.id = o.objectId + "2"
        a.className = "btn btn-info btn-sm"
        a.href = o.link
        a.innerHTML = "Link"
        td.appendChild(a)
        tr.appendChild(td)

        tbody.appendChild(tr)
    }
}