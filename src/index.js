var ogs = require('open-graph-scraper');

const getResults =  async (siteUrl) => {
       //return promise so Used await
       const data = await ogs(
      { url: siteUrl}, // Settings object first
      function(er, res) { return res; }  // Callback 
        )
       

        if(data.success)
         {
          const title=data.ogTitle;;
          const descripttion=data.ogDescription;
          const image =[];
          const resObj ={};
         
          if(data.ogImage){
            image.push(data.ogImage.url)
          }
          if(data.twitterImage){
            image.push(data.twitterImage.url)
                    }
           //Convert object to JSON using JSON.stringfy()
          var myJSON = JSON. stringify({title,descripttion,image});
          return myJSON;   
          console.log(myJSON)  
            }
            else{
                 console.log(data)
                const { success,requestUrl,error,errorDetails}=data;
                //Convert object to JSON using JSON.stringfy()
                var myJSON = JSON.stringify({ success,requestUrl,error,Error});
                return myJSON;  
               }    
      
    
  };
  module.exports = getResults;
//getResults('http://www.amazon.com/')