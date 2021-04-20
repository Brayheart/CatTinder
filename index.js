var cats = [
  {
    name: "Bob",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maxime et temporibus! Aliquam, voluptatem illo! Pariatur quisquam et saepe molestias.",
    image: './cat1.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Bill",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maxime et temporibus! Aliquam, voluptatem illo! Pariatur quisquam et saepe molestias.",
    image: './cat2.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Jason",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maxime et temporibus! Aliquam, voluptatem illo! Pariatur quisquam et saepe molestias.",
    image: './cat3.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Kyle",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maxime et temporibus! Aliquam, voluptatem illo! Pariatur quisquam et saepe molestias.",
    image: './cat4.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Loren",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maxime et temporibus! Aliquam, voluptatem illo! Pariatur quisquam et saepe molestias.",
    image: './cat5.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Joe",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maxime et temporibus! Aliquam, voluptatem illo! Pariatur quisquam et saepe molestias.",
    image: './cat6.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "No cats in your area",
    bio: "You've seen all the single cats in your area! Check back later for more.",
    image: './cat7.jpeg'
  }
]

var liked = []
var disliked = []

var count = 0

//load first cat
document.getElementsByClassName('card-img-top')[0].setAttribute('src', './cat1.jpeg')
document.getElementsByClassName('card-title')[0].innerHTML = cats[0].name
document.getElementsByClassName('card-text')[0].innerHTML = cats[0].bio

function dislike(e){
  count++
  e.preventDefault()
  disliked.push(cats[count])
  document.getElementsByClassName('card-img-top')[0].setAttribute('src', cats[count].image)
  document.getElementsByClassName('card-title')[0].innerHTML = cats[count].name
  document.getElementsByClassName('card-text')[0].innerHTML = cats[count].bio
  if(cats[count].name === "No cats in your area"){
      end()
  }
}

function like(e){
  count++
  e.preventDefault()
  liked.push(cats[count])
  document.getElementsByClassName('card-img-top')[0].setAttribute('src', cats[count].image)
  document.getElementsByClassName('card-title')[0].innerHTML = cats[count].name
  document.getElementsByClassName('card-text')[0].innerHTML = cats[count].bio
  if(cats[count].name === "No cats in your area"){
      end()
  }
}

function end(){
  document.getElementsByClassName("btn")[0].remove()
  document.getElementsByClassName("btn")[0].remove()
  var button = document.createElement('a')
  button.innerHTML = "View Matches"
  button.setAttribute('class', 'btn btn-warning')
  button.addEventListener('click', matches)
  document.getElementsByClassName('card-body')[0].append(button)
}

function matches(){
  document.getElementsByClassName('card')[0].remove()
  liked.forEach(el => {
    if(el.like === 'True'){
      var temp = `<div class="row">
        <div class="col  d-flex justify-content-center">
          <div class="m-5 card" style="width: 18rem;">
            <img src="${el.image}" class="card-img-top" alt="..." style='height: 200px;width: auto;'>
              <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">${el.bio}.</p>
              </div>
          </div>
        </div>
      </div>`
      console.log(document.getElementsByClassName('container')[0])
      //To Do: render matched cats to DOM
      document.getElementsByClassName('container')[0].append(JSON.parse(temp))
    }
  })
}


document.getElementsByClassName('btn-danger')[0].addEventListener('click', dislike)
document.getElementsByClassName('btn-success')[0].addEventListener('click', like)