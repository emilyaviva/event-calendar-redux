import fetch from 'isomorphic-fetch'

const url = 'http://localhost:3000/calendar'

class calendarAPI {
  static getAllEvents () {
    return fetch(url)
      .then(res => res.json())
      .catch(err => err)
  }

  static createNewEvent () {
    return fetch(url, { method: 'post' })
      .then(res => res.json())
      .catch(err => err)
  }
}

export default calendarAPI
