// /*global $ */

// $(function () {
//     'use strict';
//     $('.info-list li').click(function () {
//         $(this).addClass('active').siblings('li').removeClass('active');
//         $('.info-content div').hide();
//         $('.' + $(this).data('class')).fadeIn();
//     });
// });




document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Select all list items under .info-list
    var listItems = document.querySelectorAll('.info-list li');

    // Add click event listener to each list item
    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all list items
            listItems.forEach(function (li) {
                li.classList.remove('active');
            });

            // Add 'active' class to the clicked list item
            this.classList.add('active');

            // Get the data-class attribute value
            var dataClass = this.getAttribute('data-class');

            // Hide all content divs
            var contentDivs = document.querySelectorAll('.info-content div');
            contentDivs.forEach(function (div) {
                div.style.display = 'none';
            });

            // Display the corresponding content div
            var selectedContent = document.querySelector('.info-content .' + dataClass);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });
});
