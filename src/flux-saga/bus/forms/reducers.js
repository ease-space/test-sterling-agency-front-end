import { combineForms } from 'react-redux-form';

export const formReducer = combineForms(
  {
    subscribe: {
      email: '',
    },
  },
  'forms',
);
