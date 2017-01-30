import { connect } from 'react-redux';
import { MemorialTable } from '../components';

export default connect(
  function mapStateToProps(state) {
    return {
      memorials: state.memorials,
      sortOrder: state.sortOrder
    };
  }
)(MemorialTable);
