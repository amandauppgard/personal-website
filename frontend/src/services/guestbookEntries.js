const baseUrl = '/api/guestbook'

const getAll = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch guestbook entries')
  }
  return await response.json()
}

const create = async (entry) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      signature: entry.signature,
      text: entry.message,
    })

  }
  const response = await fetch(baseUrl, options)

  if (!response.ok) {
    throw new Error('Failed to create entry')
  }

  return await response.json()
}

export default { getAll, create }