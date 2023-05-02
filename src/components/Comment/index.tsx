import { ThumbsUp, Trash } from 'phosphor-react';
import { CommentContainer } from './styles';

interface CommentProps {
  content: string;
  OnDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, OnDeleteComment }: CommentProps) => {
  function handleDeleteComment() {
    OnDeleteComment(content);
  }

  return (
    <CommentContainer>
      <img src='https://github.com/maykbrito.png' alt='' />

      <div className='commentBox'>
        <div className='commentContent'>
          <header>
            <div className='authorAndTime'>
              <strong>Mayk Brito</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:00'>
                Há cerca de 1h
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </CommentContainer>
  );
};
