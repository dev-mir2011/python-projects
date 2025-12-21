export const FLASK_URL = "http://localhost:5000"

export async function create_url(long_url) {

    const data = {
        long_url
    }

  try {
    const response = await fetch(`${FLASK_URL}/generate-short-url`, {
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
    return actualResponseData
    console.log('Success:', actualResponseData);
  } catch (error) {
    console.error('Error:', error);
  }
}