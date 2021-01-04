function CastList(addCast) {
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/castName/castname';
    let body = {
        castname: {
            castName: addCast
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
            alert(json.castname.castName + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("BtnCast").addEventListener("click", function () {
        let addCast = document.getElementById("addCast").value;

        CastList(addCast);

    });
});

function GetCast() {
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/castName/castname';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.bookings);
            let castList = document.getElementById('cast-list');
            let castName = [];



            for (let i = 0; i < json.castname.length; i++) {
                let cName = json.castname[i].castName;

                let li = castList.insertRow(castList.rows.length);
                li.innerHTML = "<li><a href='https://www.google.com/search?q=" + cName + "'>" + cName + "</a></li>"
            }
        }
window.addEventListener("load", function () {
            document.getElementById("cast-list").addEventListener("click", function () {
                GetCast();
            });
        });