// Set up the routes for the pages
const routes = {
    '/': 'home.html',
    '/about': 'about.html',
    '/contact': 'contact.html'
};

// Define the function to handle routing
function route() {
    // Get the current path from the URL
    const path = window.location.pathname;

    // Look up the path in the routes object to get the file name
    const fileName = routes[path];

    // If there is no file name for this path, show the error page
    if (!fileName) {
        showErrorPage('404 Not Found');
        return;
    }

    // Show the spinner while the content is being loaded
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Load the content from the file
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // Hide the spinner
            spinner.style.display = 'none';

            // If the request was successful, show the content
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
            }
            // If there was an error, show the error page
            else {
                showErrorPage(xhr.status + ' ' + xhr.statusText);
            }
        }
    };
    xhr.open('GET', fileName);
    xhr.send();
}

// Define the function to show the error page
function showErrorPage(message) {
    document.getElementById('content').innerHTML = `<h1>Error</h1><p>${message}</p>`;
}

// Add an event listener for the popstate event, which is triggered when the back or forward button is clicked
window.addEventListener('popstate', route);

// Navigate to the initial page
history.pushState({}, '', '/');
route();

// Set a timeout to hide the spinner after 3 seconds
setTimeout(() => {
    const spinner = document.getElementById('spinner');
    if (spinner.style.display === 'block') {
        spinner.style.display = 'none';
    }
}, 3000);
