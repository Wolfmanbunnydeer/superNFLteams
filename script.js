//Following codes are for Games

document.getElementById("addGameButton").addEventListener("click", myFunction);

function myFunction() {
  let myGames = document.getElementById("games").value;

  // var NFL = document.createElement('NFL')
  var NFL = document.createElement("addGamesButton");
  NFL.innerHTML = [
    {
      City: "Arizona",
      Name: "Arizona Cardinal",
      Date: "March 7",
      AwayTeam: "Falcon",
      Hometeam: "Cardinals",
      Homepoint: "78",
      AwayPoint: "45",

      City: "Atlanta",
      Name: "Falcons",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Falcons",
      Homepoint: "23",
      AwayPoint: "8",

      City: "N/S Carolinas",
      Name: "Carolina Panther",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Panther",
      Homepoint: "45",
      AwayPoint: "8",

      City: "Chicago",
      Name: "Chicago Bears",
      Date: "March 7",
      AwayTeam: "Dallas Cowboys",
      Hometeam: "Chicago Bears",
      Homepoint: "78",
      AwayPoint: "8",

      City: "Dallas",
      Name: "Dallas Cowboys",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Dallas Cowboys",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Detroits",
      Name: "Detroit Lions",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Detroit Lions",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Jacksonville",
      Name: "Jacksonville Jaguars",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Jacksonville Jaguars",
      Homepoint: "90",
      AwayPoint: "87",

      City: "GreenBay",
      Name: "Green Bay Packers",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Green Bay Packers",
      Homepoint: "90",
      AwayPoint: "87",

      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87",

      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Minnesota",
      Name: "Minnesota Vikings",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Minnesota",
      Homepoint: "90",
      AwayPoint: "87",

      City: "New Orleans",
      Name: "New Orleans Saints",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New Orleans Saints",
      Homepoint: "90",
      AwayPoint: "87",

      City: "New York",
      Name: "New York Giants",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New York Giants",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Denver",
      Name: "Denver Broncos",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Denver Broncos",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Houston ",
      Name: "Houston Texan",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Houston Texan",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Miami ",
      Name: " Miami Dolphins ",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Miami Dolphins ",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Tennessee",
      Name: " Tennessee Titans",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Tennessee Titans",
      Homepoint: "90",
      AwayPoint: "87",

      City: "Buffalo",
      Name: " Buffalo Bills",
      Date: "March 7",
      AwayTeam: "Miami Dolphins",
      Hometeam: "Buffalo Bills",
      Homepoint: "90",
      AwayPoint: "87"
    }
  ];
  let fLen = NFL.length;
  let text = "<li>";
  for (let i = 0; i < NFL.length; i++) {
    text += NFL[i] + "<br>";
    for (var key in NFL) {
      console.log(key + " <li> " + NFL[key]);
    }
    function myFunction(value, index, array) {
      let myGames = (txt += value + "<br>");
    }
    document.getElementById("gamesOutput").innerHTML =
      "my Game is" + myGames + ".<br>";

    // Create an "li" node:
    const node = document.createElement("li");

    // p.textContent =  ["result"];
    textnode.appendChild(NFL);
    let li = document.createElement("li");
    li.innerHTML = "games is " + myGames + ".<br>";

    console.log(document.location);
    // Prints a Location object to the console
  }
}