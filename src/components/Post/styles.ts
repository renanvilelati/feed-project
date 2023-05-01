import styled from 'styled-components';

export const PostContainer = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  :nth-of-type(1) {
    margin-top: 0;
  }

  margin-top: 2rem;

  .content {
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;
  }

  .content p {
    margin-top: 1rem;
  }

  .content a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;
  }

  .content a:hover {
    color: var(--green-300);
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > header time {
    font-size: 0.875rem;
    color: var(--gray-400);
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .author img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
  }

  .authorInfo strong {
    display: block;
    color: var(--gray-100);
    line-height: 1.6;
  }

  .authorInfo span {
    display: block;
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;
