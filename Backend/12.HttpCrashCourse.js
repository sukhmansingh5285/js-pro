/*
Http (hyper text transfer protocol, clear test mai jata hai eg-> abc bheja hai toh abc hi jayega)  
Https(protocol ka difference hai , one more layer to encrypt, eg-> with a key, xoring it, so in between it's not readable) 
*/

/*
->URL, URI, URN (address) 
->http is only a type of prootocol like many
*/

/*
HTTP Headers
    http headers are metadata(key-value pairs(eg-> name:Sukhman) sent along request, response)
    what do headers do-> 1)Caching(ye request abhi aayi thi, toh check it in the cache weather we can use )
                         2)Authentication (auth headers to check bear token, refresh token, session token)
                         3)Manage state(user's state(logged user, guest user, is there something in the cart))
      Note -> pre around 2012, x-prefix was used with the headers. 
    Some types of headers:-
      1)Request Headers -> Data that come from the client
      2)Response Headers -> Data that come from the server
      3)Representation Headers -> Headers that tell us our data is in which encoding or compression
      4)Payload Headers -> data
    Most common headers -> Accept : application/json
                           User-Agent : we can get a lot of information of user
                           Autorization : Bearer 
                           Content-Type : pdf,img,....
                           Cookie : 
                           Cache-Control
                        CORS
                          Access-Control-Allow-Origin
                          Access-Control-Allow-Credentials
                          Access-Control-Allow-Method
                        Securtiy
                          Cross-Origin-Embedders-Policy
                          Cross-Origin-Opener-Policy
                          Cross-Security-Policy
                          X-XSS-Protection
*/

/*
HTTP Methods
 
 Basic set of operations that can be used to internet with server

    1)Get-> Retrieve a resource
    2)Head-> No message body(response headers only)
    3)Options-> what options are available
    4)Trace-> Loopback test (get same data)
    5)Delete-> remove a resource
    6)Put-> Replace a resource
    7)Post-> interact with resource (mostly add)
    8)Patch-> Replace part of a resource
*/

/*
HTTP Status Code
  1xx -> Informational
  2xx -> Success
  3xx -> Redirection
  4xx -> Client Error
  5xx -> Server Error

  100(Continue), 102(Porcessing)
  200(OK), 201(Created), 202(Accepted) 
  307(Temporary Redirect), 308(Permanent Redirect)
  400(Bad Request), 401(Unauthorized), 402(Payment required), 404(Not Found)
  500(Internal Server Error), 504(Gateway Time Out)


*/