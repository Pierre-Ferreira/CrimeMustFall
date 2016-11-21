import {SmsChatAlert} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Plivo} from 'meteor/pfafman:plivo'

export default function () {
  Meteor.methods({
    'sms_chat_alert'(messageSMS, userID) {
       let messageStr = "";
       let userCursor = Meteor.users.findOne({_id: userID});
       let senderName = userCursor.profile.fullName;
       let senderAddress = userCursor.profile.address;
       let senderSuburb = userCursor.profile.suburb;
       messageStr = "("+senderName+" @ " +senderAddress+" "+senderSuburb+"): "+messageSMS;

       let plivo = Plivo.RestAPI({
          authId: "MAMZHIZTNIMDM1NZLKZJ",
          authToken: "MzI1MDFjYWVlNmY2YjZmMzlhMTc5MWM2ZGQ4Y2Nk",
       });

      let params = {
          'src': '27821234567', // Caller Id
          'dst' : '27823298718', // User Number to Call
          'text' : messageStr,
          'type' : "sms",
      };
console.log("messageStr:"+messageStr);

     plivo.send_message(params, function (status, response) {
         console.log('Status: ', status);
         console.log('API Response:\n', response);
     });
    }
  });
}
