import React, { Component, PropTypes } from 'react'

export default class PhoneInfo extends Component {
  render() {
    const phone = this.props.phone

    return (
      <div className='phone-info'>
        <div className='img'><img src={phone.image_url} /></div>
        <div className='content'>
          <h1>{phone.title}</h1>
          <p><strong>Экран: </strong>{phone.display_size}" {phone.display_resolution}</p>
          <p><strong>Камера: </strong>{phone.camera_photo}, видео - {phone.camera_video}</p>
          {phone.ram && <p><strong>ОЗУ: </strong>{phone.ram}</p>}
          {phone.cpu && <p><strong>Процессор: </strong>{phone.cpu}</p>}
          {phone.battery_bulk && <p><strong>Батарея: </strong>{phone.battery_bulk}, тип - {phone.battery_type}</p>}
        </div>
        <div className='separ'></div>
      </div>
    )
  }
}

PhoneInfo.propTypes = {
  phone: PropTypes.object.isRequired,
}
