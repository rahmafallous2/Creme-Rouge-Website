$(document).ready(function () {
    // Load JSON data
    $.getJSON("special.json", function (data) {
        const { regular, ...occasions } = data.occasions;

        // Get today's date in MM-DD format
        const today = new Date();
        const todayMonthDay = today.toISOString().slice(5, 10); // Format: MM-DD

        // Function to determine the active occasion
        const getActiveOccasion = () => {
            for (const [occasion, details] of Object.entries(occasions)) {
                const startDate = details.Start_Date;
                const endDate = details.End_Date;

                // Handle special case for overlapping years
                if (startDate > endDate) {
                    if (
                        (todayMonthDay >= startDate && todayMonthDay <= "12-31") ||
                        (todayMonthDay >= "01-01" && todayMonthDay <= endDate)
                    ) {
                        return { heading: details.heading, items: details.Items };
                    }
                } else if (todayMonthDay >= startDate && todayMonthDay <= endDate) {
                    return { heading: details.heading, items: details.Items };
                }
            }
            // Default: Regular items
            return { heading: "Every day deserves a little sweetness—treat yourself to our daily delights!", items: regular };
        };

        // Get active occasion details
        const activeOccasion = getActiveOccasion();

        // Set the heading for the occasion
        $(".special").before(`<h1 class="occasion-title">${activeOccasion.heading}</h1>`);

        // Populate the grid with the items for the active occasion
        $(".special").empty(); // Clear any existing items
        activeOccasion.items.forEach((item, index) => {
            const itemDiv = `
                <div class="special-item">
                    <img src="${item.image}" alt="Special Image ${index + 1}">
                    <p>${item.text || "Delightful treat!"}</p>
                    <div class="message-container" style="display: none;">
                        <span class="icon">✔</span><span class="message-text"> Added to Cart</span>
                    </div>
                    <button class="btn-add-to-cart">Add to Cart</button>
                </div>
            `;
            $(".special").append(itemDiv);
        });

        // Add click events to dynamically created buttons
        $(".btn-add-to-cart").click(function () {
            const parentDiv = $(this).closest(".special-item");
            toggleMessage(parentDiv); // Toggle the message visibility
        });

        // Function to toggle the "Added" message after button click
        function toggleMessage(parentDiv) {
            const messageContainer = parentDiv.find(".message-container");

            // Toggle the visibility of the message
            messageContainer.is(":hidden") ? messageContainer.fadeIn() : messageContainer.fadeOut();
        }
    });
});
