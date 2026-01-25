import { useEffect, useState } from "react"
import guestbookService from '../services/guestbookEntries'

const ErrorMessage = ({error}) => {
  if (error === null) return null

  return (
    <p className="error-message">{error}</p>
  )
}

const GuestbookForm = ({ entries, setEntries }) => {
  const [signature, setSignature] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const validateContent = () => {
    if (!/^[A-Za-z0-9](?:[A-Za-z0-9 ._-]{0,28}[A-Za-z0-9])?$/.test(signature)) {
      setError("Invalid signature")
      return false
    }

    if (!/^(?=.*\S)[\s\S]{1,500}$/.test(message)) {
      setError('Invalid message')
      return false
    }

    setError(null)
    return true
  }

  const addEntry = entryObject => {
    try {
      guestbookService.create(entryObject).then(returnedEntry => {
        setEntries(prev =>
          [...prev, returnedEntry].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )
        )
        setMessage("")
        setSignature("")
      })
    } catch (e) {
      console.error(e)
    }
  }

  const handleNewEntry = event => {
    event.preventDefault()
    const valid = validateContent()

    if (valid === true) {
      addEntry({
        signature,
        message,
      })
    }
  }

  return (
    <div className="gb-container">
    <div className="guestbook-form-container">
      <span className="guestbook-form-header">Add entry to the guestbook:</span>
      <ErrorMessage error={error} />
      <form onSubmit={handleNewEntry}>
        <div className="guestbook-form">
          <label htmlFor="signature">Signature:</label>
          <div>
            <input
              id="signature"
              className="input"
              value={signature}
              onChange={({ target }) => setSignature(target.value)}
            />
          </div>
          <label htmlFor="message">Message:</label>
            <div className="message-input">
              <textarea
                id="message"
                className="textarea-input"
                value={message}
                type="textbox"
                onChange={({ target }) => setMessage(target.value)}
              />
            </div>
        </div>
        <div className="guestbook-button">
          <button type='submit' className="button">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

const Guestbook = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    guestbookService.getAll().then(e =>
      setEntries(e.sort((a, b) => new Date(b.date) - new Date(a.date)))
    )
  }, [])

  return (
    <div className="content-container">
      <GuestbookForm setEntries={setEntries} entries={entries} />

      <div className="messages-container">
        {entries.map(entry => (
          <div className="text-box" key={entry.id}>
            <div className="message-header">
              <p>{entry.signature} - {entry.date}</p>
            </div>
          <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Guestbook