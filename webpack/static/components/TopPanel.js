import React, { Component, PropTypes } from 'react'

export default class TopPanel extends Component {
  render() {
    const {
      selectedPhoneIdExternal, selectedQuery,
      onChange, onClickBack
    } = this.props

    return (
      <div className='top-panel'>
        {!selectedPhoneIdExternal &&
          <input
            type='text' placeholder='request'
            onKeyPress={e => onChange(e.target.value, e.key)}
          />
        }
        {selectedPhoneIdExternal &&
          <div className='back-btn' onClick={e => onClickBack()}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Назад
          </div>
        }
      </div>
    )
  }
}

TopPanel.propTypes = {
  selectedPhoneIdExternal: PropTypes.string.isRequired,
  selectedQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickBack: PropTypes.func.isRequired
}
