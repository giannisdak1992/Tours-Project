import React from 'react'
import { useState } from 'react'

const Tour = (tour) => {
  const [readMore, setReadMore] = useState(false)
  const { id, name, info, image, price, removeTour } = tour

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'ReadLess' : 'ReadMore'}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
