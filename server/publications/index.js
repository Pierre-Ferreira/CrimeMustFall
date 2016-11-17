import user_profile from './user_profile';
import emergency_contacts_search from './emergency_contacts_search';
import get_contact_profile from './get_contact_profile';
import get_my_chats_initiated from './get_my_chats_initiated';
import get_my_chats_alerted from './get_my_chats_alerted';
import get_chat_messages from './get_chat_messages';


export default function () {
  user_profile();
  emergency_contacts_search();
  get_contact_profile();
  get_my_chats_initiated();
  get_my_chats_alerted();
  get_chat_messages();
}
