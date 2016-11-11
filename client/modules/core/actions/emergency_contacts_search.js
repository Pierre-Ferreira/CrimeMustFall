export default {
  searchEmergencyContacts({Meteor, LocalState, FlowRouter}, searchString) {
console.log('HEEEHAAA',searchString)
    Meteor.call('search_users_regex', searchString, (err,result) =>{
      if (err) {
        LocalState.set('SEARCH_ERROR',err.message)
        console.log('ERR','LOCALSTATE',LocalState.get('SEARCH_ERROR'))
      } else {
        let objArr = []
        let uniqueArr = []
        for (let x = 0; x < result.length; x++) {
          for(let y = 0; y < result[x].length; y++) {
            objArr.push(result[x][y])
          }
        }
        uniqueArr = _.uniq(objArr, (x) => {
          return x._id
        })
        LocalState.set('SEARCH_USERS_REGEX_CURSOR',uniqueArr)
        console.log('CURSOR','LOCALSTATE',LocalState.get('SEARCH_USERS_REGEX_CURSOR'))
      }
    })
  }
}
