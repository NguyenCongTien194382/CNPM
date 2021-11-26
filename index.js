var quantity = 1;
var detailNumber = document.getElementsByClassName("detail-number");

function render(){
     const decreaseBtn = document.getElementsByClassName("btn-decrease");
     const increaseBtn = document.getElementsByClassName("btn-increase");
     
    increaseBtn[0].onclick = function(){
        quantity = quantity +1;
        console.log(quantity);
        render()
    }

    decreaseBtn[0].onclick = function(){
        if (quantity < 2) {
            return 1;
        }
        quantity = quantity -1;
        console.log(quantity);
        render()
    }
 }

render();