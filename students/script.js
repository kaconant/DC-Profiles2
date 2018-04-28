$(function () {
    // creating the array
    var studentCardArray = [];

    // get call the json file + connect above array with sort function + appending information
    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(currentCard) {
        studentCardArray = currentCard.sort(function(a,b) {return 0.5 - Math.random()});
        var randomCard = renderCards(studentCardArray);
        $('.mainBody').html(randomCard);
    });

    // physical rep rendering information to page 
    function renderCards(cardArray) {
        var allCards = "";  

        cardArray.forEach(function(currentCard) {
            allCards += '<div class="card text-white bg-primary mb-3" style="width: 18rem;">';
            allCards += '<div class="card-body">';
            allCards += '<h4 class="card-text fullName">' + currentCard.fullName + '</h4>';
            allCards += '<p class="card-text missionStatement"> Motto: <br>' + currentCard.missionStatement + '</p>'; 
            allCards += '<a href="' + currentCard.portfolioUrl + '" class="btn btn-primary btn-lg active " role="button" aria-pressed="true">Portfolio</a><br>'; 
            allCards += '<a href="mailto:' + currentCard.email + '" class="btn btn-primary btn-lg active " role="button" aria-pressed="true">Email</a><br>'; 
            allCards += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="' + currentCard.id + 'Learn more about ' + currentCard.firstName + '"</button>';

            currentCard.showcase.forEach(function(show) {
                allCards += '<p class="showcase">' + currentCard.fullBio +'</p>'
                allCards += '<p class="showcase">' + currentCard.projectName +'</p>'
                allCards += '<p class="showcase">' + currentCard.url +'</p>'
                allCards += '<p class="showcase">' + currentCard.githubUrl +'</p>'
                allCards += '<p class="showcase">' + currentCard.description +'</p>'
                allCards += '<p class="showcase">' + currentCard.demoVideo +'</p>'
                allCards += '<p class="showcase">' + currentCard.linkedinUrl +'</p>'
            });
            
            

/*Modal
<div class="modal fade" id="' +  tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLongTitle"> + currentCard.firstName + </h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    ...
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Contact Student</button>
    </div>
</div>
</div>
</div>
*/


            
            allCards += '</div>';
            allCards += '</div>';
        });
        return allCards;
    };
    
    // will filter when search
    $(".search-button").on("click", function (e) {
        e.preventDefault();
        var searchBar = $(".search-bar").val();
        var finalSearch = studentCardArray.filter(function(currentCard) {
            return currentCard.fullName.toLowerCase().indexOf(searchBar.toLowerCase()) > -1;
        });
        var filterCard = renderCards(finalSearch);
        $('.mainBody').html(filterCard);   
    });
});

/*
to-do list:
make modal --> include full bio, linkedIn, showcase

--

id - dont use
firstName - dont use

fullName - card
missionStatement - card
portfolioUrl - card button
githubUrl - card button
email - card button

fullBio - mod
linkedinUrl - mod button
showcase (this one is an array of github projects) - mod
- githubUrl
- projectName
- url
- description
- demoVideo
*/