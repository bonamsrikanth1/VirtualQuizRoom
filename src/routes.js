import React from 'react';
import {Route, IndexRoute} from 'react-router';

import NotFound from './components/NotFoundPage';
import Layout from './containers/Layout';
import RegisterPage from './containers/RegisterPage';
import LoginWithEmailPassword from './containers/LoginWithEmailPassword';
import CreateQuestion from './containers/CreateQuestion';
import LecturerHomePage from './containers/LecturerHomePage';
import JoinClassRoom from './containers/JoinClassRoom';
import GetandAnswerQuestions from './containers/GetandAnswerQuestions';
import ResultsPage from './containers/ResultsPage';

export default function Routes(store) {
  return (
    <Route path='/' component={Layout}>
      <IndexRoute component={LoginWithEmailPassword}/>
      <Route path='register' component={RegisterPage}/>
      <Route path='login' component={LoginWithEmailPassword}/>
      <Route path='joinClassRoom' component={JoinClassRoom}/>
      <Route path='lecturerHomepage' component={LecturerHomePage}/>
      <Route path='createQuestion' component={CreateQuestion}/>
      <Route path='getandAnswerQuestions' component={GetandAnswerQuestions}/>
      <Route path='resultsPage' component={ResultsPage}/>
      <Route path='*' component={NotFound}/>
    </Route>
  );
}
