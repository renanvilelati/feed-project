import { PostContainer } from './styles';

export const Post = () => {
  return (
    <PostContainer>
      <header>
        <div className='author'>
          <img
            className='avatar'
            src='https://github.com/renanvilelati.png'
            alt='User picture'
          />
          <div className='authorInfo'>
            <strong>Renan Vilela</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:00'>
          Publicado há 1h
        </time>
      </header>

      <div className='content'>
        <p>Fala galeraa 👋</p>
        <p>
          Estou fazendo um projeto de feed com react que está ficando muito
          legal 🚀
        </p>
        <p>
          <a href='https://github.com/renanvilelati/feed-project'>
            Feed Project
          </a>
        </p>
        <p>
          <a href='#'>#projeto</a> <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#reactjs</a>
        </p>
      </div>
    </PostContainer>
  );
};
