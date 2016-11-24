import React, { PropTypes } from 'react'

const PhoneItem = ({ id_external, title }) => (
  <div
    className='phone-item'
    //onClick={onClick}
  >
    {title}
  </div>
)

PhoneItem.propTypes = {
  //onClick: PropTypes.func.isRequired,
  id_external: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PhoneItem
