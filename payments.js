// const payments = Square.payments(APPLICATION_ID, LOCATION_ID);
var qrcode = '?src=webqr';
var check = location.search;

var isRan = 0;

function checkScannerYn() {
    if(isRan == 0) {
        if (qrcode == check) {
            //
            alert("qr code scanned");
            isRan++
        }
    }
    //
}

setInterval(checkScannerYn, 3000)

