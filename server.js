var client = require('./connection.js');


client.cluster.health({},function(err,resp, status){
    console.log('-- client health -- ', resp.statusCode);
})




// const result = client.search(
//     {
//         index: 'news_headlines',
//         body: {
//         query:
//         {
//           prefix: {
            
//               headline:'murkha'
//           }
//         }
//     }
//     }, (err, result) => {
//         if(err) console.log(err);
//         console.log(result.body.hits.hits);
//     }
// )   





