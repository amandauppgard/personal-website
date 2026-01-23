import { useEffect, useState } from "react"
import guestbookService from '../services/guestbookEntries'

const GuestbookForm = ({ entries, setEntries }) => {
  const [signature, setSignature] = useState('')
  const [message, setMessage] = useState('')


  const addEntry = entryObject => {
    try {
      guestbookService.create(entryObject).then(returnedEntry => {
        setEntries(entries.concat(returnedEntry))
        setMessage("")
        setSignature("")
      })
    } catch (e) {
      console.error(e)
    }
  }

  const handleNewEntry = event => {
    event.preventDefault()
    addEntry({
      signature,
      message,
    })
  }

  return (
    <div className="gb-container">
    <div className="guestbook-form-container">
      <span className="guestbook-form-header">Add entry to the guestbook:</span>
      <form onSubmit={handleNewEntry}>
        <div className="guestbook-form">
          <label>
            Signature:
            <input
              className="input"
              value={signature}
              onChange={({ target }) => setSignature(target.value)}
            />
          </label>
          <label className="message-input">
            Message:
            <textarea
              className="textarea-input"
              value={message}
              type="textbox"
              onChange={({ target }) => setMessage(target.value)}
            />
          </label>
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
      setEntries(e)
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