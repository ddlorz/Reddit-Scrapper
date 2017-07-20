# Reddit Scrapper

Reddit scrapper is a scrapping application. It's purpose is to extract information about trending news in Reddit's worldnews section.

## URL

[Reddit Scrapper Link](https://calm-depths-92518.herokuapp.com/)

## Instructions

Users can save a title along with the link to the archives. Once a title is in the archive, any user can comment to it as well as delete any comment. Enjoy!

## Developer Comments

 - Express-session is used to store data in server-side
 - Lodash is used to merge array objects
 - Comments and titles are in separate collections, the reason is comments need a unique ID for manipulation
 - Title in Archive Schema is declared unique as to prevent duplicate titles
 - UUID is created as second form of unique ID. So far it's redundant to mongoose's ID but could be useful in future development
 - Request is used to make http calls and cheerio is used to process the response
 
 ## Dependencies
 
 - body-parser
 - cheerio
 - express
 - express-handlebars
 - express-sessions
 - lodash
 - mongoose
 - path
 - request
 - uuid
 
 ## Technologies
 
 - HTML
 - CSS
 - Javascript
 - MongoDB
 - Node
  
  ## Author
  
 DOMINGO LORIA
 <br />
 ddloria2016<span>@</span>gmail.com
 <br />
 <br />  
 _Copyright Domingo Loria 2017_

