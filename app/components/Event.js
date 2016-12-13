import React, { PropTypes } from 'react'

const Event = ({ name, dateBegin, dateEnd, description, tags, photo }) =>
  <div className='Event'>
    <h3>{name}</h3>
    <div className='times'>
      <p>Begins: {dateBegin}</p>
      <p>Ends: {dateEnd}</p>
    </div>
    <p className='description'>
      {description}
    </p>
    <div className='tags'>
      <span className='tags-header'>Tags</span>
      <ul>
        {tags.length
          ? tags.map((t, i) => <li key={i}>{t}</li>)
          : <li>Untagged</li>
        }
      </ul>
    </div>
    <img src={photo || null} />
  </div>

const propTypes = {
  name: PropTypes.string.isRequired,
  dateBegin: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  photo: PropTypes.string
}

export default Object.assign(Event, { propTypes })
