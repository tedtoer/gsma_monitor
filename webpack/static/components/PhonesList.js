import React, { PropTypes, Component } from 'react'
import PhoneItem from './PhoneItem'

export default class PhonesList extends Component {
  componentDidMount() {
    if (this.props.savedScrollPosition) {
      window.scrollTo(0, this.props.savedScrollPosition)
    }
  }

  render() {
    return (
      <div className='phones-list'>
        {this.props.phones.map(phone =>
          <PhoneItem
            key={phone.id}
            {...phone}
            onClick={this.props.onClick}
          />
        )}
        <div className='separ'></div>
      </div>
    )
  }
}

PhonesList.propTypes = {
  phones: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  savedScrollPosition: PropTypes.number.isRequired
}
