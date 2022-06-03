const express = require('express')
const app = express() 
//app can now use all of the methods that comes with express

const PORT = 8000 //Use this variable for the listener

const rappers = {        //Using this object for JSON response
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph', 
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    //Step 1: Serve up a file when they go to your main page
    //      Note - It behaves just like an event listener!

    response.sendFile(__dirname + '/index.html')
    //Step 2: The server needs to know where to get this file
    //          This tells it to look at the current directory
    //          & serve up the index.html file in that directory

})

//Step 4: We just want to set up the API to respond with JSON
//          We're not concerned with client-side code
//          We just want to make an API that someone else can consume

app.get('/api/:name', (request, response) => {
    //Step 5: grab the name from the URL and display 
    //          that name's URL input using conditionals
    const rapperName = request.params.name.toLowerCase() 
    if (rappers[rapperName]){
        response.json(rappers[rapperName].birthName)
    } else
        response.json(rappers['unknown'])
})

//Step 3: You need to tell the server to listen now!
//          The "process.env.PORT" says use whatever port
//          the host site (Heroku in this case) wants to use 
//          OR use our hardcoded port (which is 8000 here)
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

