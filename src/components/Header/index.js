import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2.svg';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Daniel Rosendo</strong>
              <Link to="profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Daniel Rosendo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
