import { Comment } from '../Comment';
import { Form, PostContainer } from './styles';

interface PostProps {
  avatar: string;
  name: string;
  content: string;
}

export const Post = ({ avatar, name, content }: PostProps) => {
  return (
    <PostContainer>
      <header>
        <div className='author'>
          <img className='avatar' src={avatar} alt='User picture' />

          <div className='authorInfo'>
            <strong>{name}</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:00'>
          Publicado há 1h
        </time>
      </header>

      <div className='content'>
        <p>Fala galeraa 👋</p>
        <p>{content}</p>
        <p>
          <a href='#'>#projeto</a> <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#reactjs</a>
        </p>
      </div>

      <Form>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </Form>

      <div className='commentList'>
        <Comment />
      </div>
    </PostContainer>
  );
};
