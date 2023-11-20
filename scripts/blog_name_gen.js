$(document).ready(function() {
    console.log("generating name")
    names = ["tiredness", "possibilites", "realities", "abstraction", "lust", "envy"]
    choice1 = Math.floor(Math.random()*names.length)
    choice2 = Math.floor(Math.random()*names.length)
    title = "ramblings of " + names[choice1] + " and " + names[choice2]

    $("#blog-title").html(title)
    document.title = title

    console.log(title)
});