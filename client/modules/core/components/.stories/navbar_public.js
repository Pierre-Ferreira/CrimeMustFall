import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NavbarPublic from '../navbar_public.jsx';

storiesOf('core.NavbarPublic', module)
  .add('default view', () => {
    return (
      <NavbarPublic />
    );
  })
