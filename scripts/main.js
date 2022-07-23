let username = localStorage.getItem('username') || 'Anonymous';
document.querySelector('h1').innerHTML = `Mozilla is cool, ${username}`;  

document.querySelector('img').onclick = () => {
    const imgSRc = document.querySelector('img').getAttribute('src');
    if (imgSRc === 'images/firefox-icon.jpeg'){
        document.querySelector('img').setAttribute('src', 'images/Mozilla-Firefox.jpeg')
    }else{
        document.querySelector('img').setAttribute('src', 'images/firefox-icon.jpeg')
    }
}

document.querySelector('button').onclick = () => {
    let username = prompt('Hey there, Enter your name');
    while(username === null || !username.trim() || username === 'Anonymous') {
        username = prompt('username is required!');
    }
    localStorage.setItem('username', username);
    document.querySelector('h1').innerHTML = `Mozilla is cool, ${username}`
}

