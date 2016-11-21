export default {
  create({Meteor, LocalState, FlowRouter}, email, password) {
    LocalState.set('CREATE_USER_ERROR', null);
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }

    Accounts.createUser({email, password}, (err, result) => {
      if (err)
        LocalState.set('LOGIN_ERROR', err.message);
    });
    FlowRouter.go('/home');
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    LocalState.set('LOGIN_ERROR', null);
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }



    Meteor.loginWithPassword(email, password, (err, result) => {
      if (err)
        LocalState.set('LOGIN_ERROR', err.message);
    });
    FlowRouter.go('/home');
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
