import { connect } from 'react-redux';
import { SortButtons } from '../components';
import { sortByFirstName, sortByLastName, sortByCreationDate } from '../actions';

export default connect(
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
)(SortButtons);
