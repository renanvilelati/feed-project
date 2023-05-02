import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from '../Comment';
import { Form, PostContainer } from './styles';
import { useState, FormEvent } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: string;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(['post muito bacana']);

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  };

  const deleteComment = () => {
    console.log('Deletar comentário');
  };

  return (
    <PostContainer>
      <header>
        <div className='author'>
          <img
            className='avatar'
            src={post.author.avatarUrl}
            alt='User picture'
          />

          <div className='authorInfo'>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className='content'>
        {post.content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href='#'>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <Form onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newComment}
          placeholder='Deixe um comentário'
          onChange={(e) => setNewComment(e.target.value)}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </Form>

      <div className='commentList'>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              OnDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </PostContainer>
  );
};
