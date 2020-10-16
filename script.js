let age = prompt('Please enter your age.');
if (age < 0) {
    alert('Error, you entered a negative number.');
} else if (age === 21) {
    alert('happy 21st birthday!!');
} else if (age % Math.sqrt(age) === 0) {
    alert('perfect square!');
} else if (age % 2 === 1) {
    alert('your age is odd!');
} else if (age < 18) {
    alert('Sorry, you are not old enough to enter the venue');
} else if (age < 21) {
    alert('You can enter, but cannot drink');
} else {
    alert('Come on in. You can drink.');
}