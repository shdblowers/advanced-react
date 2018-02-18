import DataApi from './DataApi';
import { data } from './testData.json';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const targetArticleId = data.articles[0].id;
    const targetArticleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(targetArticleId);
    expect(articles[targetArticleId].title).toBe(targetArticleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const targetAuthorId = data.authors[1].id;
    const targetAuthorFirstName = data.authors[1].firstName;

    expect(authors).toHaveProperty(targetAuthorId);
    expect(authors[targetAuthorId].firstName).toBe(targetAuthorFirstName);
  });
});
