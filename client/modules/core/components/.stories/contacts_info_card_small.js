import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ContactsInfoCardSmall from '../contacts_info_card_small.jsx';

storiesOf('core.ContactsInfoCardSmall', module)
  .add('default view', () => {
    return (
      <ContactsInfoCardSmall />
    );
  })
