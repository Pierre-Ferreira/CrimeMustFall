import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MyContactList from '../my_contact_list.jsx';

storiesOf('core.MyContactList', module)
  .add('default view', () => {
    return (
      <MyContactList />
    );
  })
