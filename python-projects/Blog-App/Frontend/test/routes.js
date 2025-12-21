export async function createUser(username, password, email) {

    const data = {
        username,
        password,
        email
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

export async function createPost(content) {

    const data = {
        content
    }

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

export async function login(username, password) {

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

export async function logout() {

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

export async function deleteUser() {

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

export async function updateUser(username, password, email) {

    const data = {
        username,
        password,
        email
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


export async function getBlogs() {

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


export async function deletePost(pid) {

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

export async function userDataGET() {

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

export async function postGET(pid) {

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

export async function usersGET() {

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

export async function authorGET(uid) {

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


export async function updatePost(content, pid) {

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