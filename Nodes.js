
```bash
npm install qrcode
```
```javascript
const QRCode = require('qrcode');

const botLink = 'https://github/Charleskenya1/CHARLESKE';

QRCode.toFile('bot-qr.png', botLink, {
  color: {
    dark: '#000',  // QR code color
    light: '#FFF', // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as bot-qr.png');
});
```

This will create an image named *bot-qr.png* that links to your bot.

---

3. *Optional: Generate QR in Base64 (for Web)*
If you're serving it on a website:
```javascript
QRCode.toDataURL(botLink, function (err, url) {
  if (err) throw err;
  // `url` is a base64-encoded image you can embed in HTML
  console.log(url);
});
```

You can embed it like:
```html
<img src="data:image/png;base64,..." />
``
