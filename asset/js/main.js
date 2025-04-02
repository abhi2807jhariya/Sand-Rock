    // Select the main image element
    const mainImage = document.getElementById('main-image');

    // Select all thumbnail images
    const thumbnails = document.querySelectorAll('.property-thumbnails img');

    // Add click event listeners to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Set the src of the main image to the clicked thumbnail's src
            mainImage.src = this.src;
        });
    });


    const dropdown = document.getElementById("dropdown");
    const dropdownList = document.getElementById("dropdown-list");
    const phoneInput = document.getElementById("phone");

    // Toggle dropdown visibility
    dropdown.addEventListener("click", () => {
        dropdownList.style.display =
            dropdownList.style.display === "block" ? "none" : "block";
    });

    // Handle country selection
    dropdownList.addEventListener("click", (e) => {
        if (e.target.closest("div")) {
            const selectedDiv = e.target.closest("div");
            const flagImg = selectedDiv.querySelector("img").src;
            const countryCode = selectedDiv.getAttribute("data-code");
            dropdown.querySelector("img").src = flagImg;
            dropdown.querySelector("span").textContent = countryCode;
            dropdownList.style.display = "none";
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && !dropdownList.contains(e.target)) {
            dropdownList.style.display = "none";
        }
    });