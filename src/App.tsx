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
          <Post />
          <Post />
        </main>
      </ContentWrapper>
      <GlobalStyle />
    </>
  );
};

export default App;
