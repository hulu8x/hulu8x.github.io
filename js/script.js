document.addEventListener('DOMContentLoaded', function() {

    // --- Update Copyright Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile Navbar Toggle ---
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if it's just a hash or part of a full URL on the same page
            if (href.startsWith('#') && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault(); // Prevent default jump only if target exists
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust offset for fixed header height
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open after click
                    if (navbarNav && navbarNav.classList.contains('active')) {
                        navbarNav.classList.remove('active');
                    }
                }
            }
        });
    });

     // --- Smooth Scrolling for specific scroll links (like rules link) ---
     document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href'); // Should be like '#booking-rules'
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                     e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Gallery Tabs (Simple Example) ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    window.openAlbum = function(evt, albumName) { // Make function global for inline onclick
        // Hide all tab contents
        tabContents.forEach(tab => tab.style.display = "none");

        // Remove 'active' class from all tab links
        tabLinks.forEach(link => link.classList.remove("active"));

        // Show the current tab content, add 'active' class to the button
        const currentTab = document.getElementById(albumName);
        if (currentTab) {
            currentTab.style.display = "block";
        }
        evt.currentTarget.classList.add("active");
    }
    // Initialize first tab
    if (tabLinks.length > 0) tabLinks[0].click();


    // --- Form Submission Handling (Example for Contact Form) ---
    const contactForm = document.getElementById('contact-form');
    const contactSuccessMsg = document.getElementById('contact-success-message');
    const contactErrorMsg = document.getElementById('contact-error-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default HTML form submission
            contactSuccessMsg.style.display = 'none';
            contactErrorMsg.style.display = 'none';

            const formData = new FormData(contactForm);
            const action = contactForm.getAttribute('action'); // Get backend URL

            // Display loading state (optional)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Đang gửi...';

            fetch(action, {
                method: 'POST',
                body: formData,
                // Headers might be needed depending on backend (e.g., for JSON)
                // headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(Object.fromEntries(formData)),
            })
            .then(response => {
                if (!response.ok) {
                    // Try to get error message from backend if available
                    return response.json().then(err => { throw err; }).catch(() => { throw new Error(`HTTP error! status: ${response.status}`); });
                }
                 return response.json(); // Or response.text() if backend sends plain text
            })
            .then(data => {
                 console.log('Success:', data);
                 contactForm.reset(); // Clear the form
                 contactSuccessMsg.style.display = 'block'; // Show success message
            })
            .catch((error) => {
                console.error('Error:', error);
                let errorMessage = 'Đã có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.';
                // Use more specific error from backend if available
                if (error && error.message) {
                     // You might want to customize this based on expected backend errors
                     // errorMessage = `Lỗi: ${error.message}`;
                }
                contactErrorMsg.textContent = errorMessage;
                contactErrorMsg.style.display = 'block'; // Show error message
            })
            .finally(() => {
                 // Restore button state
                 submitButton.disabled = false;
                 submitButton.textContent = originalButtonText;
            });
        });
    }

    // --- Add similar Fetch API logic for Class Inquiry Form and Booking Confirmation Form ---
    // Remember to handle their specific fields and success/error messages.

    // --- !!! Booking Calendar Logic Placeholder !!! ---
    const bookingCalendarPlaceholder = document.getElementById('booking-calendar-placeholder');
    const bookingConfirmationForm = document.getElementById('booking-confirmation-form');
    if (bookingCalendarPlaceholder && bookingConfirmationForm) {
        console.log("Booking calendar placeholder found. Needs implementation.");
        // 1. Initialize a calendar library (e.g., FullCalendar, Vanilla JS Calendar) or build custom.
        // 2. Fetch available slots from backend API based on selected date.
        //    - Example API endpoint: `/api/availability?date=YYYY-MM-DD`
        // 3. Render the calendar/slots with appropriate styling (available, booked, unavailable).
        // 4. Add click event listener to available slots.
        // 5. When a slot is clicked:
        //    - Get date, time, court number.
        //    - Populate the hidden fields in the confirmation form (#bookingDate, #bookingTime, #bookingCourt).
        //    - Display the confirmation form (#booking-confirmation-form).
        //    - Pre-fill the visible selected info (#selected-date, #selected-time, #selected-court).
        //    - Scroll user to the confirmation form (optional).
        // 6. Handle the submission of the confirmation form using Fetch API (similar to contact form).
        //    - Send booking details (date, time, court, name, phone) to backend API.
        //    - Example API endpoint: `/api/book-court` (POST request)
        // 7. On successful booking from backend:
        //    - Display success message (#booking-success-message).
        //    - Hide the confirmation form.
        //    - Optionally, refresh the calendar to show the slot as booked.
        // 8. On booking error (e.g., slot just got booked):
        //    - Display error message (#booking-error-message).
        //    - Keep the confirmation form visible for retry or contact.
    }

});