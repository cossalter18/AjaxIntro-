$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    getTestData();
    $('#addPerson').on('click', addPerson)
} //end onReady

function addPerson() {
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: { // will become req.body
            name : 'Mike'
        }
    }).then(function(response){
        console.log(response);
        //DOM does not reflect array on server, do another GET
        getTestData();
    }).catch(function(error){
        alert('ERROR IN POST');
    })

}


function getTestData() {
    console.log('in getTestData');
    // AJAX GET call to /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then(function (response) {
        console.log('back from server with:', response);
        //append to DOM....
        appendToDom(response);
    }).catch(function( err){
        alert('problem! check console');
        console.log( err );
    }) // end ajax
} //end getTestData

function appendToDom(listOfPeople) {
    $('#personList').empty();
    for (let person of listOfPeople){
        $('#personList').append(`<li>${person}</li>`)
    }
    //target UL, add each person to DOM
  
}