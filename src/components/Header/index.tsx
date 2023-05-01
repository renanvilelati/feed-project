import { HeaderContainer } from './styles';

import igniteLogo from '../../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt='Logo Ignite' />
    </HeaderContainer>
  );
};
