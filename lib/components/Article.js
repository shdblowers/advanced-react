import React from 'react';
import style from '../styles/Article.scss';

const Article = ({ article, actions }) => {
  const author = actions.lookupAuthor(article.authorId);
  return (
    <div className={style.article}>
      <h1 className={style.title}>{article.title}</h1>
      <p>{article.date}</p>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <p className={style.body}>{article.body}</p>
    </div>
  );
};

export default Article;
