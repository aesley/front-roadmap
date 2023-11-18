Parse.initialize("idmPVCIXOieMmYRGDSRQUvu5ypZ7GwH2uDak2wuP", "t9xVyEBRYx9dq11ylVeAJ3sibPuawWO08jfYt4B0"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";
const register = document.getElementById("register")
register.addEventListener("submit", async function (event) {
    event.preventDefault()

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await Parse.Cloud.run('submitForm', { name, subject, email, message });
        alert(response);
        document.location.reload()
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
})