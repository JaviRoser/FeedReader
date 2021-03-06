/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
   /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   describe('RSS Feeds', () => {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('are defined', () => {
         expect(allFeeds).toBeDefined();
         expect(allFeeds.length).not.toBe(0);
      });
      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("has an URL defined and not empty", () => {
         for (let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
         }
      });
      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it('has a name defined and not empty', () => {
         allFeeds.forEach((feedName) => {
            expect(feedName.name).toBeDefined();
            expect(feedName.name.length).not.toBe(0); //Not Empty
         })
         // for (let feedName of allFeeds) {
         //    expect(feedName.name).toBeDefined();
         //    expect(feedName.name.length).not.toBe(0); //Not Empty
         // }
      });
   });
   /* TODO: Write a new test suite named "The menu" */
   describe('Menu element', () => {
      let menuHidden;
      let menuClicked
      beforeEach(() => {
         menuHidden = document.querySelector('body');
         menuClicked = document.querySelector('.menu-icon-link');
      });
      /* A test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
      it(' is hidden by default', () => {
         expect(menuHidden.classList.contains('menu-hidden')).toBe(true);
      })
      /* A test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it('changes visibility when clicked', () => {
         //Menu Visible
         menuClicked.click(); //Simulate a click event
         expect(menuHidden.classList.contains('menu-hidden')).toBe(false);
         //Menu Hidden
         menuClicked.click();
         expect(menuHidden.classList.contains('menu-hidden')).toBe(true);
      })
   })
   /* "Initial Entries Test Suite" */
   /* A test that ensures when the loadFeed
    function is called and completes its work*/
   describe('Initial Entries:', () => {
      beforeEach((done) => {
         loadFeed(0, done); //Loads Udacity Blog Feeds before checking the entries in test
      })
      //      * A test to see if there is at least a single .entry element within the .feed container.
      //      * loadFeed() is asynchronous so this test will require
      //      * the use of Jasmine's beforeEach and asynchronous done() function.
      it(' ensures allFeeds array has at least one entry element ', () => {
         expect(allFeeds.length).toBeGreaterThan(0);
      })
      it(' at least a single entry within the feed container', () => {
         feedsEntry = document.querySelector('.feed').children
         expect(feedsEntry).toBeDefined();
      })
   });
   /* "New Feed Selection Test Suite" */
   describe('New Feed Selection:', () => {
      let feedOne, //Udacity Blog feeds
         feedTwo; //CSS Tricks feeds
      beforeEach((done) => {
         loadFeed(0, () => { //loadFeed(0)--> Loads the feeds for the Udacity Blog
            feedOne = document.querySelector('.feed').innerHTML;
            loadFeed(1, () => { //loadFeed(1)--> Loads the feeds for CSS Tricks
               feedTwo = document.querySelector('.feed').innerHTML;
               done(); //Finish loading the two feeds
            })
         })
      })
      /* A test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      it(' the content has changed', () => {
         /*Compare HTML inner content between feedOne and feedTwo if 
         they are not equal the feed has changed*/
         expect(feedOne).not.toBe(feedTwo);
      })
   });
}());