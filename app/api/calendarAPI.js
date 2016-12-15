import fetch from 'isomorphic-fetch'

class calendarAPI {
  static getAllEvents () {
    return fetch('http://localhost:3000/calendar')
      .then((res) => {
        return res.json()
      })
      .catch((err) => {
        return err
      })
  }
}

export default calendarAPI
