const LogoutBtn = document.querySelector('#logout');


LogoutBtn.addEventListener('click', async e =>{
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/'
        
    } catch (error) {
        console.log(error);
    }

});