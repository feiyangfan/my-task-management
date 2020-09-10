## Project: my website

This is a simple website app I am trying to make. I will be building frontend, backend, and a datebase for it. Also try to deploy the website with a free host. I have no prior web development experiences and will be learning and recording useful things that I learned along the way.


## Features

1. **Homepage**: The homepage will display current time, date, and weather at the top. Also several display cards that display information from todo list and timetable.
2. **Weather card**: The app will detect user's geolocation(given permission), and display current weather and date at user's location. The user can also search for weather at other cities. 
3. **Todo list**: The user can add, delete, name/rename a todo list, also add, delete, and edit an event from a todo list. They can create multiple todo lists and each of them has multiple todo event.
4. **Timetable**: A timetable that the user can add new events at different timeslots, edit added events, and delete unwanted events.

## How to use
to be decided


## What I learned
* **Frontend**:
	1. dont save any sensitive infomation in the frontend because users can access them.
	2. **prop**: used to pass data between components, but can only pass down
	3. **state**: components will react and rerender based on **state**. **state** is dependent on components and can also only be passed down via **props**
	4. Use {} to add javascript code in jsx
	5. Use array.map() to map over elements and push out unique items
	6. Css flexbox 

* **BACKEND**:  
	1. save important keys and other infomation in .env file and using by installing dotenv package and call require("dotenv").config().

## Development logs

### Frontend  
* **Aug 12**:  
	1. Move old basic website into a seperate folder, re-initialize all website using **react**.

---
* **Aug 13**:   
	1. Partialy finished top nav bar, currently have logo on the left, main menus on the middle, and github link, about me on the right. Hover effect is added
	2. Need to implement: active effect.

---
* **Aug 24 - 26**:  
	1. Finished the top nav bar, active effect is done  
	2. Finished the sub nav bar, add a button on the right to add new item based on what page the brower is currently on  
	3. Started working on todo and home  

---
* **Aug 27 - 29**:  
	1. Finished Homepage card system
	2. Added **wheather** feature. The app will detect user's geolocation(given permission), and display current weather and date when first visiting the website. The user can later also search for weather at other locations. 

	**Weather demo**:  
<img src="./readme-assets/weather_demo.gif"	height="300px" alt="todo list demo">

---
* **Aug 30 - 31**:  
	1. Finished todo card system, the user can add todo cards.
	2. Finished todo list, the user can add new todos in each todo card.
	3. Add icons and add licences.txt  

	**Todo-list demo:**  
<img src="./readme-assets/todo.gif"	height="300px" alt="todo list demo">

---
* **Spet 1 - 5**:  
	1. Learning backend.
	2. Move weather API call into backend and hide the API key in the backend environment varibale file.
	3. Change Weather.js in frontend so that it uses POST method and send query info to backend and call weather API there, instead of using query info and fetch weather API in the frontend.
	4. Started to learn how to connect datebase to the website so that the todo list can be saved and won't disappear upon page refresh
