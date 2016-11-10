import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import EmergencyContactsSearch from '../emergency_contacts_search.jsx';

storiesOf('core.EmergencyContactsSearch', module)
  .add('default view', () => {
    return (
      <EmergencyContactsSearch />
    );
  })
