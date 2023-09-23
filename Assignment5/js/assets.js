const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image":"1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
];

    const table_body = document.querySelector('#table_body');

    function readData(){
        let table_data = '';
        for(asset of assets){
            table_data += `<tr><td><input type="checkbox" value="${asset.id}">`;
            table_data += `<td>${asset.id}</td>`;
            table_data += `<td>${asset.name}</td>`;
            table_data += `<td>${asset.status === 1 ? "Normal" : "Lost"}</td></tr>`;
        }
        table_body.innerHTML = table_data;
        qrcode();
    }

    function qrcode(){
        document.querySelector('#qrcode_generate').onclick = function(){
            const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            const qrcodeContainer = document.getElementById('qrcode');

            if(selectedCheckboxes.length > 0){
                qrcodeContainer.innerHTML = "";

                selectedCheckboxes.forEach((checkbox) => {
                    const assetId = checkbox.value;
                    const qrCodeDiv = document.createElement("div");
                    qrCodeDiv.style.padding = "16px 0px 16px 0px";

                    const idSpan = document.createElement("span");
                    idSpan.style.fontSize = "25px";
                    idSpan.textContent = assetId;

                    const qrcode = new QRCode(qrCodeDiv, {
                        text: `${assetId}`,
                        width: 200,
                        height: 200,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: QRCode.CorrectLevel.H,
                      });
                      qrcodeContainer.appendChild(qrCodeDiv);
                      qrCodeDiv.appendChild(idSpan);
                } );
            }
            else{
                alert("Please select an ID to generate a QR code.");
            }
        }
    }

    function signout(){
        const signout = document.querySelector('button[id=sign_out]').onclick = function(){
            window.location.href = 'login.html';
        }
    }
    readData();
    signout();
