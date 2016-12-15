import uuid from 'uuid'

export const addEvent = (name, dateBegin, dateEnd, description, tags, photo, food) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    name,
    dateBegin,
    dateEnd,
    description,
    tags,
    photo,
    food
  }
}

export const toggleFood = (toggle) => {
  return {
    type: 'TOGGLE_FOOD',
    toggle
  }
}
