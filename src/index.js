

let get = function (url, success) {
  let xhr = new window.XMLHttpRequest()

  xhr.onreadystatechange = () =>
    xhr.readyState === 4 && console.log("ok")

  xhr.open('GET', url, true)
  xhr.send()
}


let getPosts = () => get("https://jsonplaceholder.typicode.com/users", (response) => console.log(response))

console.log(getPosts())
