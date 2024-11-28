let occasions = {
        regular:{ 
            Items:[
            { image: "icons/Daily sweets/Daily sweets1.jpg",},
            { image: "icons/Daily sweets/Daily sweets2.jpg",},
            { image: "icons/Daily sweets/Daily sweets3.jpg",},
            { image: "icons/Daily sweets/Daily sweets4.jpg",},
            { image: "icons/Daily sweets/Daily sweets5.jpg",},
            { image: "icons/Daily sweets/Daily sweets6.jpg",},
            { image: "icons/Daily sweets/Daily sweets7.jpg",},
            { image: "icons/Daily sweets/Daily sweets8.jpg",},
            { image: "icons/Daily sweets/Daily sweets9.jpg",},
            { image: "icons/Daily sweets/Daily sweets10.jpg",},
            { image: "icons/Daily sweets/Daily sweets11.jpg",},
            { image: "icons/Daily sweets/Daily sweets12.jpg",}
            ],
        },
        Christmas: {
            Start_Date: "12-25",
            End_Date: "1-2",
            heading: "Sprinkle joy this Christmas with our festive treats and holiday goodies!",
            Items: [
            { image: "icons/Christmas/Christmas1.jpg",},
            { image: "icons/Christmas/Christmas2.jpg",},
            { image: "icons/Christmas/Christmas3.jpg",},
            { image: "icons/Christmas/Christmas4.jpg",},
            { image: "icons/Christmas/Christmas5.jpg",},
            { image: "icons/Christmas/Christmas6.jpg",},
            { image: "icons/Christmas/Christmas7.jpg",},
            { image: "icons/Christmas/Christmas8.jpg",},
            { image: "icons/Christmas/Christmas9.jpg",},
            { image: "icons/Christmas/Christmas10.jpg",},
            { image: "icons/Christmas/Christmas11.jpg",},
            { image: "icons/Christmas/Christmas12.jpg",}
        ],
        },
        Valentine: {
            Start_Date: "2-14",
            End_Date: "2-15",
            heading: "Sweeten your love story with our heart-shaped delights this Valentine’s Day!",
            Items: [
                { image: "icons/Valentine/Valentine1.jpg",},
                { image: "icons/Valentine/Valentine2.jpg",},
                { image: "icons/Valentine/Valentine3.jpg",},
                { image: "icons/Valentine/Valentine4.jpg",},
                { image: "icons/Valentine/Valentine5.jpg",},
                { image: "icons/Valentine/Valentine6.jpg",},
                { image: "icons/Valentine/Valentine7.jpg",},
                { image: "icons/Valentine/Valentine8.jpg",},
                { image: "icons/Valentine/Valentine9.jpg",},
                { image: "icons/Valentine/Valentine10.jpg",},
                { image: "icons/Valentine/Valentine11.jpg",},
                { image: "icons/Valentine/Valentine12.jpg",}
            ],
        },
        Easter: {
            Start_Date: "3-22",
            End_Date: "4-25",
            heading: "Savor the sweetness of spring with our Easter-themed goodies!",
            Items: [
                { image: "icons/Easter/Easter1.jpg",},
                { image: "icons/Easter/Easter2.jpg",},
                { image: "icons/Easter/Easter3.jpg",},
                { image: "icons/Easter/Easter4.jpg",},
                { image: "icons/Easter/Easter5.jpg",},
                { image: "icons/Easter/Easter6.jpg",},
                { image: "icons/Easter/Easter7.jpg",},
                { image: "icons/Easter/Easter8.jpg",},
                { image: "icons/Easter/Easter9.jpg",},
                { image: "icons/Easter/Easter10.jpg",},
                { image: "icons/Easter/Easter11.jpg",},
                { image: "icons/Easter/Easter12.jpg",}
            ],
        },
        Halloween: {
            Start_Date: "10-31",
            End_Date: "11-1",
            heading: "Celebrate the spooky season with bakes too sweet to be scary!",
            Items: [
                { image: "icons/Halloween/Halloween1.jpg",},
                { image: "icons/Halloween/Halloween2.jpg",},
                { image: "icons/Halloween/Halloween3.jpg",},
                { image: "icons/Halloween/Halloween4.jpg",},
                { image: "icons/Halloween/Halloween5.jpg",},
                { image: "icons/Halloween/Halloween6.jpg",},
                { image: "icons/Halloween/Halloween7.jpg",},
                { image: "icons/Halloween/Halloween8.jpg",},
                { image: "icons/Halloween/Halloween9.jpg",},
                { image: "icons/Halloween/Halloween10.jpg",},
                { image: "icons/Halloween/Halloween11.jpg",},
                { image: "icons/Halloween/Halloween12.jpg",}
            ],
        },
        MothersDay: {
            Start_Date: "5-11",
            End_Date: "5-12",
            heading: "Treat Mom to the sweetness she deserves this Mother’s Day!",
            Items: [
                { image: "icons/Mothers day/Mothers day1.jpg",},
                { image: "icons/Mothers day/Mothers day2.jpg",},
                { image: "icons/Mothers day/Mothers day3.jpg",},
                { image: "icons/Mothers day/Mothers day4.jpg",},
                { image: "icons/Mothers day/Mothers day5.jpg",},
                { image: "icons/Mothers day/Mothers day6.jpg",},
                { image: "icons/Mothers day/Mothers day7.jpg",},
                { image: "icons/Mothers day/Mothers day8.jpg",},
                { image: "icons/Mothers day/Mothers day9.jpg",},
                { image: "icons/Mothers day/Mothers day10.jpg",},
                { image: "icons/Mothers day/Mothers day11.jpg",},
                { image: "icons/Mothers day/Mothers day12.jpg",}
                
            ],
        },
        FathersDay: {
            Start_Date: "6-15",
            End_Date: "6-16",
            heading: "Make his day extra sweet with our Father’s Day baked delights!",
            Items: [
                { image: "icons/Fathers day/Fathers day1.jpg",},
                { image: "icons/Fathers day/Fathers day2.jpg",},
                { image: "icons/Fathers day/Fathers day3.jpg",},
                { image: "icons/Fathers day/Fathers day4.jpg",},
                { image: "icons/Fathers day/Fathers day5.jpg",},
                { image: "icons/Fathers day/Fathers day6.jpg",},
                { image: "icons/Fathers day/Fathers day7.jpg",},
                { image: "icons/Fathers day/Fathers day8.jpg",},
                { image: "icons/Fathers day/Fathers day9.jpg",},
                { image: "icons/Fathers day/Fathers day10.jpg",},
                { image: "icons/Fathers day/Fathers day11.jpg",},
                { image: "icons/Fathers day/Fathers day12.jpg",}
            ],
        }
    };
function isCurrentOccasion(startDate, endDate) {
    let today = new Date();
    let todayMonth = today.getMonth() + 1; 
    let todayDate = today.getDate();
    let [startMonth, startDay] = startDate.split("-").map(Number);
    let [endMonth, endDay] = endDate.split("-").map(Number);

    if (todayMonth === startMonth && todayDate === startDay) {
        return "start";
    }
    if (todayMonth === endMonth && todayDate === endDay) {
        return "end"; 
    }
    return "none"; 
}
function updateOccasion() {
    let container = document.getElementById("occasion-container");
    let heading = document.querySelector(".text h1");
    let currentItems = occasions.regular.Items;
    let currentHeading = "Every day deserves a little sweetness-treat yourself to our daily delights!";

    for (let key in occasions) {
        if (
            key !== "regular" &&
            isCurrentOccasion(occasions[key].Start_Date, occasions[key].End_Date) === "start"
        ) {
            currentItems = occasions[key].Items;
            currentHeading = occasions[key].heading;
            break;
        }
    }

    heading.textContent = currentHeading;
    container.innerHTML = ""; 

    currentItems.forEach(item => {

    let div = document.createElement("div");
    div.className = "item";

    let img = document.createElement("img");
    img.src = item.image; 
    img.alt = item.name || "Occasion Item"; 
    div.appendChild(img);

    let button = document.createElement("button");
    button.className = "add-to-cart";
    button.textContent = "Add to Cart";

    let icon = document.createElement("img");
    icon.className = "cart-icon";
    icon.src = "icons/grey heart.jpeg"; 
    icon.alt = "Cart Icon";
    icon.style.cursor = "pointer"; 
    icon.style.width = "30px";
    icon.style.height = "30px";

    icon.addEventListener("click", () => {
    if (icon.src.includes("grey")) {
        icon.src = "icons/red heart.jpeg"; 
    } else {
        icon.src = "icons/grey heart.jpeg"; 
    }
    });

    let buttonIconContainer = document.createElement("div");
    buttonIconContainer.style.display = "flex"; 
    buttonIconContainer.style.alignItems = "center";
    buttonIconContainer.style.justifyContent = "center"; 
    buttonIconContainer.style.gap = "10px"; 
    buttonIconContainer.style.marginRight = "30px"

    buttonIconContainer.appendChild(icon);
    buttonIconContainer.appendChild(button);

    let message = document.createElement("span");
    message.className = "cart-message";
    message.textContent = "✔ Added to cart";
    message.style.display = "none"; 
    message.style.color = "#A00412"; 
    message.style.fontWeight = "bold"; 
    message.style.marginBottom = "10px";

    button.addEventListener("click", () => {
    let existingMessage = div.querySelector(".cart-message");
    if (existingMessage) {
        existingMessage.remove(); 
    } else {
        message.style.display = "block"; 
        div.insertBefore(message, buttonIconContainer); 
    }
    });
    div.appendChild(buttonIconContainer);
    container.appendChild(div);
})
}

document.addEventListener("DOMContentLoaded", updateOccasion);
