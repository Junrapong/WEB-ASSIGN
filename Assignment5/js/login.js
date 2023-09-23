const users = [
    { "id": 1, "username": "admin", "password": "1111", "role": 1 },
    { "id": 2, "username": "aaa", "password": "2222", "role": 2 },
    { "id": 3, "username": "bbb", "password": "333", "role": 2 }
    ];

    function Signin(){
        document.querySelector('button').onclick = function(){
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            for(const user of users){
                if( user.username === username && user.password === password){
                    localStorage.setItem('userID', user.id)
                    window.location.replace('assets.html');
                    return;
                }
            }

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Login failed, try again!!',
              })
        }
    }
    Signin();