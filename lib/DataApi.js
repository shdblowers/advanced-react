const mapIntoObject = array =>
  array.reduce((acc, x) => {
    acc[x.id] = x;
    return acc;
  }, {});

class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getArticles() {
    return mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
