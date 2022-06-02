# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


### 1. What is `this` in JavaScript?

  Your answer:
  >"this" when referring to objects within the scope of a component refers to methods and the state object. We have used the syntax "this" to refer to the state object and by appending .state.(key) to access the value or .(method-name) to reference the method.

  Researched answer:
  > "this" , when used in an object, refers to the object itself. As I have mentioned before, we are familiar with this concept because of the state object and component methods. However, we have not gone into detail about when "this" refers to the global object. "this" when used alone or within a function, refers to the GLOBAL OBJECT. The GLOBAL OBJECT is an object within the global scope. For our purposes, the global scope is usually referring to the web page where all our code is being executed. The global object contains all the variables and functions (built in) that are available to us at any time. This is why when we use the keyword var to declare a variable, it becomes available anywhere within the .js file we work in. This is why we tend to use const and let instead of var because it prevents us from accidentally manipulating it within a function and creating problems down the road. Also functions declared with the "function" keyword also becomes a property of the global object.
  
  >https://javascript.info/global-object
  https://developer.mozilla.org/en-US/docs/Glossary/Global_object
  https://developer.mozilla.org/en-US/docs/Glossary/Global_scope
  https://developer.mozilla.org/en-US/docs/Web/API/Window


### 2. What is React? Why would you use it?

  Your answer:
  >React is a JavaScript library, a compilation of various files and scripts ready to be used. Throughout the course, we have used JSX to tailor the user experience when developing web apps. This allows us as developers to create components that incorporate HTML elements as arguments.

  Researched answer:
  >Before researching, I had a hard time understanding what a library in programming was. A library refers to "files, programs, routines, scripts, or functions" that are made available for the user to easily access and not worry about working from scratch every time. Many of these pre-written codes are there because these actions tend to be repeated multiple times regardless of what kind of code is being written. So React saves us a lot of time by reducing the amount of syntax we need to learn. A great example can be seen on this blog post: <a href="https://www.telerik.com/blogs/how-jsx-react-works-under-hood#:~:text=React%20reads%20these%20objects%20and,data%20on%20a%20React%20element."> How JSX(React) Works Under the Hood</a>.

  >https://reactjs.org/
  https://www.computerhope.com/jargon/l/library.htm#:~:text=1.,programmers%20behind%20the%20programming%20language.
  https://en.wikipedia.org/wiki/Library_(computing)

### 3. Which lifecycle method is required in a React class component?

  Your answer:
  >We require a render method. Without it, nothing would be visible. The render method falls into both the mounting and updating phases of the component lifecycle. The render will display the state of the object when initialized and will render again as the state is updated. Although we would only use it once in the component, the way the state changes will determine how many times the render is invoked.

  Researched answer:
  >We need to dig a bit deeper into what the React component lifecycles are. The mounting phase refers to adding nodes to the DOM. All those wonderful components we made need to be initialized. The update phase is where we show all the changes happening. Without this phase, the page would remain static. The unmounting phase is where we remove all the components from the DOM. The render is REQUIRED because when mounting, it needs to show the initial state and as the lifecycle enters to the updating phase, it needs to be able to reflect all the changes going on such as user interactions with the webb app. The render() method can read the state and props and return it to the root component. The root element is the DOM node that React manages. If the user cannot interact with the web app, then why did we make it in the first place? 


  >https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
  https://www.geeksforgeeks.org/explain-the-purpose-of-render-in-reactjs/#:~:text=Purpose%20of%20render()%3A&text=The%20purpose%20of%20the%20function,root%20component%20of%20our%20app.
  https://reactjs.org/docs/rendering-elements.html


### 4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer:
  >JSX is a hybrid language of JavaScript and HTML required for REACT. One I can think off the top of my head is how attributes are defined in the tags. For example, in JSX attribute names are camelCased whereas in HTML, they have different naming conventions due to overlapping keywords. 
  >#### JSX 
  >>`<div className = "container"></div>` 
>
  >#### vs 
>
  >#### HTML 
  >>`<div class ="container"></div>`. 
  >
  >However that is a minor considering you can use JSX to treat HTML elements and inner html as a single value and use methods on them. No React would require that you keep the JavaScript separate from the HTML.

  Researched answer:
  >Some of the big differences between HTML and JSX is that the return must have a single parent element. This is why we wrap all of our returns with a JSX fragment. I failed to elaborate on how JSX incorporates JavaScript and HTML in my own answer. In HTML, the logic (JavaScript) needs a script tag or an entirely separate JavaScript file. In JSX, we can use {} and place our JavaScript inside. Tags can self close in JSX although the article recommends that we do not do that. We used these self closing tags in our own components to make component calls within our render!

  >https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/#:~:text=HTML%20is%20a%20very%20important,a%20syntactic%20sugar%20for%20React.


### 5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
  >Yarn, like npm, npx, etc... is a package manager. It allows projects requiring many dependencies to be automatically assembled so we don't have to manually look for all the dependencies. When creating a react-app , the sheer number of files within the node_modules would make it impractical to manually search for all dependencies and ensure that every app or project maintains consistency. When creating a new react-app, the package manager also provides many boilerplate components and files such as App.js, App.css, index.html, etc.. to let us get to the programming part of web development.

  Researched answer:
  > My answer was a bit convoluted and only referenced some specific things it did only in relation to the small projects we have done. Package managers as a whole automates a lot of various tasks such as installing/uninstalling and updating programs or configuring them for certain needs. These package managers can also check the authenticity of all these files and ensure that the program/project that we need will deploy.
  - find
  - verify
  - download
  - install
  - update
  - uninstall

  >https://en.wikipedia.org/wiki/Package_manager
  https://www.freecodecamp.org/news/javascript-package-manager-npm-and-yarn/

### 6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:
  >These are functions that do not have names. These functions can be passed as arguments to higher order functions. We see examples of this when we use the onClick method. The anonymous function is passed to the onClick method as an argument and the code is executed.

  Researched answer:
  >Anonymous functions can be defined without a name:
  ```
  (function(){
    return "No name :( "
  }
  var nameless = function() {
    return "No name :( "
  }
  ```
  >As you can see, we stored the function within the variable. These functions are not accessible once it has been initialized. We can access the function by the variable we assigned it to. In ES6 the arrow function lets us declare anonymous functions without using the function() keyword. So in retrospect, all the functions we made in class have been anonymous functions.

  >https://www.javascripttutorial.net/javascript-anonymous-functions/
  https://www.geeksforgeeks.org/javascript-anonymous-functions/
  https://stackoverflow.com/questions/60715044/what-is-the-difference-between-anonymous-function-and-function-expression-in-jav

## Looking Ahead: Terms for Next Week

1. Conditional rendering:
>Conditional rendering is just the React way of saying Javascript conditionals. This can determine what to render given the current state of the object. An example, in the React documentation, is that of the login and logout button. Depending on the login status of the user, the page will render either a login button if the user is logged out, or a logout button if the user is logged in.

>https://reactjs.org/docs/conditional-rendering.html

2. Object-oriented programming:
>This is a model of how programs are made these days. The software is designed around objects, rather than logic. Many OOP languages are class based (like JavaScript and Ruby) meaning that the object itself is an instance of a class. We learned that classes are the blueprints for objects that contain all the data and methods that the object will be initialized with. This is why we can use built in methods at all in the first place. The Object Class is the super class of every other class that we work with in JavaScript. All properties are inherited from this singular class.
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

>https://en.wikipedia.org/wiki/Object-oriented_programming
>https://runestone.academy/ns/books/published/csawesome/Unit9-Inheritance/topic-9-7-Object.html#:~:text=The%20Object%20class%20is%20the,inherit%20from%20the%20Object%20class.
https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP

3. Ruby:
> Ruby is an object-oriented scripting language made by Yukihiro Matsumoto in the 1990s. Scripting means that the language itself does not directly communicate with the hardware. 

>https://acloudguru.com/blog/engineering/what-is-the-ruby-programming-language

4. Ruby blocks:
>These are anonymous functions. Just like other anonymous functions, these can be passed as arguments to other higher order functions. Just like in JavaScript, a lot of the similar methods exist and can be utilized in a similar manner with some minor syntax changes.

>https://medium.com/@noordean/understanding-ruby-blocks-3a45d16891f1#:~:text=Ruby%20blocks%20are%20anonymous%20functions%20that%20can%20be%20passed%20into,defined%20between%20two%20pipe%20%7C%20characters.

5. Ruby hashes:
> It is a group of objects. It looks like an array with a bunch of unique keys and their values combined. These are not indexed with integers(can be), but rather their unique keys.

>https://www.tutorialspoint.com/ruby/ruby_hashes.htm