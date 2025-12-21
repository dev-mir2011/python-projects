
const createUserForm = document.getElementById("createUserForm")
const createPostForm = document.getElementById("createPostForm")
const loginForm = document.getElementById("loginForm")
const updateForm = document.getElementById("updateForm")
const updatePostForm = document.getElementById("updatePostForm")
const logoutButton = document.getElementById("logout")
const deleteUserButton = document.getElementById("delete")
// const BODY = document.getElementById("body")

createUserForm.addEventListener('submit', event => {
    event.preventDefault()
    createUser()
})

createPostForm.addEventListener('submit', event => {
    event.preventDefault()
    createPost()
})

loginForm.addEventListener('submit', event => {
    event.preventDefault()
    login()
})

updateForm.addEventListener('submit', event => {
    event.preventDefault()
    updateUser()
})

updatePostForm.addEventListener('submit', event => {
    event.preventDefault()
    updatePost()
})

logoutButton.addEventListener('click', () => logout())
deleteUserButton.addEventListener('click', () => deleteUser())
// BODY.addEventListener('load', () => deletePostGET())

async function createUser() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value

    const data = {
        username: username,
        password: password,
        email: email
    }
  try {
    const response = await fetch('http://127.0.0.1:5000/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function createPost() {
    const content = document.getElementById("content").value

    const data = {
        content : content
    }

    console.log(data)
  try {
    const response = await fetch('http://127.0.0.1:5000/create_post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function login() {
    const username = document.getElementById("usernamel").value
    const password = document.getElementById("passwordl").value

    const data = {
        username_or_email: username,
        password: password
    }
  try {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function logout() {

  try {
    const response = await fetch('http://127.0.0.1:5000/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({message: ""}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteUser() {

  try {
    const response = await fetch('http://127.0.0.1:5000/delete_user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({message: ""}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function updateUser() {

    const username = document.getElementById("usernameu").value
    const password = document.getElementById("passwordu").value
    const email = document.getElementById("emailu").value

    const data = {
        username: username,
        password: password,
        email: email
    }

  try {
    const response = await fetch('http://127.0.0.1:5000/update_user', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}


async function getBlogs() {
    try {
        const response = await fetch('http://127.0.0.1:5000/all_blogs');

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        return data;

    } 
    
    catch (error) {
            console.error('Fetch error:', error);
    }
}


async function deletePost() {

    const pid = parseInt(document.getElementById("pid").value)

  try {
    const response = await fetch(`http://127.0.0.1:5000/delete_post/${pid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({message: ""}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function userDataGET() {
   try {
    const response = await fetch('http://127.0.0.1:5000/user_data', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }

}

async function getCurrentUserBlogs() {
   try {
    const response = await fetch('http://localhost:5000/current_user_blogs', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }

}

async function postGET() {
  const pid = parseInt(document.getElementById("pid").value)

   try {
    const response = await fetch(`http://127.0.0.1:5000/blog/${pid}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }

}

async function usersGET() {
   try {
    const response = await fetch('http://127.0.0.1:5000/users', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }

}

async function authorGET() {
  const uid = parseInt(document.getElementById("uid").value)
   try {
    const response = await fetch(`http://127.0.0.1:5000/get_author_data/${uid}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }

}


async function updatePost() {

    const content = document.getElementById("contentu").value
    const pid = parseInt(document.getElementById("pidu").value)

    const data = {
      content
    }

  try {
    const response = await fetch(`http://127.0.0.1:5000/update_post/${pid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}