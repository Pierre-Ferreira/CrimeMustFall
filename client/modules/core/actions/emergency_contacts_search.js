export default {
  searchEmergencyContacts({Meteor, LocalState, FlowRouter}, searchString) {
console.log('HEEEHAAA',searchString)
    Meteor.call('search_users_regex', searchString, (err,cursor) =>{
      if (err) {
        LocalState.set('SEARCH_ERROR',err.message)
        console.log('ERR','LOCALSTATE',LocalState.get('SEARCH_ERROR'))
      } else {
        LocalState.set('SEARCH_USERS_REGEX_CURSOR',cursor)
        console.log('CURSOR','LOCALSTATE',LocalState.get('SEARCH_USERS_REGEX_CURSOR'))
        return cursor
      }
    })
  }
}
