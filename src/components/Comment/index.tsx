import { ThumbsUp, Trash } from 'phosphor-react';
import { CommentContainer } from './styles';

export const Comment = () => {
  return (
    <CommentContainer>
      <img src='https://github.com/renanvilelati.png' alt='' />

      <div className='commentBox'>
        <div className='commentContent'>
          <header>
            <div className='authorAndTime'>
              <strong>Diego Fernandes</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
