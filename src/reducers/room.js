import * as types from '../config/constants';
import initialState from './initialState';

export default function room(state = initialState.classRoom, action) {

  switch (action.type) {

    case types.CLASS_CREATION_SUCCESS:
      return Object.assign({}, state, {
        currentClassRoom: action.payload
      });

    case types.GET_ALL_CLASSES_SUCCESS:
      return Object.assign({}, state, {
        listOfAllClasses: action.payload
      });

    case types.CLASS_JOIN_SUCCESS:
      return Object.assign({}, state, {
        questions: action.payload.questions,
        currentClassRoom: action.payload.currentClassRoom,
        studentID: action.payload.studentID,
        hosted: action.payload.hosted,
        endHostedQuiz: action.payload.endHostedQuiz
      });


    default:
      return state;
  }
}
