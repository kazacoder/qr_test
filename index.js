// const scanner = new Html5QrcodeScanner('reader', {
//     qrbox: {
//         width: 250,
//         height: 250,
//     },
//     fps: 20,
// });
//
// scanner.render(success, error);
//
// function success(result) {
//     console.log(result);
//     document.getElementById('result').innerHTML = `
//     <h2>Success!</h2>
//     <p>${result}</p>
//     `;
//
//     scanner.clear();
//
// }
//
// function error() {
//
// }


const scanner2 = new Html5Qrcode("reader")
console.log(scanner2)
const start = document.getElementById('scan');
const stop = document.getElementById('stop');
const qrBoxSize = {width: 300, height: 300}


const qrConfig = {fps: 10, qrbox: qrBoxSize};
const html5QrCode = new Html5Qrcode("reader");


const handleClickAdvanced = () => {
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // props.onResult(decodedText);
        console.log(decodedText);
        console.log(decodedResult);
        document.getElementById('result').innerHTML = `
            <h2>Success!</h2>
            <p>${decodedText}</p>
            `;
        handleStop();
    };
    html5QrCode.start(
        {facingMode: "environment"},
        qrConfig,
        qrCodeSuccessCallback
    )
        .then(function (result) {
            console.log(result);
            console.log(222);
        })
        .then(startControls(html5QrCode))

        .catch((err) => {
            console.log(err);
        });
    console.log(html5QrCode)
    return 1
};

const handleStop = () => {
    try {
        html5QrCode
            .stop()
            .then((res) => {
                html5QrCode.clear();
            })
            .catch((err) => {
                console.log(err.message);
            });
    } catch (err) {
        console.log(err);
    }
    stop.style.display = 'none';
    start.style.display = 'block';

};


function startControls(e) {
    console.log(e)
    console.log(e.qrRegion)
    stop.style.display = 'block';
    start.style.display = 'none';
    console.log(111)
    const qrRegion = document.getElementById('reader')
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.className = 'close-button';
    closeButton.style.left = (window.screen.width - qrBoxSize.width) / 2 + qrBoxSize.width - 8 + 'px';
    closeButton.style.top = (window.screen.height - qrBoxSize.height) / 2 + 8 + 'px';
    closeButton.addEventListener('click', handleStop);
    qrRegion.appendChild(closeButton);
}


start.addEventListener('click', handleClickAdvanced);
stop.addEventListener('click', handleStop);
