# Project 4 - Day in the life


## Overview
Daily journaling meets Spotify Wrapped

---
## Project description
This Day in the life app will allow users to log daily journal entires as well as a daily pulse (score of 1-5). The goal is to encourage users to consitantly log thir entries through a summarized view showing a view of the following: 
1. Longest streak of entries 
2. Monthly view of daily pulse entries
3. Total number of entries

---
## Tech Required
* HTML/CSS
* JavaScript
* Python
* MongoDB
* Mongoose

---
## Wireframe
![Wireframe](https://github.com/nholliday314/Project-4/blob/main/Pictures/Wireframe.png)

---
## Brand Toolkit
![Brand Toolkit](https://github.com/nholliday314/Project-4/blob/main/Pictures/Brand%20Toolkit.png)

---
## Restful Routing Chart (Needs updating)
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

---
## User Stories
* AAU, I can view/add/edit/delete my journal entries
* AAU, I can view/add/edit/delete my daily pulse entries
* AAU, I can update my profile name and email
* AAU, I can view the total number of journal entries
* AAU, I can view the total number of daily pulse entries
* AAU, I can view the longest streak of journal entries
* AAU, I can view the longest streak of daily pulse entries

---
## MVP goals
* Home page 
    * Dashboard view
        * Total number of journal entries
        * Total number of daily pulse entries
* Journal page
    * Add/edit/delete page
* Daily Pulse page
    * Add/edit/delete page
* Edit Profile page


---
## Stretch Goals
* Allow users to see a monthly visualiztion of pulse entries by color




