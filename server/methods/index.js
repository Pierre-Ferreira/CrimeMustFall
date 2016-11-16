import user_settings from './user_settings';
import search_users_regex from './search_users_regex';
import create_contact_connect_request  from './create_contact_connect_request';
import confirm_contact_connect_request from './confirm_contact_connect_request';
import chat_message_update from './chat_message_update';
import chat_message_create from './chat_message_create';

export default function () {
  user_settings();
  search_users_regex();
  create_contact_connect_request();
  confirm_contact_connect_request();
  chat_message_update();
  chat_message_create();
}
