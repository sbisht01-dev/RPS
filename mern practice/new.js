b()
a()

function a(){
  console.log("hiii")
}

var b = function (){
  console.log("hyw")
} 

console.log("styuytreshg")

let flag = 0
function start(){
  console.log(flag + "first")
function last(){
  const element = document.getElementById("output")
  const parent = element.parentNode
  for(let i = 0; i<=flag; i++){
     parent.removeChild(element)
    console.log(element)
  }
 
}

console.log(flag + "sec")
  
function note(flag){
    console.log(flag + "mid")
    let text = document.getElementById("input-field").value
    console.log(text)
    let grab = document.createElement('div')
    grab.id = 'output'
    grab.innerHTML = text
    document.body.appendChild(grab)
    flag = flag+1
    console.log(flag + "last")
    }

}

