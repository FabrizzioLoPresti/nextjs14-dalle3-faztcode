'use server'

export const generateImageAction = async (formData: FormData) => {
  const prompt = formData.get('prompt') as string;

  const res = await fetch('http://localhost:3000/api/generate', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  });
  const {url} = await res.json();
  return url
}