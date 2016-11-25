import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectQuery, fetchPhonesIfNeeded, selectPhone } from '../actions'
import TopPanel from '../components/TopPanel'
import PhonesList from '../components/PhonesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectPhone = this.handleSelectPhone.bind(this)
  }

  // componentDidMount() {
  //   const { dispatch, selectedQuery } = this.props
  //   dispatch(fetchPhonesIfNeeded(selectedQuery))
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedQuery !== this.props.selectedQuery) {
      const { dispatch, selectedQuery } = nextProps
      dispatch(fetchPhonesIfNeeded(selectedQuery))
    }
  }

  handleChange(nextQuery, key) {
    if (key == 'Enter') {
      this.props.dispatch(selectQuery(nextQuery))
    }
  }

  handleSelectPhone(idExternal) {
    this.props.dispatch(selectPhone(idExternal))
  }

  render() {
    const { selectedQuery, phones, isFetching } = this.props
    return (
      <div>
        <TopPanel onChange={this.handleChange} selectedQuery={selectedQuery} />
        {isFetching &&
          <h2>Загрузка...</h2>
        }
        {!isFetching && phones.length === 0 &&
          <h2>Пусто</h2>
        }
        {phones.length > 0 && !isFetching &&
          <PhonesList onClick={this.handleSelectPhone} phones={phones} isFetching={isFetching} />
        }
      </div>
    )
  }
}

App.propTypes = {
  selectedQuery: PropTypes.string.isRequired,
  phones: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
