var prOneC = document.getElementById('pr1c');
var prOneA = document.getElementById('pr1a');

console.log(prOneA, prOneC);

prOneC.addEventListener('click', function() {
    openOne(prOneA);
});

function openOne(dropDown) {
    console.log('clicked');
    if (dropDown.classList.contains('active')) {
        dropDown.classList.remove('active');
        dropDown.classList.add('inactive');
    }
    else {
        dropDown.classList.remove('inactive');
        dropDown.classList.add('active');
    }
}