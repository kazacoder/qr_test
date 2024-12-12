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


const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
const html5QrCode = new Html5Qrcode("reader");


const handleClickAdvanced = () => {
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // props.onResult(decodedText);
        handleStop();
    };
    html5QrCode.start(
        {facingMode: "environment"},
        qrConfig,
        qrCodeSuccessCallback
    );
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
};


document.getElementById('scan').addEventListener('click', handleClickAdvanced);