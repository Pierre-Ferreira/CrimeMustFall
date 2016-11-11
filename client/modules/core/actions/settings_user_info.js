export default {
    saveUserInfoAction({Meteor, LocalState, FlowRouter}, userInfoObj) {
      let errorFlag = false
      if (userInfoObj.fullName==='') {
        errorFlag = true
        LocalState.set('SAVING_ERROR_FULLNAME_REQUIRED','Fullname required!')
      }
      if (userInfoObj.surname==='') {
        errorFlag = true
        LocalState.set('SAVING_ERROR_SURNAME_REQUIRED','Surname required!')
      }
      if (userInfoObj.nickname==='') {
        errorFlag = true
        LocalState.set('SAVING_ERROR_NICKNAME_REQUIRED','Nickname required!')
      }
      // Do not continue if there is a required field missing.
      if (errorFlag) {
        LocalState.set('SAVING_SUCCESS_FLAG', false)
        return
      }
      console.log(userInfoObj.fullName, userInfoObj.surname)
      Meteor.call('settings_user_info_save', Meteor.userId(), userInfoObj, (err) =>{
        if (err) {
          LocalState.set('SAVING_SUCCESS_FLAG', false)
          LocalState.set('SAVING_ERROR',err.message)
        }
      })
    },
    clearErrors({LocalState}) {
      LocalState.set('SAVING_SUCCESS_FLAG', true)
      LocalState.set('SAVING_ERROR_FULLNAME_REQUIRED', null)
      LocalState.set('SAVING_ERROR_SURNAME_REQUIRED', null)
      LocalState.set('SAVING_ERROR_NICKNAME_REQUIRED', null)
      LocalState.set('SAVING_ERROR', null)
    }
}
