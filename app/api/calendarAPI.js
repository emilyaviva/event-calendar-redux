import fetch from 'isomorphic-fetch'

const url = process.env.CALENDAR_API_URL || 'http://localhost:3000/calendar'

class calendarAPI {
  static getAllEvents () {
    return fetch(url)
      .then(res => res.json())
      .catch(err => err)
  }

  static createNewEvent (event) {
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    }).then(res => res.json())
      .catch(err => err)
  }
}

export default calendarAPI
