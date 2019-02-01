/**
 *
 * Asynchronously loads the component for KanjiPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
