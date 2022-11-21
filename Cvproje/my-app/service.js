const button = document.querySelector('.button');
const username = document.querySelector('.username')
const password = document.querySelector('.password')
const messagebox =document.querySelector('#message')


button.addEventListener('click', async () => {
    if (username.value.length < 6 && password.value.length < 6) {
        alert('Kulalanıcı adı ve parola Minimum 6 karakterli olmalıdır')
    }
    else {
        await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
 
            }),

        }).then(res=> {
            res.json().then(msg => {
                messagebox.innerHTML = msg.message;

                if(msg.success ===true){
                    button.disabled;
                }


            })
        }).catch(err => {
            console.log(err.json())
        })
    }
});