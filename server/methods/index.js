import user_settings from './user_settings';
import search_users_regex from './search_users_regex';
import create_contact_connect_request  from './create_contact_connect_request';
import confirm_contact_connect_request from './confirm_contact_connect_request';

export default function () {
  user_settings();
  search_users_regex();
  create_contact_connect_request();
  confirm_contact_connect_request();
}
