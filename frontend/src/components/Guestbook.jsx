import { useEffect, useState } from "react"
import guestbookService from '../services/guestbookEntries'

const GuestbookForm = ({ entries, setEntries }) => {
  const [signature, setSignature] = useState('')
  const [message, setMessage] = useState('')

  const addEntry = entryObject => {
    try {
      guestbookService.create(entryObject).then(returnedEntry => {
        setEntries(entries.concat(returnedEntry))
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
    <div className="text-box">
      Add entry to the guestbook:
      <form onSubmit={handleNewEntry}>
        <label>
          Signature:
          <input
            value={signature}
            onChange={({ target }) => setSignature(target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            type="textbox"
            onChange={({ target }) => setMessage(target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
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