// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and render the blog title and body to the page.

async function getPost() {
  const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post = await postPromise.json()
  const html = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
  `

  document.body.innerHTML = html
}

getPost()
