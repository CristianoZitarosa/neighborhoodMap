# Project: Neighborhood Map (React)

## __Fend Nanodegree__ - Building with React

### Brief introduction:

This is the final project (P8) of my FEND Nanodegree at Udacity.
The purpose of this last project is to use all tools, and together, learned during 6 months of course.

This application, created from scratch, basically consists of a browsable map and a few interesting locations identified by markers. A selected marker, if clicked returns some further details about the selected location.
It is possible to filter locations and the result will reflect on map's markers that will appear/disappear accordingly.

### Important notice:

This project is complete but the __Google Maps API key is removed and disabled__ so to test it you have to use your key.
I have removed mine and of course all the previous commits after the project has been approved from Udacity.
Replace the text `YOUR_API_KEY_HERE` in the file `./src/Components/App.js` with your key and remove the spaces around.

### Required functionalities:

* React;
* Responsiveness;
* Service Worker;
* Google Maps API;
* At least one non-Google third-party API;
    * API used: [Wikipedia: Mediawiki API](https://www.mediawiki.org/wiki/API:Main_page);
* Asynchronous API Requests;
* Accessibility.

### How to run this app:

Steps needed to run this application:
* Download/clone this project's repository from github;
* To have npm installed, [go here to download](https://www.npmjs.com/);
* After npm is installed open a terminal and `cd` into the project's folder (reach the path of the project into the terminal;
* In the terminal use the command `npm install` to install it in the project;
* To start the server in the terminal use the command: `npm start`;
* If everything is correct, your browser(**) will launch the application at: `http://localhost:3000`.

(**) *Please note, your browser could be not compatible with features on this project, please be sure to get it updated and to use a modern browser*.

### How to run this app in **production mode**:

To  test the Service Worker it is needed to run the app in **Production mode**:
* In the terminal use the command `npm run build`;
* Again use the command `npm install -g serve`;
* Finally `serve -s`;
* The app will be available at `http://localhost:5000`.

### Set the behavior of the server at the starting:

__If your wish is to open the application in the default browser, do not care of the following.__
As mentioned in the previous point, starting the server, the application will be automatically launched in the default browser.

If you wish to prevent this default behavior or to change the browser where the application is launched (*for example I used Chrome Canary for the development instead of my default browser*) please refer to the `.env` file in the root of the application.

Open it in the editor and choose an option.
At the moment both options are left commented (a commented string in the `.env` file is identified by the character `#`).
Leaving it unchanged, it will be followed the default behavior after the server is started.
If your wish is to use a different browser,find and insert the path to launch the browser on your system in place of the string `{INSERT_THE_PATH_HERE}`.


### License:

MIT License

Copyright (c) 2018 Cristiano Zitarosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
