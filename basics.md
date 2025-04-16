- Chai aur backend

- 2 major components :
  A programming language and a database

- What is a Server?

- server is a software which serves
  backend development
  programming language
  database

- there is no such relation of node js
  with backend development ,
  node js : understand the run time of javascript
  and how much potential we unlock
  (file system and crypto)

- programming language : Javascript previously standalone nhi chal skti thi , but v8 node dino engine ki wajah se standalone chalti h , used in backend

- Backend development
- java : spring boot
- javascript
- php: laravel
- golang
- c++ : Crow framework

framewrok or library ka use hota h

Database:

kam sirf ye itna h kuch data aaya h , frontend se , uss data ki processing krwani h ( business logic apply krna ) , usko verify and analyse kroge and enters into database....

query ke basis pr processing krenge and retrieve the data from database and show on the frontend....

- mongo database
- mySQL database
- Postgress database
- Sqlite database

Framwork or library like mongoose , express ,

For the interaction with the database ORM , ODM like prisma , mongoose

Backend code mutliple machines pr deploy kiya ja skta h , that's where concept of load balancing comes in

Frontend se humare pass data ayega , username , password , agar passowrd username shi h ,with the help of functions , toh ek response mil jayega wrna dusra response mil jayega....

- Backend machines pr continously chalu h , and wo servers pr hi chalu rehti h and humne bahut saare functions likhe ...

- kisi ke URL ke visit pe / ya specific route pe konsa wala function call krana h , wo kaam h humara and wo function database se interact krega....... and send response in API format ( return value h more likely in JSON format , Array , Number , Boolean bhi ho skta h)

express for routing
mongoose for database side

--> Javascript based backend

handling

- Data ( String , object , number )
- File ( img , pdf , videos )
- Third Party API ( like google login , file upload on AWS ) : API aapas mein baat krte h

SMS Calls , Sending emails ( third party API se baat krte h ) , files upload download krna

file upload on server : file handle krna aagya

handling data

A javascript runtime Nodejs / Dino / Bun ( javascript run time environment hi toh h )

term - openJDK

Nodejs is a good library and knowledge about internals gives advantage but not necessary for backend

File Structure:

src directory
package.json ( to package libraries )
.env ( environment variables )
Readme , git , linting , prettier etc

index/main: entry point of application ( DB connect ) :

most of the backend likhenge , jaise hi application st huyi tab hum database connect krdete h ( usually in index file )

App : config , cookie , urlencode
Constants files ( enums , DB-name )

Directory structures:

- DB ( actual code jo database se connect krlete h / intialised database )

- Models ( Structure / Schema of data ) : data model

- Controllers or MVC models ( methods / functions for data inputs and processing )

- Routes

- Middlewares

- Utils ( utilities / aise functions or functionalities jo hum multiple jagah use krte h like sending mails , file upload )

