const baseUrl = '/api/guestbook'

const getPage = async (page = 1, limit = 10) => {
  const response = await fetch(
    `${baseUrl}?page=${page}&limit=${limit}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch paginated guestbook entries')
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

export default { getPage, create }