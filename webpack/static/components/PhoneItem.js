import React, { PropTypes } from 'react'

const PhoneItem = ({ id, title, img_url }) => (
  <div
    className='phone-item'
    //onClick={onClick}
  >
    <div className='phone-img'><img src={img_url} /></div>
    <div className='phone-title'>{title}</div>
  </div>
)

PhoneItem.propTypes = {
  //onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired
}

export default PhoneItem
