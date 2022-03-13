/* Pics to be hidden/displayed. */
// let icecube = document.getElementById('icecube');
// let smh = document.getElementById('smh');
// let obama = document.getElementById('obama');
// let idubbz = document.getElementById('idubbz');
// let arnold = document.getElementById('arnold');

/* Shows pic corresponding to tip option */
function displayImg() {
    let select = document.getElementById("tip");
    let value = select.options[select.selectedIndex].value;
    let name = '';
    
    switch(value) {
        case '0' :
            name = 'food_guy.jpeg';
            break;
        case '.01' :
            name = 'smh.jpeg';
            break;
        case '.05' :
            name = 'icecube.jpg';
            break;
        case '.1' :
            name = 'obama.jpg';
            break;
        case '.15':
            name = 'arnold.jpg';
            break;
        case '.2' :
            name = 'doge.jpeg';
            break;
    }

    var pic = document.getElementById("pic"); 
    var imgSrc = 'images/' + name;
    pic.setAttribute('src', imgSrc);
}
// Calculates the total price of the meal and price per person.
function calculate() {

    const totalDisplay = document.getElementById('totalDisplay'); 
    const splitTotal = document.getElementById('splitTotal');
    
    // clears previous total
    totalDisplay.innerHTML = '';
    splitTotal.innerHTML = '';

    const price = document.getElementById('total').value;
    const tip =  document.getElementById('tip').value;
    const numPeople = document.getElementById('people').value;

    // Computes total price and price per person.
    let totalPrice = +(price * (tip)) + +price;
    let pricePerPerson =  totalPrice / numPeople;

    // Rounds results to two decimal palces
    totalPrice = totalPrice.toFixed(2);
    pricePerPerson = pricePerPerson.toFixed(2);

    // Creates text output.
    totalPrice = document.createTextNode(totalPrice);
    pricePerPerson = document.createTextNode( pricePerPerson);

    // Displays text output to user.
    totalDisplay.appendChild(totalPrice);
    splitTotal.appendChild(pricePerPerson);
}