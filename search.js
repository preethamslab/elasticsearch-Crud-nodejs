
var client = require('./connection');

const result = client.search(
    {
        index: 'news_headlines',
        body: {
        query:
        {
          match: {
              date:'2017-04-26'
          }
        }
    }
    }, (err, result) => {
        if(err) console.log(err);
        console.log(result.body.hits.hits);
    }
)  