import classnames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

class VertexAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
  }

  toggle() {
    this.setState({ status: !this.state.status });
  }

  render() {
    let accordionClass = ['accordion'];
    if (this.state.status) {
      accordionClass.push('active');
    }
    return (
      <>
        <div className={classnames(accordionClass.join(' '), styles.FAQ)}>
          <h2
            onClick={this.toggle.bind(this)}
            className={classnames(styles.FAQQuestion)}
          >
            <span>{this.props.question}</span>
            <span
              className={classnames('accordion-icon', styles.FAQIcon)}
            ></span>
          </h2>
          <div className={classnames('accordion-answer', styles.FAQAnswer)}>
            {this.props.answer}
          </div>
        </div>
      </>
    );
  }
}
export default VertexAccordion;
