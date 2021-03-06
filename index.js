// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and render the blog title and body to the page.

// async function getPost() {
//   const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   const post = await postPromise.json()
//   const html = `
//       <h3>${post.title}</h3>
//       <p>${post.body}</p>
//   `

//   document.body.innerHTML = html
// }

// getPost()

///////////////////////////////////////////////////////////////////////////

//  SUMBIT FORM DATA

// const userForm = document.getElementById('userForm')

// userForm.addEventListener('submit', function (e) {
//   e.preventDefault()

//   const formData = new FormData(this)
//   const options = {
//     method: 'POST',
//     body: formData,
//   }

//   // Write the Fetch statement using https://httpbin.org/post along with the options. Then console log the JSON response.

//   async function sendData() {
//     try {
//       const response = await fetch('https://httpbin.org/post', options)
//       const resJSON = await response.json()
//       console.log(resJSON.form)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   sendData()
// })

///////////////////////////////////////////////////////////////////////////

// UPLOADING A FILE USING FETCH

// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior. Post a FormData object to https://httpbin.org/post, then console log the JSON response.

// const uploadForm = document.getElementById('uploadForm')

// uploadForm.addEventListener('submit', function (e) {
//   e.preventDefault()

//   uploadFile(this)
// })

// async function uploadFile(data) {
//   const formData = new FormData(data)

//   const options = {
//     method: 'POST',
//     body: formData,
//   }

//   const uploadPromise = await fetch('https://httpbin.org/post', options)

//   if (uploadPromise.ok) {
//     const uploadResp = await uploadPromise.json()
//     console.log(uploadResp)
//   } else {
//     console.error(uploadPromise.status)
//   }
// }

///////////////////////////////////////////////////////////////////////////

//  UPLOADING MULTIPLE FILES

// const uploadForm = document.getElementById('uploadForm')

// uploadForm.addEventListener('submit', function (e) {
//   e.preventDefault()

//   uploadFile(this)
// })

// async function uploadFile(data) {
//   const formData = new FormData()
//   const files = data.querySelector('input[type="file"]').files

//   for (let i = 0; i < files.length; i++) {
//     formData.append(`fileInput_${i}`, files[i])
//   }

//   const options = {
//     method: 'POST',
//     body: formData,
//   }

//   const uploadPromise = await fetch('https://httpbin.org/post', options)

//   if (uploadPromise.ok) {
//     const uploadResp = await uploadPromise.json()
//     console.log(uploadResp.files)
//   } else {
//     console.error(uploadPromise.status)
//   }
// }

///////////////////////////////////////////////////////////////////////////

// WORKING WITH MULTIPLE FETCH REQUESTS

// Below the authors name, add a new paragraph to the HTML that contains the company that the user works for.

async function getPost() {
  const [postPromise, userPromise] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users'),
  ])

  const posts = await postPromise.json()
  const users = await userPromise.json()

  const html = `
  <h3>${posts[0].title}</h3>
      <h5>${users.filter((user) => user.id === posts[0].userId)[0].name}</h5>
       <p>${users.filter((user) => user.id === posts[0].userId)[0].company.name}</p>
  <p>${posts[0].body}</p>
`

  document.body.innerHTML = html
}

getPost()
