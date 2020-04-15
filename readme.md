We'll be using express to setup servers.  We will install express via npm and use AJAX (part of jquery)
Basic steps:
    set up node/express
    set up basics for html/js/jq project:
    -create "server" folder with server.js
        - add start script package.json
        - spin up server
    -create "public" folder in "server" folder
    -create "scripts and "vendors" folders in "public"
    -create "index.html" in "public"
    -create "client.js" ij scripts
    -place jquery-x-x-x.min.js in "vendors"
    -in "server.js": set up express.static for server/public
    -test in browser
    -set up html+scripts as usual
    set up a GET route on server
    create a function to GET info from server
    use an AJAX request in this function using the following pattern:
```
$.ajax({
    type: 'GET',
    url: 'URLFORGETROUTE'
}).then (function ( response){
    CODE THAT RUNS IF SUCCESSFUL
    NOTE: response IS RESPONSE FROM SERVER
}).catch ( function(err ){
    CODE THAT RUNS IF UNSUCCESSFUL
    NOTE: err is the ERROR SENT FROM SERVER
    }) // end AJAX
```