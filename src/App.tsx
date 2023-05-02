import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { ContentWrapper, GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <Aside />
        <main>
          <Post
            avatar='https://github.com/renanvilelati.png'
            name='Renan Vilela'
            content='Estou fazendo um projeto de feed com react que está ficando muito legal 🚀'
          />
          <Post
            avatar='https://github.com/jakeliny.png'
            name='Jakeliny Gracielly'
            content='Ontem fiz um curso de TypeScript e só tenho a agradecer tanto conhecimento 😍'
          />
        </main>
      </ContentWrapper>
      <GlobalStyle />
    </>
  );
};

export default App;
