$(document).ready(function() {
    console.log("generating title")
    
    names = ["tiredness", "possibilities", "realities", "abstraction", "lust", "envy", "gluttony", "code", "lasagnas", "joints", "sadness", "wonder", "worlds", "universes", "kings", "kingdoms"]
    
    choice1 = Math.floor(Math.random()*names.length)
    choice2 = Math.floor(Math.random()*names.length)
    
    title = "ramblings of " + names[choice1] + " and " + names[choice2]

    rawTitle = title + "; onwards!"
    formattedTitle = title + "; <b>onwards!</b>"

    $("#blog-title-header").html(formattedTitle)
    $("#blog-title-footer").html(formattedTitle)
    document.title = rawTitle

    console.log("title: " + rawTitle)
});