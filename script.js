const inputField = document.querySelector('#search')
const films = document.querySelectorAll('.movies')

inputField.addEventListener('keyup', function (e) {
    const word = e.target.value.toLowerCase()
    films.forEach(item => {
        item.querySelector('h3').textContent.toLocaleLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none')
    })
})