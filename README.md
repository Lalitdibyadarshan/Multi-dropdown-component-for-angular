# Multi dropdown component for angular
 Multi dropdown is a plug n play component to add customized dropdown in your code. I have tried to create an alternative of Ui-select for angular with basic features.
 
 Steps to use the component
 ---------------------------
 
 1- Add the component in the angular app and register in app.module.ts.
 
 2- Add selector in the desired html where dropdown needs to be added.
 > <app-multi-dropdown title= 'Rays' [options]= 'option' [multiSelect] = 'true' (onSelection) = "onSelection($event)" ></app-multi-dropdown>
 
 | parameter |      type      | description |
 | --------- | -------------- | ----------- |
 |title      | string    |Label of the dropdown |
 |option     | array     |elements in the dropdown|
 |multiSelect| Boolean   |set true to enable multiselect and false to enable single select|
 
 #### Event
 ------
 onSelection - It is a event triggered when an option is selected to updated the value
