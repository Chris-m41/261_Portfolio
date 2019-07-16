function loadQuote() {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var x = data.message;
    document.getElementById("myData").innerHTML = x;
    //console.log(x);
    }
    loadKanyeQuote();
    //loadTaylorQuote();
}

function loadKanyeQuote() {
    fetch('https://api.kanye.rest')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var x = data.quote;
    document.getElementById("kanyeData").innerHTML = x;
    }
}

// https://api.baelor.io/

function loadTaylorQuote() {
    fetch('https://api.baelor.io/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var x = data.quote;
    document.getElementById("TaylorData").innerHTML = x;
    }
}