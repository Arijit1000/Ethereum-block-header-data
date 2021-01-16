# Ethereum-block-header-data
This app will pull data of the most recent Ethereum Block Header via Infura, Display the data, and parse the Data via JSON to the MongoDB.

<h5># npm i --save

<h5># You must have Mongdb up and running on your machine before you run node index.js

<h5># in the Dir run the command node index.js

<h5># open your web browser and go to "http://localhost:8545/"

<h5># the current web page should load with 2-buttons. A "Get Data" button and a "Post Data" button. You must click the Get Data button first. Verify in your terminal that the Ethereum Block Header Data was displayed. Then you click the Post Data button. If successful, the web page should display "Block Data saved to database!!" along with in your terminal window should also show a console.log "resultData: 'Post Data'"

<H5># Now if the post was succesful in your MongoDB you should have the block Scheama appear and in the collections folder should be a "block" where the ethereum block header data was posted.

<h6> I used Robo 3T for its nice UI to view my Database to confirm the data was in fact stored.
