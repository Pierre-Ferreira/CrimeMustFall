import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NewUser from '../new_user.jsx';

storiesOf('users.NewUser', module)
  .add('default view', () => {
    return (
      <NewUser />
    );
  })
