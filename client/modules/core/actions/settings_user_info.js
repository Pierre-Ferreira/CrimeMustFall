export default {
    saveUserInfoAction({Meteor, LocalState, FlowRouter}, userInfoObj) {
      LocalState.set('ACCCTIOOOOON_BEIGN_SAVED','Action is called')
      // console.log(LocalState.get('ACCCTIOOOOON_BEIGN_SAVED'))
      console.log(userInfoObj.fullNameRef, userInfoObj.surnameRef)
      Meteor.call('settings_user_info_save', Meteor.userId(), userInfoObj)
    }
}
