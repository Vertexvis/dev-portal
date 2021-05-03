import React from 'react';
import {Helmet} from 'react-helmet';

class VertexCustomJS extends React.Component {
  render() {
	return (
	  <Helmet>
	    <script src="/js/WrapSelect.js"></script>
	  </Helmet>	
	); 
  }
}
export default VertexCustomJS;
