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

  .commentList {
    margin-top: 2rem;
  }
`;

export const Form = styled.article`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  > strong {
    line-height: 1.6;
    color: var(--gray-100);
  }

  textarea {
    width: 100%;
    background: var(--gray-900);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 0.25rem;
    color: var(--gray-100);
    line-height: 1.4;
    margin-top: 1rem;
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }

  :focus-within footer {
    visibility: visible;
    max-height: none;
  }

  button[type='submit'] {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: var(--green-500);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;

    transition: background-color 0.1s;
  }

  button[type='submit']:hover {
    background: var(--green-300);
  }
`;
