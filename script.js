 // Cart functionality
let cart = [];
let cartCount = 0;
let wishlist = [];
let wishlistCount = 0;

// Selected options
let selectedColor = 'midnight';
let selectedSize = 'medium';

// Navigation functions
function navigateTo(page) {
    console.log(`Navigating to ${page}`);
    // In a real application, this would handle routing
    alert(`Navigating to ${page.charAt(0).toUpperCase() + page.slice(1)} page`);
}

function goHome() {
    navigateTo('home');
}

function toggleMobileMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('mobile-open');
}

function searchProducts(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        console.log(`Searching for: ${query}`);
        alert(`Searching for: "${query}"`);
        // In a real application, this would trigger a search
    }
}

function showAccount() {
    alert('Account page would open here.\n\nFeatures:\n- Login/Register\n- Order History\n- Profile Settings');
}