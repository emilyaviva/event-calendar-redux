import uuid from 'uuid'

export const addEvent = (name, dateBegin, dateEnd, description, tags, photo) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    name,
    dateBegin,
    dateEnd,
    description,
    tags,
    photo
  }
}
