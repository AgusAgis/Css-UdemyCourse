const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nombre = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,1000)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1675777180806-03757eff2bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"alt="NY">'
    title.innerHTML='New Yotk the city of lights'
    excerpt.innerHTML='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, iste.'
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="writer">'
    nombre.innerHTML = 'John Doe'
    date.innerHTML = 'Feb 8, 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}