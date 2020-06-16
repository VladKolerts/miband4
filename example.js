const MiBand4 = require('./index');
const {NOTIFICATION_TYPES} = MiBand4.constants();
const mac = 'E3:4D:12:48:5C:FD';

async function send(message) {
  const mi = new MiBand4();
  await mi.connect(mac);
  await mi.sendNotification(message, NOTIFICATION_TYPES.call);
  await mi.disconnect();
}

send('Привет world');