# miband4

Simple bluetooth connector for Mi Band 4 (Node.js)

## Setup
```sh
npm i miband4
```

## Example
Sending notifications

```javascript
const MiBand4 = require('./index');
const {NOTIFICATION_TYPES} = MiBand4.constants();
const mac = 'E3:4D:12:48:5C:FD'; // MAC of your band

async function send(message) {
  const mi = new MiBand4();
  await mi.connect(mac);
  await mi.sendNotification(message, NOTIFICATION_TYPES.call);
  await mi.disconnect();
}

send('Привет world');
```

## Notification types
| Type | Description |
| --- | --- |
| `msg` | Text with message icon |
| `sms` | Text with sms icon |
| `missed` | Text with missed call icon |
| `call` | Call notification with text |
