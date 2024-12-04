document.querySelector('.button-submit').addEventListener('click', async (evt) => {
    evt.preventDefault();

    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const email = document.querySelector('#email').value;
    const queryType = document.querySelector('input[type="radio"]:checked')?.value ?? '';
    const message = document.querySelector('#message').value;
    const contactedByTeam = document.querySelector('#contacted-by-team').checked;


    const objContact = { firstName, lastName, email, queryType, message, contactedByTeam };

    const formObjContact = new URLSearchParams(objContact).toString();

    
    
    const response = await fetch(location.href, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: formObjContact
    })

    if (response.status === 200) {
        alert('Mensagem de Contato Enviada!');
    } else if (response.status === 400) {
        alert('Formatação incorreta')
    }

})




