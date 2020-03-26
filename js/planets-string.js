(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");

    console.log("String to an array:");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    var planetsWithBR = planetsArray.join("<br>");

    console.log("planets with break tags:");
    console.log(planetsWithBR);


//
// * BONUS:
//         * Create another string that would display your planets in an undordered
//     * list. You will need an opening AND closing <ul> tags around the entire
//     * string, and <li> tags around each planet.
// //     */
  var planetsUnorderedList =  planetsArray.join("<ul>" + "<li>" + "</li>" + "</ul>");

   console.log("Unordered List Array");
   console.log(planetsUnorderedList);
//
//

    var planetsUL = "<ul><li>";
    planetsUL += planetsArray.join("</li><li>");
    planetsUL += "</li></ul>";
    console.log(planetsUL);
    document.write(planetsUL);

})();
