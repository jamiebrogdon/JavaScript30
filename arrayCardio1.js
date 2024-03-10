// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];



    // EXERCISE: Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // SOLUTION:
    // created a variable named 'fifteen' taking the 'inventors' string and creating a filter over it
    // created a function to loop through every item in the array with the parameter set as 'inventor'
    // created a if statement to see if the argument passing in fits the requirements
    // 'inventor' is the parameter of the function that is filtering through the array/var 'inventors'
    // '.year' is the object within the array 'investors' that we are needing to assess
    // how it works: it takes every inventor from 'inventors' and loops through the array to see if we will keep it or not after it passes through the conditional
    const fifteen = inventors.filter(function(inventor){
      if (inventor.year >= 1500 && inventor.year < 1600){
          return true;
      }
    });

    console.table(fifteen); 

    // another way to write this:
    const fifteen1 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));



    // EXERCISE: Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    // map takes in an array, and does something with it, and returns a new array with the same length
    // like a factory that takes in raw material and return the finished item 
    
    // SOLUTION:
    // created a varaible 'fullNames' that takes in the array/var 'inventors' that will filter through .map
    // created a arrow function with a parameter of 'inventor' that will retreive the '.first' & '.last' objects in the array 'inventors'
    // how this works: it is retreving the data from the array 'inventors' and returning the first & last name into the console.log

    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);
    


    // EXERCISE: Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // with the .sort method, you are essentially taking two options and sorting which is greater than the other item from an array

    // SOLUTION:
    // created a variable named 'ordered', taking the 'investors' array and creating a filter over it ( .sort )
    // created a function that will take in two parameters 'optionA' and 'optionB' //in "other" solution its 'a' & 'b'
    // this function loops through all the inventors from the array and sorts them by largest to smallest number
    // created an if statement to determine which year is 'oldest' and 'youngest'
    // if 'optionA' is greater than 'optionB' it goes to the top of the list - return 1 to place at top
    // if 'optionA' is less than 'optionB' it goes to the bottom of the list - return -1 to place at bottom

    const ordered = inventors.sort(function(optionA, optionB) {
       if(optionA.year > optionB.year) {
         return 1;
      } else {
        return -1;
       }
     });

    console.table(ordered);

    // another way to write this:
    // using a ternary operator - a short hand if statement

    const ordered1 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);



    // EXERCISE: Array.prototype.reduce()
    //  4. How many years did all the inventors live?
    // a reduce will allow you to build something upon the code?
    // could do a for loop, but this is a easier way to do this by using .reduce method

    // SOLUTION:
    // created a variable named 'totalYears' that contains the array 'inventors' that passes through the '.reduce' filter
    // created a function with the parameteres of 'accumulation' & 'inventorYears'
    // 'accumulation' is the total number of years, and the 'inventorYears' is the current years we calculating
    // created an equation inside the function that will first subtract the inventors & the year they passed from the year they were born
    // then keeping the accumulation running totaling it up outside the equation

    // my solution:
    const totalYears = inventors.reduce( (accumulation, inventorYears) => accumulation + (inventorYears.passed - inventorYears.year), 0  );
    console.log(totalYears)
    
    // the suggested function:
    const totalYears2 = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);

    console.log(totalYears);


    // EXERCISE:
    // 5. Sort the inventors by years lived
    
    // SOLUTION:
    // created a variable named 'oldest' that takes in 'inventors' array and filters them through the .sort method
    // created a function that takes in two parameters, 'a' & 'b'
    // inside the function, created two variable that take in 'a' inventor and subtracts the 'passed' & 'years' objects to calucate how long inventor a was alive for
    // same with inventor b ^
    // using a ternary operator to calcuate if the 'lastInventor aka a' was alive longer than 'lastInventor aka b' then return -1 if true and 1 if false
    const oldest = inventors.sort(function(a, b) {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return lastInventor > nextInventor ? -1 : 1;
    });
    console.table(oldest);



    // EXERCISE: //this currently isn't a working code, I believe everything has been updated since this was created on wiki & will need a different class
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // SOLUTION: 
    // we are going into this website and pulling data from the site
    // step 1: using the inspector tool, we will go into the console
    // click around in the console and as you hover over specific elements in the HTML, you'll see where they are targeting
    // continue down the long chain of clicks until you reach the specific element you're wanting to target 
    // in this case, its the 'link' on the wiki page for 'boulevards in paris'
    // now find links within the element '.mw-category'

    const category = document.querySelector('.mw-category-columns');
    const links = Array.from(category.querySelectorAll('a')); //must be an Array as opposed to just a variable otherwise it could return a node list
    const de = links //placing on their own lines below for readability
                 .map(link => link.textContent) //this will pull the text from the link as opposed to the link itself
                 .filter(streetName => streetName.includes('de'));

    console.log(category)



    // EXERCISE: 7. sort Exercise
    // Sort the people alphabetically by last name

    //SOLUTION:

    const alphabetical = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alphabetical);



    // EXERCISE: 8. Reduce Exercise
    // Sum up the instances of each of these

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    //SOLUTION:

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);
