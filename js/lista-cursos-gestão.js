const url = "https://parseapi.back4app.com/parse/classes/Courses"

const headers = {
    headers: {
        "X-Parse-Application-Id": "idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP",
        "X-Parse-REST-API-Key": "5KkqmnO0dmtt5f4NFW8natJWxLx7W7dSjb5oxvAS",
        "X-Parse-Revocable-Session": "1",
        "Content-Type": "application/json"
    }
}

async function axiosGet() {
    await axios.get(url, headers)
        .then(response => {
            getObjs(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
}

function getObjs(objs) {
    const tbody = document.getElementById('cursos_gestao')
    for (o of objs) {

        const tr = document.createElement('tr')
        tr.className = "align-middle"
        tr.id = o.objectId

        let td = document.createElement('td')
        let input = document.createElement('input')
        input.type = "checkbox"
        input.className = "row-checkbox"
        input.id = o.objectId
        td.appendChild(input)
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o.objectId + "0"
        td.innerHTML = o.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o.objectId + "1"
        td.innerHTML = o.description
        tr.appendChild(td)

        td = document.createElement('td')
        let a = document.createElement('a')
        a.id = o.objectId + "2"
        a.className = "btn btn-info btn-sm"
        a.href = o.link
        a.innerHTML = "Link"
        td.appendChild(a)
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o.objectId + "3"
        td.innerHTML = o.category
        tr.appendChild(td)

        tbody.appendChild(tr)
    }
}