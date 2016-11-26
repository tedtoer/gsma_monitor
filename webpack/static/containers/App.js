import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectQuery, fetchPhonesIfNeeded, fetchPhone, selectPhone, clickBack } from '../actions'
import TopPanel from '../components/TopPanel'
import PhonesList from '../components/PhonesList'
import PhoneInfo from '../components/PhoneInfo'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectPhone = this.handleSelectPhone.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedQuery !== this.props.selectedQuery) {
      const { dispatch, selectedQuery } = nextProps
      dispatch(fetchPhonesIfNeeded(selectedQuery))
    }
    if (nextProps.selectedPhoneIdExternal && nextProps.selectedPhoneIdExternal !== this.props.selectedPhoneIdExternal) {
      const { dispatch, selectedPhoneIdExternal } = nextProps
      dispatch(fetchPhone(selectedPhoneIdExternal))
    }
  }

  handleChange(nextQuery, key) {
    if (key == 'Enter') {
      this.props.dispatch(selectQuery(nextQuery))
    }
  }

  handleSelectPhone(idExternal) {
    this.props.dispatch(selectPhone(idExternal, window.pageYOffset))
  }

  handleClickBack() {
    this.props.dispatch(clickBack())
  }

  render() {
    const {
      selectedQuery, phones, isFetching, savedScrollPosition,
      selectedPhoneIdExternal, selectedPhone
    } = this.props

    return (
      <div>
        <TopPanel
          selectedPhoneIdExternal={selectedPhoneIdExternal}
          onChange={this.handleChange}
          onClickBack={this.handleClickBack}
          selectedQuery={selectedQuery}
        />
        {isFetching &&
          <h2>Загрузка...</h2>
        }
        {!isFetching && phones.length === 0 &&
          <h2>Пусто</h2>
        }
        {!selectedPhoneIdExternal && phones.length > 0 && !isFetching &&
          <PhonesList savedScrollPosition={savedScrollPosition} onClick={this.handleSelectPhone} phones={phones} isFetching={isFetching} />
        }
        {selectedPhoneIdExternal && !isFetching &&
          <PhoneInfo phone={selectedPhone} />
        }
      </div>
    )
  }
}

App.propTypes = {
  selectedQuery: PropTypes.string.isRequired,
  phones: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  selectedPhoneIdExternal: PropTypes.string.isRequired,
  selectedPhone: PropTypes.object.isRequired,
  savedScrollPosition: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
