export default {
  searchEmergencyContacts({Meteor, LocalState, FlowRouter}, searchString) {
    Meteor.call('search_users_regex', searchString, (err,result) =>{
      if (err) {
        LocalState.set('SEARCH_ERROR',err.message)
        console.log('ERR','LOCALSTATE',LocalState.get('SEARCH_ERROR'))
      } else {
        // Result is a multi array because each string (space seperated) in search bar returns an array.
        let idArr = []
        let uniqueArr = []
        // Build a single array from the multi array.
        for (let x = 0; x < result.length; x++) {
          for(let y = 0; y < result[x].length; y++) {
            // Leave out the current user. Do not display it.
            if(result[x][y]._id !== Meteor.userId())
              // objArr.push(result[x][y])
              idArr.push(result[x][y]._id)
          }
        }
        // Remove duplicates.
        uniqueArr = _.uniq(idArr, (x) => {
          return x
        })
        LocalState.set('SEARCH_USERS_REGEX_CURSOR',uniqueArr)
console.log('CURSOR','LOCALSTATE',LocalState.get('SEARCH_USERS_REGEX_CURSOR'))
      }
    })
  }
}
