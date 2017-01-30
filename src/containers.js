import { connect } from 'react-redux';
import * as components from './components';
import {
  sortByFirstName,
  sortByLastName,
  sortByCreationDate,
  updateMemorials
} from './actions';

export const SortButtons = connect(
  function mapStateToProps(state) {
    return { sortOrder: state.sortOrder };
  },
  function mapDispatchToProps(dispatch) {
    return {
      sortByFirstName: () => dispatch(sortByFirstName()),
      sortByLastName: () => dispatch(sortByLastName()),
      sortByCreationDate: () => dispatch(sortByCreationDate())
    };
  }
)(components.SortButtons);

export const MemorialTable = connect(
  function mapStateToProps(state) {
    return {
      memorials: state.memorials,
      sortOrder: state.sortOrder
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      updateMemorials: (memorials) => dispatch(updateMemorials(memorials))
    };
  }
)(components.MemorialTable);
