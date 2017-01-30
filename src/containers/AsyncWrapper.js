import { connect } from 'react-redux';
import { AsyncWrapper } from '../components';
import { fetchMemorials } from '../actions';

export default connect(
  function mapStateToProps(state) {
    return {
      waitingForMemorials: state.waitingForMemorials
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchMemorials: () => dispatch(fetchMemorials())
    };
  }
)(AsyncWrapper);
