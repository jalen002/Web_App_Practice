# Web App Practice
## Description
<p>You can view all the teams in the National Football League in the table on the home screen. If the user wants to filter the teams in the table, they may use the search box in the nav bar. They may click on the table row of any team to select the team.Once a team has been selected, the user may either view the teams roster or schedule by clicking the buttons below the team logo. </p>

<p>The user may also search all the players on all teams by clicking on the search link in the nav bar. That will take the user to a route where they may search by: Name, Number, Age, Position, Height, Weight, College, Experience. That will then search all the rosters on all the teams and return any players that meet the search criteria. </p>

## Demo
<h5>To view live demo [click here](https://jalen002.github.io/Web_App_Practice)</h5>
<p>*Note: Does not load properly in Internet Explorer 8 and under</p>

<br/>
## Technical Information
This web application uses routes to make a single page app appear to have multiple pages.
A controller has been made for each html view.
I use a main service for application-wide data and my ajax calls.

1. Data structures used:
    * Array filled with JSON objects
2. Javascript libraries used:
    * jQuery
    * AngularJS
    * Bootstrap
    * Angular Material
3. Followed MVC architecture
4. Loading up teams, rosters and schedules data through ajax calls to ```.json``` files
</body>
