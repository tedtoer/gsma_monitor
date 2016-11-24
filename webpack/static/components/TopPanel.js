import React, { Component, PropTypes } from 'react'

export default class TopPanel extends Component {
  render() {
    const { selectedQuery, onChange } = this.props

    return (
      <div className='top-panel'>
        <input
          type='text' placeholder='request'
          onKeyPress={e => onChange(e.target.value, e.key)}
        />
      </div>
    )
  }
}

TopPanel.propTypes = {
  selectedQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
