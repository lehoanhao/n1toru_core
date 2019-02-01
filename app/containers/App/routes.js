/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BlankPage from 'containers/BlankPage/Loadable';
import KanjiPage from 'containers/KanjiPage/Loadable';

export default function RouteHandler() {
  const HomeComponent = withRouter(props => <HomePage {...props} />);
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/blank" component={BlankPage} />
      <Route path="/kanji" component={KanjiPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}
