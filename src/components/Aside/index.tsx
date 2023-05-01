import { AsideContainer, Profile } from './styles';
import { PencilLine } from 'phosphor-react';

export const Aside = () => {
  return (
    <AsideContainer>
      <img
        className='cover'
        src='https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=20'
      />

      <Profile className='profile'>
        <img
          className='avatar'
          src='https://github.com/renanvilelati.png'
          alt='User picture'
        />
        <strong>Renan Vilela</strong>
        <span>Web Developer</span>
      </Profile>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </AsideContainer>
  );
};
