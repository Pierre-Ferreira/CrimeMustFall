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
            let contactsConnectedArr = result[x][y].profile &&
                                       result[x][y].profile.contacts &&
                                       result[x][y].profile.contacts.connected ||
                                       []
            for(let z = 0; z < contactsConnectedArr.length; z++) {
              if (contactsConnectedArr[z] === Meteor.userId()) {
                result[x][y].contactConnected = true
                break
              } else {
                result[x][y].contactConnected = false
              }
            }
            // Check if the user has a connect request form the contact.
            let requestedByMeArr = result[x][y].profile &&
                                   result[x][y].profile.contacts &&
                                   result[x][y].profile.contacts.requestedByMe ||
                                   []
            for(let z = 0; z < requestedByMeArr.length; z++) {
              if (requestedByMeArr[z] === Meteor.userId()) {
                result[x][y].contactConnectRequest = true
                break
              } else {
                result[x][y].contactConnectRequest = false
              }
            }
            // Check if the contact has a connect request from the user.
            let requestsToMeArr = result[x][y].profile &&
                                  result[x][y].profile.contacts &&
                                  result[x][y].profile.contacts.requestsToMe ||
                                  []
            for(let z = 0; z < requestsToMeArr.length; z++) {
              if (requestsToMeArr[z] === Meteor.userId()) {
                result[x][y].userConnectRequest = true
                break
              } else {
                result[x][y].userConnectRequest = false
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
