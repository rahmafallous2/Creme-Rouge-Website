const products = [
    {
        id: 0,
        name: "Chocolate Sprinkle Donut",
        image: "menu_photos/donuts/donuts.3-removebg-preview.png",
        price: "$8.40",
        description: "A classic chocolate-glazed donut topped with colorful sprinkles and chocolate chips for a rich and festive treat.",
        quantity:1,
    
      
    },
    {
        id: 1,
        name: "Berry Glaze Donut",
        image: "menu_photos/donuts/donuts.2-removebg-preview.png",
        price: "$4.00",
        description: "A vibrant red donut with a tangy berry glaze, studded with tiny candy pieces for a burst of flavor.",
        quantity:1,
 
    },
    {
        id: 2,
        name: "White Chocolate Sprinkle Donut",
        image: "menu_photos/donuts/donuts.4-removebg-preview.png",
        price: "$9.00",
        description: "A donut coated with smooth white chocolate glaze, sprinkled with pink candy bits and drizzled with chocolate stripes.",
        quantity:1,
      
    },
    {
        id: 3,
        name: "Pink Funfetti Donut",
        image:"menu_photos/donuts/donuts.9-removebg-preview.png",
        price: "$5.00",
        description: "A delightful pink-glazed donut covered with a rainbow of sprinkles, offering a cheerful and sweet experience.",
        quantity:1,
        
    },
    {
        id: 4,
        name:"Almond Crunch Donut",
        image:"menu_photos/donuts/donuts.8-removebg-preview.png",
        price: "$8.00",
        description:"A donut topped with golden toasted almond slices for a nutty and sophisticated touch.",
        quantity:1,
       
    },  
    {
        id: 5,
        name:"Caramel Cherry Donut",
        image:"menu_photos/donuts/donuts.12-removebg-preview.png",
        price: "$5.00",
        description:"A donut drizzled with creamy caramel and finished with whipped cream and a cherry on top for an indulgent finish.",
        quantity:1,
        
    },
    {
        id: 6,
        name:"Red Velvet Cookie",
        image:"menu_photos/cookies/cookies.1-removebg-preview.png",
        price:"$5.00",
        description:"A soft and chewy red velvet cookie topped with creamy frosting and dusted with cocoa powder, perfect for a sweet indulgence.",
        quantity:1,
        

    },
    {
        id: 7,
        name:"Chocolate Drizzle Cookie",
        image:"menu_photos/cookies/cookies.2-removebg-preview.png",
        price:"$8.00",
        description:"A classic cookie infused with chocolate chips and elegantly topped with a rich chocolate drizzle.",
        quantity:1,
       
    },
    {
        id: 8,
        name:"Strawberry Swirl Cookie",
        image:"menu_photos/cookies/cookies.3-removebg-preview.png",
        price:"$2.00",
        description:"A delightful pink cookie with a swirl of strawberry icing, perfect for lovers of fruity desserts.",
        quantity:1,
        
    },
    {
        id: 9,
        name:"Festive Star Cookie",
        image:"menu_photos/cookies/cookies.4-removebg-preview.png",
        price:"$4.00",
        description:"A charming cookie with a frosted base, topped with a gingerbread star, ideal for festive celebrations.",
        quantity:1,
        
    },
    {
        id: 10,
        name:"Chocolate Sprinkle Cookie",
        image:"menu_photos/cookies/cookies.5-removebg-preview.png",
        price:"$7.00",
        description:"A decadent chocolate cookie generously covered with colorful sprinkles, bringing joy to every bite.",
        quantity:1,
        
    },
    {
        id: 11,
        name:"Golden Frosted Cookie",
        image:"menu_photos/cookies/cookies.6-removebg-preview.png",
        price:"$9.00",
        description:"A vanilla-based cookie with a swirl of golden frosting, combining elegance and flavor.",
        quantity:1,
        
    },
    {
        id: 12,
        name:"Chocolate Strawberry Cake",
        image:"menu_photos/cakes/cake.14.png",
        price:"$30.00",
        description:"A rich chocolate cake topped with fresh strawberries and chocolate decorations, offering a luscious dessert experience.",
        quantity:1,
    
    },
    {
        id: 13,
        name:"Pastel Pink Cake",
        image:"menu_photos/cakes/cake.2.png",
        price:"$20.00",
        description:"A light and airy cake with pastel pink frosting and piped decorations, perfect for celebrations.",
        quantity:1,
        
    },
    {
        id: 14,
        name:"Dark Chocolate Berry Cake",
        image:"menu_photos/cakes/cake.11.png",
        price:"$31.00",
        description:"A dark chocolate cake layered with fresh berries, finished with a smooth chocolate glaze for a refined taste.",
        quantity:1,
        
    },
    {
        id: 15,
        name:"Double Chocolate Naked Cake",
        image:"menu_photos/cakes/cake.15.png",
        price:"$25.00",
        description:"A layered chocolate sponge cake filled with creamy chocolate frosting and topped with berries for a rustic dessert.",
        quantity:1,
        
    },
    {
        id: 16,
        name:"Classic Drip Cake",
        image:"menu_photos/cakes/cake.10 copy.png",
        price:"$19.00",
        description:"A layered vanilla cake topped with chocolate ganache drip and cherries, blending elegance and nostalgia.",
        quantity:1,
        
    },
    {
        id: 17,
        name:"Raspberry Mousse Cake",
        image:"menu_photos/cakes/cake.6.png",
        price:"$17.00",
        description:"A refreshing pink mousse cake with a smooth finish, decorated with raspberries and a chocolate drizzle for a tangy and sweet treat.",
        quantity:1,
      
    },
    {
        id: 18,
        name:"Strawberry Pistachio Macaroon",
        image:"menu_photos/macaroons/macaroon.2-removebg-preview.png",
        price:"$10.40",
        description:"Delicate macarons with a crisp shell, featuring a creamy strawberry and pistachio filling for a perfect balance of sweetness and nuttiness.",
        quantity:1,
      
    },
    {
        id: 19,
        name:"Swirled Vanilla Caramel Macaroon",
        image:"menu_photos/macaroons/macaroons.12-removebg-preview.png",
        price:"$7.00",
        description:"Swirled macarons with a soft vanilla shell and a rich caramel filling, combining elegance with a burst of flavor.",
        quantity:1,
     
    },
    {
        id: 20,
        name:"Citrus Bliss Macaroon",
        image:"menu_photos/macaroons/macaroons.8-removebg-preview.png",
        price:"$10.00",
        description:"Bright and tangy citrus macarons with a zesty filling, ideal for refreshing your palate.",
        quantity:1,
     
    },
    {
        id: 21,
        name:"Speckled Vanilla Macaroon",
        image:"menu_photos/macaroons/macaroons.4-removebg-preview.png",
        price:"$8.00",
        description:"Classic vanilla macarons speckled with chocolate, offering a timeless dessert with a subtle crunch.",
        quantity:1,
        
    },
    {
        id: 22,
        name:"Green Tea Macaroon",
        image:"menu_photos/macaroons/macaroons.9-removebg-preview.png",
        price:"$12.00",
        description:"Light and earthy green tea macarons paired with a creamy matcha filling, perfect for tea lovers.",
        quantity:1,
        
    },
    {
        id: 23,
        name:"Sunset Swirl Macaroon",
        image:"menu_photos/macaroons/macaroons3-removebg-preview.png",
        price:"$9.50",
        description:"Vibrantly colored macarons with orange and yellow swirls, filled with a tropical fruit-flavored ganache for a bold taste.",
        quantity:1,
   
    },
    {
        id: 24,
        name:"Berry Bliss Cupcake",
        image:"menu_photos/cupcakes/cupcake.1.png",
        price:"$11.00",
        description:"A moist cupcake topped with fluffy berry-flavored frosting and sprinkled with decorative sugar crystals for a whimsical finish.",
        quantity:1,
       
    },
    {
        id: 25,
        name:"Cherry Delight Cupcake",
        image:"menu_photos/cupcakes/cupcake.3-removebg-preview.png",
        price:"$9.00",
        description:"A decadent cupcake crowned with pink frosting, a drizzle of cherry syrup, and a whole cherry for a luscious treat.",
        quantity:1,
        
    },
    {
        id: 26,
        name:"Chocolate Vanilla Twist Cupcake",
        image:"menu_photos/cupcakes/cupcake.4-removebg-preview.png",
        price:"$8.50",
        description:"A rich chocolate cupcake with a swirl of vanilla frosting and chocolate shavings for a balanced and indulgent bite.",
        quantity:1,
        
    },
    {
        id: 27,
        name:"Mixed Berry Cupcake",
        image:"menu_photos/cupcakes/cupcake.20.png",
        price:"$10.00",
        description:" A fruity cupcake topped with creamy frosting and adorned with fresh blueberries and raspberries, adding a touch of freshness.",
        quantity:1,
        
    },
    {
        id: 28,
        name:"Pink Velvet Cupcake",
        image:"menu_photos/cupcakes/cupcake.22.png",
        price:"$11.00",
        description:"A soft and velvety pink cupcake with a sweet buttercream frosting and delicate floral decorations for an elegant dessert.",
        quantity:1,
    
    },
    {
        id: 29,
        name:"Raspberry Dream Cupcake",
        image:"menu_photos/cupcakes/cupcake.23.png",
        price:"$7.00",
        description:"A raspberry-flavored cupcake with a tangy-sweet frosting, topped with fresh raspberries for a bold and fruity experience.",
        quantity:1,
      
    },

];


function viewProductDetails(index) {
    localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
    window.location.href = "shopping-details.html"; 
}
$(document).ready(function () {
    // Check if the item is in the wishlist when the page loads
    updateWishlistIcons();

    // Menu category filtering
    $('.categories_menu > div').on('click', function () {
        const category = $(this).find('span').text().toLowerCase();
        filterCards(category);
    });

    // Dropdown category filtering
    $('.dropdown-content a').on('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        let category = $(this).parent().data('category');
        filterCards(category);
    });

    // Common filter logic
    function filterCards(category) {
        if (category === 'all') {
            $('.card').show();
        } else {
            $('.card').hide();
            $('.card[data-category="' + category + '"]').show(); // Show filtered cards
        }
    }

    // Wishlist toggle functionality
    $('.wishlist').on('click', function () {
        let card = $(this).closest('.card');
        let index = $(this).closest('.card').data('index');
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
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage
            $(this).find('.wishlist_red').hide(); // Hide red icon
            $(this).find('.wishlist_black').show(); // Show black icon
        } else {
            // If not in wishlist, add it
            wishlist.push({
                id: index,
                image: productImage,
                name: productName,
                description: productDescription,
                price: productPrice
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage
            $(this).find('.wishlist_red').show(); // Show red icon
            $(this).find('.wishlist_black').hide(); // Hide black icon
        }

        // Optional: Redirect to wishlist page after adding/removing item
        // window.location.href = 'wishlist.html'; // Uncomment to go to wishlist page after toggle
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

    // Function to check wishlist status and update icons accordingly
    function updateWishlistIcons() {
        // Get the current wishlist from localStorage
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // Loop through each card and check if it's in the wishlist
        $('.card').each(function () {
            let card = $(this);
            let productName = card.find('.text_section h2').text();
            
            // Check if the current card is in the wishlist
            const isInWishlist = wishlist.some(item => item.name === productName);

            // Update the wishlist icon based on the item state
            if (isInWishlist) {
                card.find('.wishlist_red').show(); // Show red icon
                card.find('.wishlist_black').hide(); // Hide black icon
            } else {
                card.find('.wishlist_red').hide(); // Hide red icon
                card.find('.wishlist_black').show(); // Show black icon
            }
        });
    }
});
