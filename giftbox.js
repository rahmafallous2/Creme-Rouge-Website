$(document).ready(function () {
    $('.wishlist').on('click', function () {
        let card = $(this).closest('.card');
        let index = $(this).closest('.card').data('index');
        let productIcon = card.find('.wishlist_red img').attr('src');
        let productImage = card.find('.product_image img').attr('src');
        let productName = card.find('.text_section h2').text();
        let productDescription = card.find('.text_section p').text();
        let productPrice = card.find('span:contains("$")').text().trim();


        // Save to local storage
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isAlreadyInWishlist = wishlist.some(item => item.name === productName);

        if (isAlreadyInWishlist) {
            // If already in wishlist, remove it
            wishlist = wishlist.filter(item => item.name !== productName);
            $(this).find('.wishlist_red').hide();
            $(this).find('.wishlist_black').show();
        } else {
            // If not in wishlist, add it
            wishlist.push({
                id: index,
                icon: productIcon,
                image: productImage,
                name: productName,
                description: productDescription,
                price: productPrice
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage
            $(this).find('.wishlist_red').show();
            $(this).find('.wishlist_black').hide();
        }

        $(this).find('.wishlist_red').show();
        $(this).find('.wishlist_black').hide();

        // Redirect to wishlist page
        window.location.href = 'wishlist.html'; // 
    });

    // Scroll to top button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('#scroll-up-btn').fadeIn();
        } else {
            $('#scroll-up-btn').fadeOut();
        }
    });

    $('#scroll-up-btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
})


// Drag and Drop Functionality
document.querySelectorAll('.dessert').forEach(item => {
    item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', item.id); // Pass the ID of the dragged item
    });
  });
  
  document.getElementById('cart').addEventListener('dragover', event => {
    event.preventDefault(); // Allow dropping
  });
  
  document.getElementById('cart').addEventListener('drop', event => {
    event.preventDefault();
  
    // Get the ID of the dropped item
    const dessertId = event.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(dessertId);
  
    // Create a new cart item with the image and name
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
  
    // Clone the image and append it to the cart item
    const img = draggedItem.querySelector('img').cloneNode(true);
    img.classList.add('cart-img'); // Optional: Add a class for cart images
    cartItem.appendChild(img);
  
    // Add a span for the dessert name
    const name = document.createElement('span');
    name.textContent = dessertId.charAt(0).toUpperCase() + dessertId.slice(1);
    cartItem.appendChild(name);
  
    // Add an input for quantity
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.min = 1;
    quantityInput.value = 1;
    cartItem.appendChild(quantityInput);
  
    // Add "Remove" button to the cart item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    cartItem.appendChild(removeButton);
  
    // Add remove button functionality
    removeButton.addEventListener('click', () => {
      cartItem.remove(); // Removes the cart item when clicked
    });
  
    // Append the cart item to the cart
    document.getElementById('cart').appendChild(cartItem);
  });
  
  // Email Cart Functionality
  document.getElementById('emailCart').addEventListener('click', () => {
    // Get all items from the cart
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add items before sending.');
      return;
    }
  
    // Prepare the cart details
    let cartDetails = 'Here are the items in my cart:\n\n';
    cartItems.forEach(item => {
      const name = item.querySelector('span').textContent.trim();
      const quantity = item.querySelector('input').value;
      cartDetails += `${name}: ${quantity} pcs\n`;
    });
  
    // Prepare email content
    const email = 'sondosoueidat66@gmail.com'; // Replace with your email
    const subject = 'My Dessert Cart Details';
    const body = encodeURIComponent(cartDetails);
  
    // Use the mailto protocol to open the email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
  
  $('.item-actions').on('click', function () {
    $(this).find('.item-icon').toggle();
    $(this).find('.item-icon2').toggle();
  });
  