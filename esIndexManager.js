var client = require('./connection');



    // create index
    exports.createIndex =  async (indexName) =>
    {
            client.indices.create({
                index: indexName
            },function(err,result){
                if(err){
                    console.log(err);
                }
                    console.log(result.statusCode);
            }) 
    }
    // // check if index exists
    function indexExists(indexName) 
    {
        return client.indices.exists({
            index: indexName
        }, (err, result) => 
        {
            console.log(result);
        })
    }

    // delete index by indexname
    exports.deleteIndex = async (indexName) =>
    {
        return client.indices.delete({index: indexName})
    }

    // add/update document
     exports.addDocument =async (indexName,_id,_docType,_payload) =>
    {
        client.index({
            index:indexName,
            id: _id,
            body: _payload
        }, function(err,resp){
            if(err){
                console.log(err);
            }else{
                console.log("added or updated", resp)
            }

        })
    }

    exports.deleteDocument =async (indexName,_id) =>
    {
        client.delete({
            index:indexName,
            id: _id,
        }, function(err,resp){
            if(err){
                console.log(err);
            }else{
                console.log("added or updated", resp)
            }

        })
    }


    exports.searchByPrefixItemName = async (indexName,from,limit,value) => 
    {
        client.search({
            index:indexName,
            from:from,
            size: limit,
            body:{
                query:{
                    prefix:{
                        "headline" : value
                    }
                }
            }
        },function(err,result){
            console.log(result.body.hits.hits)
        })
    }


    exports.searchByWildcardItemName = async (indexName,from,limit,value) => 
    {
        client.search({
            index:indexName,
            from: from,
            size: limit,
            body:{
                query:{
                    wildcard:{
                        "headline" : value
                    }
                }
            }
        },function(err,result){
            console.log(result.body.hits.hits)
        })
    }


    exports.searchByRegexpItemName = async (indexName,from,limit,value) => 
    {
        client.search({
            index:indexName,
            from:from,
            size: limit,
            body:{
                query:{
                    regexp:{
                        "headline" : value
                    }
                }
            }
        },function(err,result){
            console.log(result.body.hits.hits)
        })
    }

    exports.searchByMatchItemName = async (indexName,from,limit,value) => 
    {
        client.search({
            index:indexName,
            from:from,
            size: limit,
            body:{
                query:{
                    match:{
                        "headline" : value
                    }
                }
            }
        },function(err,result){
            console.log(result.body.hits.hits)
        })
    }


    

