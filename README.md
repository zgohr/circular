# Angular Foundation Kinvey Seed Project

* [AngularJS](http://angularjs.org/)
* [Flat UI](http://designmodo.github.io/Flat-UI/)
* [Firebase](https://www.firebase.com/)
* [GruntJS](http://gruntjs.com/)

Clone the repository recursively. Angular, Flat-UI, and angularFire are submodules of this repository. This makes it extremely easy to get update versions of all of them.

CD into the ```angular/``` directory and Grunt it. This will build all necessary files into the ```angular/build``` directory. Now when you Grunt the root directory, it will copy down files to the app. This will also start up the local server, the same as ```grunt serve``` will.

In the controllers file, ```app/js/controllers.js``` you will need to set the ref variable for your Firebase application.
