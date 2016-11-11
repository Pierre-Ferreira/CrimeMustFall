export default {
  searchEmergencyContacts({Meteor, LocalState, FlowRouter}, searchString) {
    Meteor.call('search_users_regex', searchString, (err,result) =>{
      if (err) {
        LocalState.set('SEARCH_ERROR',err.message)
        console.log('ERR','LOCALSTATE',LocalState.get('SEARCH_ERROR'))
      } else {
        let objArr = []
        let uniqueArr = []
        // Build a single array from the multi array.
        for (let x = 0; x < result.length; x++) {
          for(let y = 0; y < result[x].length; y++) {
            // Check if the contact is connected to the user.
            // Check if the contact has a connect request from the user.
            let requestsToMeArr = result[x][y].profile.contacts.requestsToMe
            for(let z = 0; z < requestsToMeArr.length; z++) {
              if (requestsToMeArr[z] === Meteor.userId()) {
                result[x][y].connectRequest = true
              } else {
                result[x][y].connectRequest = false                
              }
            }
            // Leave out the current user. Do not display it.
            if(result[x][y]._id !== Meteor.userId())
              objArr.push(result[x][y])
          }
        }
        // Remove duplicates.
        uniqueArr = _.uniq(objArr, (x) => {
          return x._id
        })
        LocalState.set('SEARCH_USERS_REGEX_CURSOR',uniqueArr)
        console.log('CURSOR','LOCALSTATE',LocalState.get('SEARCH_USERS_REGEX_CURSOR'))
      }
    })
  }
}
