
# Feed Reader Testing

# Project Overview
In this project a web-based application that reads RSS feeds is given. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## What will I do?
Write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

# How I complete this project?
To complete this project, we write the following tests:
A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
A new test suite named `"The menu"`.
A test that ensures the menu element is hidden by default. 
A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
A test suite named `"Initial Entries"`.
A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
Write a test suite named `"New Feed Selection"`.
Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

