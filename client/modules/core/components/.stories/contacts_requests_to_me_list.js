import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ContactsRequestsToMeList from '../contacts_requests_to_me_list.jsx';

storiesOf('core.ContactsRequestsToMeList', module)
  .add('default view', () => {
    return (
      <ContactsRequestsToMeList />
    );
  })
