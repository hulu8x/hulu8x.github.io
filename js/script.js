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

    // --- Mini Booking Widget Logic ---
    async function loadMiniBookingWidget() {
        const widgetDiv = document.getElementById('mini-booking-widget');
        if (!widgetDiv) return; // Exit if widget div not found

        const loadingRow = document.getElementById('booking-loading');
        const currentDateElement = document.getElementById('current-date');
        
        // Format and display current date
        const today = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' };
        currentDateElement.textContent = `Hôm nay, ${today.toLocaleDateString('vi-VN', options)}`;
        
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        const apiUrl = `https://asia-southeast1-nhonphu-booking.cloudfunctions.net/getAvailability?date=${todayStr}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Lỗi mạng: ${response.status}`);
            }
            
            const availabilityData = await response.json();
            if (!availabilityData || Object.keys(availabilityData).length === 0) {
                throw new Error('Không có dữ liệu sân');
            }
            
            // Hide loading indicator
            if (loadingRow) {
                loadingRow.style.display = 'none';
            }
            
            // Process all time slots from all courts to get a unique sorted list
            const allTimeSlots = new Set();
            for (const courtNum in availabilityData) {
                if (availabilityData[courtNum] && Array.isArray(availabilityData[courtNum])) {
                    availabilityData[courtNum].forEach(slot => {
                        allTimeSlots.add(slot.time);
                    });
                }
            }
            
            // Convert to array, sort by time
            const sortedTimeSlots = Array.from(allTimeSlots).sort();
            
            // Get the table body to append rows to
            const tableBody = document.querySelector('#mini-booking-widget tbody');
            if (!tableBody) return;
            
            // Create a row for each time slot
            sortedTimeSlots.forEach(timeSlot => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-200 hover:bg-gray-50';
                
                // Add time cell
                const timeCell = document.createElement('td');
                timeCell.className = 'py-2 px-3 font-medium text-gray-900';
                timeCell.textContent = timeSlot;
                row.appendChild(timeCell);
                
                // Add cells for each court
                for (let courtNum = 1; courtNum <= 3; courtNum++) {
                    const courtCell = document.createElement('td');
                    courtCell.className = 'py-2 px-3';
                    
                    // Find this time slot for this court
                    const courtData = availabilityData[courtNum.toString()];
                    let slotStatus = 'unavailable'; // Default status
                    
                    if (courtData && Array.isArray(courtData)) {
                        const slotInfo = courtData.find(s => s.time === timeSlot);
                        if (slotInfo) {
                            const now = new Date();
                            // For slots that are in the past
                            const [startTime] = timeSlot.split('-');
                            if (startTime) {
                                const [hours, minutes] = startTime.split(':');
                                const slotDateTime = new Date(today);
                                slotDateTime.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
                                
                                if (slotDateTime < now) {
                                    slotStatus = 'past';
                                } else {
                                    slotStatus = slotInfo.status; // 'available' or 'booked'
                                }
                            }
                        }
                    }
                    
                    // Create status indicator
                    const statusIndicator = document.createElement('div');
                    statusIndicator.className = 'flex items-center';
                    
                    // Different styling based on status
                    let statusColor = '';
                    let statusText = '';
                    
                    if (slotStatus === 'available') {
                        statusColor = 'bg-green-400';
                        statusText = 'Trống';
                    } else if (slotStatus === 'booked') {
                        statusColor = 'bg-orange-300';
                        statusText = 'Đã đặt';
                    } else if (slotStatus === 'past') {
                        statusColor = 'bg-gray-300';
                        statusText = 'Đã qua';
                    } else {
                        statusColor = 'bg-gray-300';
                        statusText = 'Không mở';
                    }
                    
                    statusIndicator.innerHTML = `
                        <div class="w-3 h-3 ${statusColor} rounded-full mr-2"></div>
                        <span class="text-sm text-gray-700">${statusText}</span>
                    `;
                    
                    courtCell.appendChild(statusIndicator);
                    row.appendChild(courtCell);
                }
                
                tableBody.appendChild(row);
            });

            // If no time slots were found, show a message
            if (sortedTimeSlots.length === 0) {
                const messageRow = document.createElement('tr');
                messageRow.innerHTML = `
                    <td colspan="4" class="text-center py-4 text-gray-500">
                        Không có dữ liệu khung giờ cho ngày hôm nay.
                    </td>
                `;
                tableBody.appendChild(messageRow);
            }

        } catch (error) {
            console.error('Error loading mini booking widget:', error);
            const tableBody = document.querySelector('#mini-booking-widget tbody');
            if (loadingRow) {
                loadingRow.style.display = 'none';
            }
            if (tableBody) {
                const errorRow = document.createElement('tr');
                errorRow.innerHTML = `
                    <td colspan="4" class="text-center py-4 text-red-500">
                        <div class="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                            Lỗi khi tải lịch sân. Vui lòng thử lại sau hoặc <a href="dat-san.html" class="underline">xem trang đặt sân</a>.
                        </div>
                    </td>
                `;
                tableBody.appendChild(errorRow);
            }
        }
    }

    // Call the function to load the widget data
    if (document.getElementById('mini-booking-widget')) {
        loadMiniBookingWidget();
    }

});

window.npInitHeaderMenu = function() {
    // Use header-placeholder if exists, otherwise use document as container
    const container = document.getElementById('header-placeholder') || document;
    const hamburgerBtn = container.querySelector('#npHamburger');
    const mobileMenu = container.querySelector('#npNavMenuMobile');
    const overlay = container.querySelector('#npOverlay');
    const headerWrapper = container.querySelector('#npHeaderWrapper');
    const bodyEl = document.body;
    const hamburgerIcon = hamburgerBtn?.querySelector('i');

    if (!hamburgerBtn || !mobileMenu || !overlay || !headerWrapper || !hamburgerIcon) {
        console.error("Lỗi: Không tìm thấy một hoặc nhiều phần tử DOM cần thiết cho header bên trong #header-placeholder.");
        return;
    }

    let isMenuOpen = false;
    function closeMobileMenu() {
        if (!isMenuOpen) return;
        mobileMenu.classList.remove('np-active');
        overlay.classList.remove('np-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Mở menu');
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
        bodyEl.classList.remove('np-menu-open');
        mobileMenu.addEventListener('transitionend', () => {
            if (!mobileMenu.classList.contains('np-active')) {
                mobileMenu.setAttribute('hidden', '');
            }
        }, { once: true });
        isMenuOpen = false;
    }
    function openMobileMenu() {
        if (isMenuOpen) return;
        mobileMenu.removeAttribute('hidden');
        requestAnimationFrame(() => {
            mobileMenu.classList.add('np-active');
            overlay.classList.add('np-active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            hamburgerBtn.setAttribute('aria-label', 'Đóng menu');
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
            bodyEl.classList.add('np-menu-open');
            isMenuOpen = true;
            mobileMenu.querySelector('a, button')?.focus();
        });
    }
    hamburgerBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (isMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    mobileMenu.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            if ((href && href !== '#') || link.classList.contains('np-cta-button-mobile')) {
                setTimeout(closeMobileMenu, 150);
            }
        }
    });
    overlay.addEventListener('click', () => {
        closeMobileMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
            hamburgerBtn.focus();
        }
    });
    let lastScrollY = window.scrollY;
    const scrollThreshold = 50;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (headerWrapper) {
            if (currentScrollY > scrollThreshold) {
                headerWrapper.classList.add('np-scrolled');
            } else {
                headerWrapper.classList.remove('np-scrolled');
            }
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
    function setActiveMenuItem() {
        let currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/index.php')) {
            currentPath = 'index.html';
        } else {
            currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);
            if (!currentPath && window.location.pathname !== '/') {
                currentPath = window.location.pathname.substring(1);
                if (currentPath.endsWith('/')) {
                    currentPath = currentPath.slice(0, -1);
                }
            }
        }
        currentPath = currentPath.split('?')[0].split('#')[0];
        const menuItemsDesktop = container.querySelectorAll('.np-nav-menu .np-nav-link');
        const menuItemsMobile = container.querySelectorAll('.np-nav-menu-mobile .np-nav-link:not(.np-cta-button-mobile)');
        const menuItems = [...menuItemsDesktop, ...menuItemsMobile];
        if (menuItems.length === 0) return;
        menuItems.forEach(item => {
            item.classList.remove('np-active');
            let itemHref = item.getAttribute('href') || '';
            if (itemHref === 'index.html' || itemHref === '/' || itemHref === './') {
                itemHref = 'index.html';
            } else {
                itemHref = itemHref.split('?')[0].split('#')[0];
                const lastSlashIndex = itemHref.lastIndexOf('/');
                if (lastSlashIndex !== -1) {
                    itemHref = itemHref.substring(lastSlashIndex + 1);
                }
                if (itemHref === '' && (item.getAttribute('href') || '').endsWith('/')) {
                    let fullHref = (item.getAttribute('href') || '').replace('./', '');
                    if (fullHref.endsWith('/')) {
                        fullHref = fullHref.slice(0, -1);
                    }
                    const lastPartIndex = fullHref.lastIndexOf('/');
                    if (lastPartIndex !== -1) {
                        itemHref = fullHref.substring(lastPartIndex + 1);
                    } else {
                        itemHref = fullHref;
                    }
                }
            }
            if (itemHref && currentPath && itemHref.toLowerCase() === currentPath.toLowerCase()) {
                item.classList.add('np-active');
            }
        });
        if (currentPath === 'index.html') {
            const homeLinks = container.querySelectorAll('a[href="index.html"], a[href="/"], a[href="./"]');
            homeLinks.forEach(link => {
                if(link.matches('.np-nav-menu .np-nav-link, .np-nav-menu-mobile .np-nav-link') && !link.classList.contains('np-active')) {
                    link.classList.add('np-active');
                }
            });
        }
    }
    setActiveMenuItem();
    window.addEventListener('hashchange', setActiveMenuItem);
    window.addEventListener('popstate', setActiveMenuItem);
};