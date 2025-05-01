    //This is my first JavaScript code !
    console.log("Script loaded!");
    console.log('Hello world');

    //Variables in JS

    let naam = 'Tanushree';
    console.log(naam);

    // Can't use a reserved keyword for a variable
    //Should be meaningful
    //Can't start with a number
    //Can't contain space or hyphen
    //Are case sensitive

    //Constants in JS

    const interestRate = 0.8;
    console.log(interestRate);

    //Value is fixed, can't be reassigned

    //Primitive types of Variables - Strings, Numbers, Booleans, Undefined, Null

    let person = 'Tanushree Shaw'; // String Literal
    let age = 20; //Number Literal
    let isApproved = true; //Boolean literal
    let firstName = undefined; //undefined (when no value is assigned or specified to be undefined)
    let lastName = null; // null literal (to nulify the value or when the value is not assigned yet)

    //Relational types - Object, Array, Function

    // Object (An object is like a container that holds key–value pairs.)

    let individual = {
        person_name:'Tanu',
        age: 20
    };

    //Dot notation {Better choice}
    individual.person_name = 'Tanushree Shaw';

    //Bracket Notation
    individual['person_name'] = 'TSdebug';
    
    console.log(individual.person_name);

    // Array (An array is a list-like structure that stores ordered values (can be of any type — even other arrays or objects).)

    let selectedColors = ['red', 'pink', 'black'];
    console.log(selectedColors); // gives 3 item array as the new one is not added yet
    console.log(selectedColors[1]);

    selectedColors[3] = 'yellow';
    console.log(selectedColors[3]);
    console.log(selectedColors); // give 4 item array as the new one is added

    console.log(selectedColors.length);

    //Function (Functions are reusable blocks of code. A function literal defines the logic you want to perform.)

    //Types

    //Perfoming a task

    function greet() {
        console.log("Hello ! What's up ?");
    }
    greet();

    function greetings(name) { // parameter
        console.log("Hello " + name);
    }
    greetings("Human"); // arguement
    greetings("Mary"); // arguement

    function greeta(namee, last_name){
        console.log("Hello ! " + namee + ' ' + last_name);
    }
    greeta('Tanushree') // all parameters are not defined
    greeta('Tanushree', 'Shaw')

    // Calculating a value

    function square(number){
        return number * number;
    }
    let number = square(8);
    console.log(number);

    console.log(square(13));