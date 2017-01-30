# izitest

## Project

This test will show us that you can set up a simple React application and consume and manipulate data from a RESTful API.

If you have any questions, please feel free to contact us!

1.      Set up a github repository for the project, call it izitest
2.      Initialize a React application (use redux if you’re feeling spry but it’s not required)
3.      Use our endpoint which will return 10 memorials, and display the name and creation date of each memorial, sorted in order of creationDate. a. Endpoint: https://dev.requiemapp.com/public/memorial/random
4.      Create a button on the page that when pressed will switch the sorting on the list to last name of the decedent (name.last)
5.      Create a github repo and send us a link. Provide documentation in the readme file

## Installation
    [npm|yarn] install
    [npm|yarn] start

## Documentation

### actions.js

* Defines 4 action types as uppercase string literals.

 1. SORT\_BY\_FIRST\_NAME
 2. SORT\_BY\_LAST\_NAME
 3. SORT\_BY\_CREATION\_DATE
 4. UPDATE\_MEMORIALS

* Defines corresponding action creators.

## Thanks
Thanks to [IZI Mobile](http://izimobile.com/) for the project and usage of the endpoint.
