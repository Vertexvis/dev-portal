import Link from '@docusaurus/Link';
import classnames from 'classnames';
import React from 'react';

import styles from '../pages/styles.module.css';

export function ExamplesCta() {
  return (
    <div className={classnames('col col--12')}>
      <h2>Ready to get started?</h2>
      <p>
        Get in touch with a platform expert or sign up to the Vertex 3D
        Visualization Platform:{' '}
        <strong>free for the first 100 rendering sessions.</strong>
      </p>
      <Link
        className={classnames('button button--primary', styles.getStarted)}
        to={'/examples/contact'}
      >
        Contact an Expert
      </Link>
      &nbsp;
      <Link
        className={classnames('button button--primary', styles.getStarted)}
        to={'https://account.vertexvis.com/signup'}
      >
        Sign Up Now
      </Link>{' '}
    </div>
  );
}
