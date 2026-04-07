import { useEffect, useState } from "react"
import guestbookService from '../services/guestbookEntries'
import Spinner from '@hackernoon/pixel-icon-library/icons/SVG/solid/spinner-solid.svg'

const ErrorMessage = ({error}) => {
  if (error === null) return null

  return (
    <p className="error-message">{error}</p>
  )
}

const GuestbookForm = ({ setEntries }) => {
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
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    guestbookService.getPage(page, 5).then(res => {
      setEntries(res.data)
      setTotalPages(res.totalPages)
    })
    setLoading(false)
  }, [page])

  const formatDate = (date) => {
    const d = new Date(date)

    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    const hours = String(d.getHours()).padStart(2, '0')
    const minutes = String(d.getMinutes()).padStart(2, '0')

    return `${day}.${month}.${year} ${hours}:${minutes}`
  }

  return (
    <div className="content-container">
      <GuestbookForm setEntries={setEntries} />

      <div className="messages-container">
        {loading ? (
          <div className="spinner-container">
            <img className='spinner' src={Spinner} alt="Loading" />
          </div>
        ) : (
           entries && entries.length !== 0 ? (entries.map(entry => (
              <div className="text-box" key={entry.id}>
                <div className="message-header">
                  <p>
                    {entry.signature} - {formatDate(entry.date)}
                  </p>
                </div>
              <p>{entry.text}</p>
              </div>
            ))
            ) : (
              <div className="spinner-container">
                <p>Error - entries could not be loaded</p>
              </div>
            )

        )}
      <div className="pagination">
        <button
          className="button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          &lt;
        </button>

        <span>Page {page}/{totalPages}</span>

        <button
          className="button"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          &gt;
        </button>
      </div>
      </div>
    </div>
  )
}

export default Guestbook