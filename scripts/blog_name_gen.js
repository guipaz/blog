$(document).ready(function() {
    console.log("generating name")
    names = ["tiredness", "possibilites", "realities", "abstraction", "lust", "envy", "gluttony", "code", "lasagnas", "joints", "sadness", "wonder"]
    choice1 = Math.floor(Math.random()*names.length)
    choice2 = Math.floor(Math.random()*names.length)
    title = "ramblings of " + names[choice1] + " and " + names[choice2]

    $("#blog-title-header").html(title)
    $("#blog-title-footer").html(title)
    document.title = title + " - onwards!"
});