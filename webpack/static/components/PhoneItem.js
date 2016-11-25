import React, { Component, PropTypes } from 'react'

export default class PhoneItem extends Component {
  render() {
    const { id, title, img_url, onClick } = this.props

    return (
      <div
        className='phone-item'
        onClick={e => onClick(id)}
      >
        <div className='phone-img'><img src={img_url} /></div>
        <div className='phone-title'>{title}</div>
      </div>
    )
  }
}

PhoneItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
