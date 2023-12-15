function greetSomeone(person, timeOfDay) {
    if (person == "Count Dooku") {
        console.log("I'm coming for you, Dooku");
    }
    else {
        console.log("Good " + timeOfDay + ", " + person)
    }
}
greetSomeone("Anakin", "morning");
greetSomeone("Luke", "afternoon");
greetSomeone("Count Dooku", "evening"); 