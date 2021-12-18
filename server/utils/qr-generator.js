const qr = require('qrcode');

async function generateQrCode(data) {
  try {
    const qrData = JSON.stringify(data);
    const qrCode = await qr.toDataURL(qrData);
  } catch(e) {
    console.log(e);
  }
}

module.exports = generateQrCode;