
// place contents of div in variable
var sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near."

// find and output the starting position of the word "orphans".
let orph = sonnet.indexOf("orphans");
console.log(orph);

// output the number of characters in the sonnet.
console.log(sonnet.length);

// replace the first occurance of the string "winter" with "yuletide".
let newSonnet = sonnet.replace("winter ", "yuletide ");
console.log(newSonnet);

// replace all occurances of the string "the" with "a large".
let newerSonnet = newSonnet.replace(/the /g, "a large ");
console.log(newerSonnet);

// set the content of the sonnet div with the new string.
document.getElementById("sonnet").innerHTML = newerSonnet;

