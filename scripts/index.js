function CastNow(addCast) {
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/castName/castname';
    let body = {
        castname: {
            name: addCast
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
            alert(json.castname.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("BtnCast").addEventListener("click", function () {
        let addCast = document.getElementById("addCast").value;

        CastNow(addCast);

    });
});

function GetCast() {
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/castName/castname';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.castname);
            let castList = document.getElementById('cast-list');

            for (let i = 0; i < json.castname.length; i++) {
                let cName = json.bookings[i].name;


                let row = castList.insertRow(castList.rows.length);
                row.insertCell(0).innerHTML = "<li><a href='https://www.google.com/search?q=" + cName + "'></a></li>";

            }
        }
window.addEventListener("load", function () {
            document.getElementById("BtnCast").addEventListener("click", function () {
                GetCast();
            });
        });
