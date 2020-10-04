// asynchronous programming
// not synchornous
// synchronous == one at a time
// asynchronous == not one at a time/all at once

// we don't want to block the UI from loading until everything is done, we want to show everything as soon as possible


function putNameOnPages(githubJson) {
  const username = githubJson.login
  const body = document.getElementById('username')
  div.innerHTML = username
}

// fetches use promises
// function whenDataIsLoaded(data) {
//   console.log(data)
// }
fetch('https://api.github.com/users/mirandamon')
  .then((result) => result.json())
  .then((json) => putNameOnPage(json))
