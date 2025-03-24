const mobile = document.querySelector("#menu-toggle");
const mobileLink = document.querySelector(".sidebar");

mobile.addEventListener("click", function () {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

mobileLink.addEventListener("click", function () {
    const menuBar = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBar) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
});

// Scrolling Logic for Highlight Wrapper

const highlightWrapper = document.querySelector(".highlight-wrapper");
const filterWrapper = document.querySelector(".filter-wrapper");
const step = 100;
const stepFilter = 60;


// Select all sections with the class 'main-highlight' it will work for recommanded and chose order also. 
document.querySelectorAll(".main-highlight").forEach((section) => {
    const highlightWrapper = section.querySelector(".highlight-wrapper");

    // Handle the 'back' button
    section.querySelector(".back").addEventListener("click", function (e) {
        e.preventDefault();
        highlightWrapper.scrollBy({
            left: -100, behavior: "smooth"
        });
    });

    // Handle the 'next' button
    section.querySelector(".next").addEventListener("click", function (e) {
        e.preventDefault();
        highlightWrapper.scrollBy({
            left: 100, behavior: "smooth"
        });
    });
});




// // Scrolling Logic for Filter Wrapper  menu category
document.querySelector("#back-minus").addEventListener("click", function (e) {
    e.preventDefault();
    filterWrapper.scrollBy({
        left: -stepFilter, behavior: "smooth"
    });
});

document.querySelector("#next-minus").addEventListener("click", function (e) {
    e.preventDefault();
    filterWrapper.scrollBy({
        left: stepFilter, behavior: "smooth"
     });
});



// its use for  ( x ) close this icon 
function closeAuthForm() {
    const authForm = document.getElementById('auth-form');
    authForm.classList.add('hidden');
}

function showSignUp() {
    const authForm = document.getElementById('auth-form');
    const signUpForm = document.getElementById('signup-form');
    const signInForm = document.getElementById('signin-form');

    // Ensure authForm is visible
    authForm.classList.remove('hidden');
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
}

function showSignIn() {
    const authForm = document.getElementById('auth-form');
    const signUpForm = document.getElementById('signup-form');
    const signInForm = document.getElementById('signin-form');

    // Ensure authForm is visible
    authForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
}



function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Sign Up Details:", { username, email, password });

    // Reset the form fields
    document.getElementById('signup-form').reset();

    // Hide the Sign Up form and show the Sign In form
    showSignIn();
}

function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    console.log("Sign In Details:", { email, password });

    // Reset the form fields
    document.getElementById('signin-form').reset();
    closeAuthForm();
}





// it used for sign in data  store  in food delevery spreadsheet

const scriptURL = "https://script.google.com/macros/s/AKfycbyOILUTv-kfAsxgMcAmBItd6bM4LKD0w4WoVZqOR5qDKLWUmcckOVNfpPEckTNXsrJf/exec"; // Replace with your web app URL


function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission
    const form = document.getElementById('signup-form');
    
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form) // Send form data
    })
    .then(response => response.json())
    .then(result => {
        alert("Thanks for signing up: " + result.status); // Success message
        form.reset(); // Reset form after successful submission
    })
    .catch(error => console.error("Error:", error.message)); // Error handling
}






const addToCartIcons = document.querySelectorAll('.add-to-cart'); // All "Add to Cart" icons
const cartCountElement = document.getElementById('cart-count'); // Cart count element

// Initialize cart count
let cartCount = 0;

// Object to track item categories
const cartItems = {
    vegetable: 0,
    fruit: 0,
    dairy: 0,
    // Add more categories if needed
};

// Add click event to each "Add to Cart" icon
addToCartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // Retrieve the category from a data attribute or other relevant association
        const itemCategory = icon.getAttribute('data-category'); // Make sure 'data-category' is present in your buttons
        icon.classList.toggle('selected'); // Toggle the 'selected' state

        // Update cart count and category count based on the 'selected' state
        if (icon.classList.contains('selected')) {
            cartCount++; // Increase the total cart count
            cartItems[itemCategory] = (cartItems[itemCategory] || 0) + 1; // Increase the category count
        } else {
            cartCount--; // Decrease the total cart count
            cartItems[itemCategory] = (cartItems[itemCategory] || 0) - 1; // Decrease the category count
        }

        // Update the cart count display
        cartCountElement.textContent = cartCount;

        // Optional: Log category-wise cart details for debugging
        console.log('Cart Items:', cartItems);
    });
});









// this is for contact page 


    document.getElementById("openContactForm").addEventListener("click", function () {
        var contactForm = document.getElementById("contactForm");
        if (contactForm.style.display === "none" || contactForm.style.display === "") {
            contactForm.style.display = "flex"; // Show the form
        } else {
            contactForm.style.display = "none"; // Hide the form
        }
    });




