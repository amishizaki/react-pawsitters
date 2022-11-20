# PawSitters App

## OVERVIEW
Our application is designed to allow pet pawrents to easily and conveniently find pet sitting and dog walking services for their beloved furry (or scaly) friends. 
Additionally, users can also sign up to be a pet sitter or dog walker on our app, set their own schedule, rates, and preferences to make their experience as smooth and delightful as possible. Users are able to leave reviews for the sitters they hire on our platform to help other users find their perfect sitter!

### Link
-In Development- 

### Brought to you by The Flossing Avocados Team
* Alina Ishizaki - https://github.com/amishizaki
* Angel Zhou - https://github.com/angel-zh
* Melanie Silva - https://github.com/melsil11
* Sam Phillips - https://github.com/sam-phillips21

### Technologies Used

- React
- Django
- Python
- PostgreSQL
- CSS
- JavaScript
- HTML5
- Bootstrap

## USER STORIES

```
As a user, I want the ability to... 
- sign up, sign in, change password, and sign out
- find pet sitters
- hire a pet sitter
- list myself as a pet sitter by creating a pet sitter profile
- upload a profile photo
- edit and delete my pet sitter profile
- review a pet sitter
- edit and delete my review
- upload a photo in my review

```
## WIREFRAMES
![homepage](https://i.imgur.com/bFxJBSE.png)
![create](https://i.imgur.com/3J4847M.png)
![index](https://i.imgur.com/XypllTs.png)
![show](https://i.imgur.com/YmI2ScJ.png)

## ROUTES
 `auth`
|Verb| Path | Action | Description |
|--------| ---------|----------|-----|
|POST|/sign-in/|Create|Create account|
|POST|/sign-up/|Create|Login then redirect|
|DELETE|/sign-out/|Delete|Logout, then redirect to homepage |
|PATCH|/change-password/|Edit| Change password|

`petsitters`
|Verb|Path|Action|Description|
|---|---|---|---|
| GET | /petsitters/ | Index | Index of all pet-sitters |
| GET | /petsitters/:id/ | Show | Pet sitter’s homepage |
| POST | /petsitters/:id/ | Create | Create pet sitter|
| PATCH | /petsitters/:id/ | Edit  | Edit pet sitter |
| DELETE | /petsitters/:id/ | Delete | Delete pet sitter|

`reviews`
|Verb|Path|Action|Description|
|---|---|---|---|
| GET | /reviews/ | Index | Index of all user's reviews|
| GET | /reviews/:id | Show | Show a review|
| POST | /reviews/:id/ | Create | Create a review|
| PATCH | /reviews/:id/ | Edit  | Edit a review |
| DELETE | /reviews/:id/ | Delete | Delete a review|


## SCHEDULE
|Schedule||
|--------| -------------------|
| Monday | Planning and Pitch |
| Tuesday | Backend - Initial set up |
| Monday | Backend |
|Tuesday|Frontend - React  - Components etc|
|Wednesday|Frontend - React - Components etc|
|Thursday|Stretch Goals - deploy|
|Friday|Present|
|Saturday |Party!!!!|

### Back-up 
Pet Adoption Site

# django-pawsitters
# react-pawsitters
