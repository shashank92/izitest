import { connect } from 'react-redux';
import * as components from './components';
import {
  sortByFirstName,
  sortByLastName,
  sortByCreationDate,
  fetchMemorials
} from './actions';

export const AsyncWrapper = connect(
  function mapStateToProps(state) {
    return {
      isFetching: state.isFetching
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchMemorials: () => dispatch(fetchMemorials())
    };
  }
)(components.AsyncWrapper);

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
  }
)(components.MemorialTable);
