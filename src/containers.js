import { connect } from 'react-redux'
import * as components from './components'
import * as actions from './actions'

export const SortButtons = connect(
  function mapStateToProps(state) {
    return { memorials: state }
  },
  function mapDispatchToProps(dispatch) {
    return {
      sortByFirstName: () => dispatch(actions.sortByFirstName),
      sortByLastName: () => dispatch(actions.sortByLastName),
      sortByCreationDate: () => dispatch(actions.sortByCreationDate),
      updateMemorials: (memorials) => dispatch(actions.updateMemorials(memorials))
    }
  }
)(components.SortButtons)

export const MemorialTable = connect(
  function mapStateToProps(state) {
    return { memorials: state }
  },
  function mapDispatchToProps(dispatch) {
    return {
      sortByFirstName: () => dispatch(actions.sortByFirstName),
      sortByLastName: () => dispatch(actions.sortByLastName),
      sortByCreationDate: () => dispatch(actions.sortByCreationDate),
      updateMemorials: (memorials) => dispatch(actions.updateMemorials(memorials))
    }
  }
)(components.MemorialTable)

export const RefreshButton = connect(
  function mapStateToProps(state) {
    return { memorials: state }
  },
  function mapDispatchToProps(dispatch) {
    return {
      sortByFirstName: () => dispatch(actions.sortByFirstName),
      sortByLastName: () => dispatch(actions.sortByLastName),
      sortByCreationDate: () => dispatch(actions.sortByCreationDate),
      updateMemorials: (memorials) => dispatch(actions.updateMemorials(memorials))
    }
  }
)(components.RefreshButton)
