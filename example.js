const MiBand4 = require('./index');
const {NOTIFICATION_TYPES} = MiBand4.constants();
const mac = 'E3:4D:12:48:5C:FD'; // set your miband4 address

async function send(message) {
  const mi = new MiBand4();
  await mi.connect(mac);

  const revision = await mi.getRevision();
  const hrdw_revision = await mi.getHRDWRevision();
  const serial = await mi.getSerial();
  const current_time = await mi.getTime();
  const battery = await mi.getBattery();

  console.log({
  	revision,
  	hrdw_revision,
  	serial,
  	current_time,
  	battery,
  })

  await mi.sendNotification(message, NOTIFICATION_TYPES.msg);

  await mi.disconnect();
}

send('Привет world');