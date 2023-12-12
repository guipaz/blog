$(document).ready(function() {
    console.log("generating title")
    
    names = ["tiredness", "possibilities", "realities", "abstractions", "lust", "envy", "gluttony", "games", "code", "lasagnas", "joints", "sadness", "wonder", "worlds", "universes", "kings", "kingdoms", "queens", "titles", "dwarves", "fortresses", "melancholy", "paradigms", "conundrums", "dilemmas", "humanity", "life", "death", "meaning", "42s", "singularity", "conscience", "unconsciousness", "time"]
    
    choice1 = Math.floor(Math.random()*names.length)
    choice2 = Math.floor(Math.random()*names.length)
    
    title = "ramblings about " + names[choice1] + " and " + names[choice2]

    rawTitle = title + "; onwards!"
    formattedTitle = title + "; <b>onwards!</b>"

    $("#blog-title-header").html(formattedTitle)
    $("#blog-title-footer").html(formattedTitle)
    //document.title = rawTitle

    console.log("title: " + rawTitle)
});