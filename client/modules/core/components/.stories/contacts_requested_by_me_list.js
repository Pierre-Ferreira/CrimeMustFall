import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ContactsRequestedByMeList from '../contacts_requested_by_me_list.jsx';

storiesOf('core.ContactsRequestedByMeList', module)
  .add('default view', () => {
    return (
      <ContactsRequestedByMeList />
    );
  })
