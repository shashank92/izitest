import { connect } from 'react-redux';
import { AsyncWrapper } from '../components';
import { fetchMemorials } from '../actions';

export default connect(
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
)(AsyncWrapper);
