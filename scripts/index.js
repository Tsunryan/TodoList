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
