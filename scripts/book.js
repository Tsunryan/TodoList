function BookNow(userName, userEmail, userPax, userRemarks, userTime) {
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            date: userRemarks,
            time: userTime
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;
        let userTime = document.getElementById("userTime").value;

        BookNow(userName, userEmail, userPax, userRemarks, userTime);

    });
});