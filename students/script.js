$(function () {

    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(currentCard) {
        currentCard.sort(function(a,b) {return 0.5 - Math.random()});
    
        function renderCards(cardArray) {
            var allCards = "";  

            cardArray.forEach(function(currentCard) {
                allCards += '<div class="card text-white bg-primary mb-3" style="width: 18rem;">';
                allCards += '<div class="card-body">';
                allCards += '<h4 class="card-text fullName">' + currentCard.fullName + '</h4>';
                allCards += '<p class="card-text missionStatement"> Motto: <br>' + currentCard.missionStatement + '</p>'; 
                allCards += '<a href="currentCard.githubUrl" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">GitHub</a><br>'; 
                allCards += '<a href="currentCard.portfolioUrl" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Portfolio</a><br>'; 
                allCards += '<a href="currentCard.email" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Email</a><br>'; 
                allCards += '</div>';
                allCards += '</div>';
            });
            return allCards;
        };
        var test = renderCards(currentCard);
        $('.mainBody').html(test);
    });
});

/*

to-do list:
make modal --> include full bio, linkedIn, showcase
make buttons that activate to links
make filter for search bar --> filter students

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

--

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Learn More! 
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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