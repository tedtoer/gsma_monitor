import React, { PropTypes, Component } from 'react'
import PhoneItem from './PhoneItem'

export default class PhonesList extends Component {
  render() {
    return (
      <div className='phones-list'>
        {this.props.phones.map(phone =>
          <PhoneItem
            key={phone.id}
            {...phone}
            //onClick={() => onPhoneClick(phone.id)}
          />
        )}
      </div>
    )
  }
}

PhonesList.propTypes = {
  phones: PropTypes.array.isRequired
}
