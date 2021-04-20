var cats = [
  {
    name: "Bob",
    bio: "Are we in the litter box? Because I'm diggin' you.",
    image: './img/cat1.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Bill",
    bio: "Are you feline the connection between us?",
    image: './img/cat2.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Jason",
    bio: "Can i spend all my 9 lives with you?",
    image: './img/cat3.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Kyle",
    bio: "Can you take me to the vet, because you just took my breath away.",
    image: './img/cat4.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Loren",
    bio: "I hope you have pet insurance, because I’m about to destroy your pussy.",
    image: './img/cat5.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Joe",
    bio: "How you feline? Cause you purrfect, I’m not kitten!",
    image: './img/cat6.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Michael",
    bio: "You must have been sleeping in the sun, because you are HOT.",
    image: './img/cat7.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Joe",
    bio: "You remind me off a leopard... or a tiger. Either way, I don't mind the claws",
    image: './img/cat8.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Joe",
    bio: "Meet me by the dead bird.",
    image: './img/cat9.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "Joe",
    bio: "How you feline? Cause you purrfect, I’m not kitten!",
    image: './img/cat10.jpeg',
    like: Math.random() >= 0.5 ? 'True' : 'False'
  },
  {
    name: "No cats in your area",
    bio: "You've seen all the single cats in your area! Check back later for more.",
    image: './img/end.jpeg'
  }
]

var liked = []
var disliked = []

var count = 0

//load first cat
document.getElementsByClassName('card-img-top')[0].setAttribute('src', './img/cat1.jpeg')
document.getElementsByClassName('card-title')[0].innerHTML = cats[0].name
document.getElementsByClassName('card-text')[0].innerHTML = cats[0].bio

function dislike(e){
    console.log(cats[count].image)
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
      var temp = document.createElement('div')
      temp.innerHTML = `<div class="row">
        <div class="col  d-flex justify-content-center">
          <div class="m-5 card" style="width: 18rem;">
            <img src="${el.image}" class="card-img-top" alt="..." style='height: 200px;width: auto;'>
              <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">${el.bio}.</p>
              </div>
              <div class="d-inline p-2 bg-success text-white text-center">Likes you back!</div>
          </div>
        </div>
      </div>`
      document.getElementById('match').appendChild((temp))
    }
  })
}


document.getElementsByClassName('btn-danger')[0].addEventListener('click', dislike)
document.getElementsByClassName('btn-success')[0].addEventListener('click', like)