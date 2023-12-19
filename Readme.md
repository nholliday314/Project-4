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
* MongoDB
* Mongoose

---
## Sprint Schedule
* 12/17 - Complete project planning 
* 12/18 - Complete all pages and journaling functionality
* 12/19 - Complete daily pulse funtionality and home page dashboard
* 12/20 - Complete final CSS styling
* 12/21 - Presentation prep and demo

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
| `users`            |               |      |          |       |
| POST                     | /users/signup              | CREATE     | Create a new user account.         |       |
| POST                     | i/users/login             | CREATE     | Log in an existing user.        |       |
| GET                     | i/users/logout     | Log out the current user.         |       |
| GET                     | /users/:id              | READ      | Retrieve user information.         |       |
| PUT                     | 	/users/:id              | UPDATE     | Update user information.       |       |
| `journal-entries`              |               |      |          |       |
| GET                     | /journal-entries            | READ     | Retrieve all journal entries for the logged-in user.       |       |
| GET                     | /journal-entries/:id              | READ     | Retrieve a specific journal entry by ID.         |       |
| POST                     | i/journal-entries              | CREATE     | 	Create a new journal entry.         |       |
| PUT/PATCH                     | /journal-entries/:id             | UPDATE     |  Update a specific journal entry by ID.       |       |
| DELETE                     | /journal-entries/:id              | DESTROY     | 	Delete a specific journal entry by ID.        |       |
`pulse-response`              |               |      |          |       |
| GET                     | /pulse-responses           | READ     | Retrieve all daily pulse survey responses for the logged-in user.        |       |
| GET                     | /pulse-responses/:id              | READ     | Retrieve a specific pulse response by ID.        |       |
| POST                     | /pulse-responses            | CREATE     | Create a new daily pulse survey response.        |       |
| PUT/PATCH                     | /pulse-responses/:id              | UPDATE      | Update a specific pulse response by ID.         |       |
| DELETE                     | 	/pulse-responses/:id             | DESTROY     | Delete a specific pulse response by ID.         |       |

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




