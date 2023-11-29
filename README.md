# BikeApp-Project
Bike App made with a personal API,made by Cristian Pulido, Tomás del Pino, Alexander Luque and Álvaro Polonio.
## To Run de Application
- Clone the repository to your spacework
- Execute `npm i` to install all the dependencies from node_modules
- Execute `ng serve -o` to run the application in http://localhost:4200/

## How To Use The Application
You can enter the app via existing users (found at the bottom of the Readme file) or by registering a new user.

As a user you can rent a bicycle by selecting the station where it is located.

Once the bicycle has been selected and its rental confirmed, a counter indicating the running time of your trip will show up in the navbar. By clicking on the counter you will be taken to a page where you can end your ride.
Once you have finished your ride, you must finalize the rental by selecting "end trip." Once the trip is finished, you will see a summary of your trip, such as travel time, trip cost, and other characteristics.

As a user you can visit your profile, checking your balance and your ride history. You can also add a card and it's pin to add to your balance.

Logging in as admin gives you access to the Admin Board, where you can consult issues, stations, travels and bikes. Some of these pages allow you to create new and edit entities.

## Endpoints
This app has multiple endpoints: <br>
-**ADMIN ISSUES PAGE** <br>
Get all, set as finished (PUT), delete issue and create a new issue (POST)

-**ACCOUNT PAGE** <br>
Get user details, set card (PUT), add balance(PUT) <br>

## Pre Loaded Users 
For admin priviliges login with USERNAME: admin, PASSWORD: admin1

For a normal user experience login with USERNAME: user1, PASSWORD: user1234

