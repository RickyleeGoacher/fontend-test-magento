define([
    "domReady!"
],
    function () {
        "use strict";

        // Get Elements
        const modalContainer = document.querySelector('.popup-container');
        const inputSelector = document.querySelector('.input');
        const error = document.querySelector('.error-message');
        const message = document.querySelector('.message-container');

        // Check if popup is completed if not Call popup in 1 minute
        if (!sessionStorage.getItem('popup')) {
            setTimeout(callPopup, 6000);
        }

        // Activate popup
        function callPopup() {
            modalContainer.classList.add('active');
        }

        // Listen to clicks
        modalContainer.addEventListener('click', (event) => {

            let target = event.target;

            // Close popup if close button or overlay is clicked

            if (target.classList.value === 'close-btn' || target.classList.value === 'overlay') closeModal();

            // Check if submit was clicked & if input is valid. if true display message

            if (target.classList.value === 'submit-btn' && inputSelector.value.match(/\w{3,}/gi)) {
                message.innerHTML = `<span>Thank you ${inputSelector.value} for entering our prize draw. Good luck!</span>`;
                message.classList.add('completed');
                closeModal();
                sessionStorage.setItem('popup', 'completed');
            } else {
                error.innerHTML = '*Please enter a valid name. A valid name must be at least 3 characters and contain only letters';
            }

        });

        // Close Modal
        function closeModal() {
            modalContainer.classList.remove('active');
        }
    });
