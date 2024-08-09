var priceRanges = document.querySelectorAll('.priceRange');
var clickAreas = document.querySelectorAll('.clickArea');

clickAreas.forEach(function(clickArea, index) {
    clickArea.addEventListener('click', function() {
        var dropDown = priceRanges[index];
        console.log('clicked');
        if (dropDown.classList.contains('active')) {
            dropDown.classList.remove('active');
            dropDown.classList.add('inactive');
        } else {
            dropDown.classList.remove('inactive');
            dropDown.classList.add('active');
        }
    });
});