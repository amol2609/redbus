//this id returns the id of current
var allSeats = document.querySelectorAll(".box")

var price = 500;

for (let i = 0; i < allSeats.length; i++) {
    allSeats[i].addEventListener("click", selectSeat);
}
function selectSeat() {
    console.log(this.id);
    if(
        !document.querySelector(`#${this.id}`).classList.contains("booked"))
        {
        
        if (document.querySelector(`#${this.id}`).classList.contains("selected")) {
            document.querySelector(`#${this.id}`).classList.remove("selected")
        }
        
        else {
            document.querySelector(`#${this.id}`).classList.add("selected")
        }
        displaydata();
    }
        
function displaydata(){
    var seatsSelected = document.querySelectorAll(".selected").length;
    var total = seatsSelected * price;
    console.log(seatsSelected);
    document.querySelector("#seat").innerHTML = seatsSelected;

    document.querySelector("#total").innerHTML = total;

    document.querySelector("#availableSeats").innerHTML = allSeats.length - bookedSeats;
    document.querySelector("#totalSeats").innerHTML = allSeats.length;
}
   

}


function bookSeat() {
    var bookedSeats = document.querySelectorAll(".booked").length;
    var selectedSeats = document.querySelectorAll(".selected");
    console.log(bookedSeats);

    for (let index = 0; index < selectedSeats.length; index++) {
        document.querySelector(`#${selectedSeats[index].id}`).classList.add("booked")
        document.querySelector(`#${selectedSeats[index].id}`).classList.remove("selected")
    }
    document.querySelector("#bookedSeats").innerHTML = bookedSeats;
     displaydata();
}

