console.log("Hello World");

// Welcome to the jQuery tutorial!

// What is jQuery?
// jQuery is a JavaScript Library.
// jQuery greatly simplifies JavaScript programming.
// jQuery is easy to learn.

// What is a library?
// A JavaScript library is a library of pre-written JavaScript that allows for easier development of JavaScript-based applications.

// jQuery makes writing Web API's much easier. It also gives us some added functionality that is normally quite
// difficult in vanilla JavaScript.
// Vanilla JavaScript that produces the same affect will be added along side our jQuery code for reference.
// We will be leaving our code uncommented as we go along.

// Lets get started by creating our first element
// Uncomment the code below:

// var divEl = $("<div>"); // var divEl = document.createElement("div");


// Yup, it's that easy. Lets give our divEl some text and append it to our body.
// Uncomment the code below:

// $(divEl).text("Some new text"); // divEl.textContent = "Some new text";
// $("body").append(divEl); // document.body.appendChild(divEl)


// We can use the ".prepend()" method to add an element as the first child, as opposed to the last.
// Lets add a class to our divEl.
// Uncomment the code below:

// $(divEl).addClass("basic-div"); // divEl.className = "basic-div";


// If we look at our dev tools in the element tab we can see that our div has the class "basic-div".

// Lets add another element to our divEl as a child. We are going to do it a slightly different way though.
// Uncomment the code below:

// $(".basic-div").append("<p>Some different Text</p>");


// Instead of targetting our divEl, we selected an element by it's class name. We can do this since we have
// appended our divEl to our document already.
// We then appended written html into the element with the basic-div class.
// If we wanted to do this with JavaScript with the same effect, it would look like this:


// var parEl = document.createElement("p");
// parEl.innerText = "Some Different Text";
// document.querySelector(".basic-div").appendChild(parEl);

// jQuery makes this much simpler.

// Now, let's hide the basic-div element.
// Uncomment the code below:

// $(divEl).hide(); // document.querySelector(".basic-div").style.display = "none";


// We can also use the ".show()" method to show an element that has been hidden.

// Lets make some more elements and give them classes and append them to the body.
// Uncomment the code below:

// $("<div>").addClass("text-div").text("I am text in a div").appendTo("body");


// Yes, we did just do all of that in one line of code!
// With jQuery we can chain together methods to add attributes and append that element to our document
// Here's how it would look like in JavaScript:


// var el = document.createElement("div");
// el.innerText = "I am text in a div";
// el.classList.add("text-div");
// document.body.appendChild(el);

// Let's change the color of our text and the background in this newly created div.
// Uncomment the code below:

// $(".text-div").css("color", "blue"); // document.querySelector(".text-div").style.color = "blue";


// We can even change multiple attributes of an element with the ".attr()" method. We can only set HTML attributes with this method

// $("<div>").attr(
//     {
//         width : "128px",
//         height : "64px",
//         class : "attr-div",
//         id : "mega-attributes",
//         style : "margin : 10px; color : yellow; border : solid 2px red; font-size : 30px; background-color : purple; text-align : center",
//     }
// )
// .text("Look at all my attributes!")
// .appendTo("body")


// We won't try this in JavaScript. It would take a long time.

// Now let's create a button and attach a click event listener to it
// Uncomment the code below:

// $("<button>").text("Click me").click(function() {
//     return console.log("I have been clicked!");
// }).appendTo("body");


// Now to finish everything off, lets remove all of the content of our document with the ".empty()" method.
// Uncomment the code below:

// $("body").empty(); // document.body.innerHTML = "";


// We have barely scratched the surface of jQuery. There is a lot more to learn, but this should be a good
// jumping off point for you to start using jQuery effectively.