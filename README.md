#Local Weather

Provided a city zip code, return today's weather with options for 1, 3 and 5 day forecasts.

Group project created to explore OAuth providers via Firebase's options, and work with a weather forecast API.

###Requirements:
- Node.js https://nodejs.org/en/
- Installation of http-server via _npm install -g http-server_
- A Github account
- Your own fork of this repo
- A local clone of your fork of this repo
- Register your fork as a developer application: https://github.com/settings/developers
- An account on Firebase: https://www.firebase.com/
- New empty Firebase app
- In your Firebase app's login and auth page, enable Github authentication
- Copy the GitHub Client ID & GitHub Client Secret from your fork's developer application page into your Firebase app's Github authentication fields

###Post Cloning Your Fork Locally:
- Modify _javascripts/authentication.js_, replacing the Firebase URL with your own Firebase app's URL
- Inside the _lib_ directory:
  - Run _npm install_
  - Run _bower install_
- Inside the main repo directory:
 - Run _http-server_
 - Make note of the port number returned after running _http-server_
- Navigate to http://localhost:[your-port-number]
- Type in the zip code of a nearby city