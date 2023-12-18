# Project 4 - Day in the life

This project will be my first adventure into building a full-stack application. I'll be building a Node/Express/MongoDB app from the ground up.

## Project Idea and description
While training for races, it's important to plan accordingly, whether it's a 5k or a full marathon. This running planner will allow the end user track and train for upcoming races by doing the following:
1. Find and join upcoming races and their relavent information (distance, date, location, sign up info)
2. Create race training plan by scheduling and tracking weekly runs
3. End users will be able to also view who has favorited or joined a race



## Tech Required
* HTML/CSS
* JavaScript
* Python
* MongoDB
* Mongoose


## ERDs
![ERD](https://github.com/nholliday314/Project-2/blob/main/ERD.drawio.png?raw=true)


## Restful Routing Chart
| HTTP METHOD (_Verb_) | URL (_Nouns_) | CRUD | Response | Notes |
| -------------------- | ------------- | ---- | -------- | ----- |
| `Runners`            |               |      |          |       |
| GET                     | /runners              | READ     | array of runners         |       |
| GET                     | /runners/:runnerId              | READ     | single runner with id of :runnerId         |       |
| POST                     | /runners             | CREATE     | add runners to list         |       |
| PUT/PATCH                     | /runners/:runnerId              | UPDATE      | update runner with id of :runnerId         |       |
| DELETE                     | 	/runners/:runnerId              | DESTROY     | delete runner with id of :runnerId         |       |
| `Races`              |               |      |          |       |
| GET                     | /races              | READ     | array of races         |       |
| GET                     | /races/:raceId              | READ     | single races with id of :raceId         |       |
| POST                     | /races              | CREATE     | 	add races to list         |       |
| PUT/PATCH                     | /races/:raceId              | UPDATE     |  update races with id of :raceId        |       |
| DELETE                     | /races/:racesId              | DESTROY     | 	destroy book with id of :raceId         |       |
| DELETE                     | 	/races/:raceId/runners/:runnerId             | UPDATE     | remove the race with an id of :raceId from the runner with an id of :runnerId         |       |
| `Running Plan`              |               |      |          |       |
| GET                     | /runningPlan            | READ     | array of running plans         |       |
| GET                     | /runningPlan/:runnerId              | READ     | single running plan with id of :runningPlanId         |       |
| POST                     | /runningPlan              | CREATE     | add runners to list         |       |
| PUT/PATCH                     | /runningPlan /:runningPlanId               | UPDATE      | update runner with id of :runningPlanId          |       |
| DELETE                     | 	/runningPlan /:runningPlanId               | DESTROY     | delete runner with id of :runningPlanId          |       |

## Wireframes of all user views
![Home Page](https://github.com/nholliday314/Project-2/blob/main/wireframe/home.png?raw=true)



## User Stories
* AAU, I can view 
* AAU, I can
* AAU, I can
* AAU, I can
Users can view, favorite, and join races
* Users can see who has favorited and joined races
* Users can view, add, edit running plans by run type, distance, pace, and specific detals


## MVP goals
* Have a home page displaying the following
    * Upcoming Races
    * Running Plans
* Have a seperate page for both races and running plans
* Allow users to add and edit both races and running plans


## Stretch Goals
* Connect racing API to allow user to add races 
* Allow users to comment on races
* Include calendar view of races and running plans




