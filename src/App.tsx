import { Aside } from './components/Aside';
import { nanoid } from 'nanoid';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { ContentWrapper, GlobalStyle } from './styles/global';
import { PostType } from './components/Post';

export const App = () => {
  const posts: PostType[] = [
    {
      id: nanoid(),
      author: {
        avatarUrl: 'https://github.com/renanvilelati.png',
        name: 'Renan Vilela',
        role: 'Web Developer',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Estou fazendo um projeto de feed com react que está ficando muito legal 🚀',
        },
        { type: 'link', content: 'Repositório do Projeto' },
      ],
      publishedAt: new Date('2023-05-02 10:00:00'),
    },

    {
      id: nanoid(),
      author: {
        avatarUrl: 'https://github.com/jakeliny.png',
        name: 'Jakeliny Gracielly',
        role: 'Web Developer',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Ontem fiz um curso de TypeScript e só tenho a agradecer tanto conhecimento 😍',
        },
      ],
      publishedAt: new Date('2023-05-01 15:00:00'),
    },
  ];

  return (
    <>
      <Header />

      <ContentWrapper>
        <Aside />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </ContentWrapper>
      <GlobalStyle />
    </>
  );
};

export default App;
