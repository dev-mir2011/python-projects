const API_PATH_STARTING =
  "https://biol-track-confidential-hire.trycloudflare.com";

export async function createUser(username, password, email, bio) {
  const data = {
    username,
    password,
    email,
    bio,
  };

  try {
    const response = await fetch(`${API_PATH_STARTING}/create_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function createPost(content, title) {
  const data = {
    content,
    title,
  };

  try {
    const response = await fetch(`${API_PATH_STARTING}/create_post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function login(username, password) {
  const data = {
    username_or_email: username,
    password: password,
  };

  try {
    const response = await fetch(`${API_PATH_STARTING}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function logout() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ message: "" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteUser() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/delete_user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ message: "" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateUser({
  username,
  email,
  password,
  old_password,
  bio,
}) {
  const data = {};

  if (username) data.username = username;
  if (email) data.email = email;
  if (password) data.password = password;
  if (old_password) data.old_password = old_password;
  if (bio !== undefined) data.bio = bio; // Include bio if provided

  try {
    const response = await fetch(`${API_PATH_STARTING}/update_user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    console.log("Success:", actualResponseData);
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getBlogs() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/all_blogs`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function deletePost(pid) {
  try {
    const response = await fetch(`${API_PATH_STARTING}/delete_post/${pid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ message: "" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function userDataGET() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/user_data`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function isLoggedIn() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/isLoggedIn`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function postGET(pid) {
  try {
    const response = await fetch(`${API_PATH_STARTING}/blog/${pid}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function usersGET() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/users`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function authorGET(uid) {
  try {
    const response = await fetch(
      `${API_PATH_STARTING}/get_author_data/${uid}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updatePost(content, title, pid) {
  const data = {
    content,
    title,
  };

  try {
    const response = await fetch(`${API_PATH_STARTING}/update_post/${pid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getCurrentUserBlogs() {
  try {
    const response = await fetch(`${API_PATH_STARTING}/current_user_blogs`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const actualResponseData = await response.json();
    return actualResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
}
