export default {
    saveUserInfoAction({Meteor, LocalState, FlowRouter}, userInfoObj) {
      LocalState.set('SAVING_ERROR_INPUT_REQUIRED', null)
      LocalState.set('SAVING_ERROR', null)
      // if (userInfoObj.fullName==='')
      //   return LocalState.set('SAVING_ERROR_INPUT_REQUIRED','Input required!')
      console.log(userInfoObj.fullName, userInfoObj.surname)
      Meteor.call('settings_user_info_save', Meteor.userId(), userInfoObj, (err) =>{
        if (err)
          LocalState.set('SAVING_ERROR',err.message)
      })
    },
    clearErrors({LocalState}) {
      return LocalState.set('SAVING_ERROR_INPUT_REQUIRED', null);
    }
}
