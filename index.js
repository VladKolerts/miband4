const {createBluetooth} = require('node-ble')
const {bluetooth, destroy} = createBluetooth();
const {
  UUIDS,
  CHAR_UUIDS,
  NOTIFICATION_TYPES,
} = require('./constants');


class MiBand4 {

  static constants() {
    return {
      NOTIFICATION_TYPES,
    };
  }

  constructor() {
    this.init();
  }

  init() {
    this.mac = null;
    this.device = null;
    this.charNotifications = null;
  }

  async connect(mac) {
    if (!mac) throw 'MAC not defined';

    const adapter = await bluetooth.defaultAdapter();
    console.log('wait device');
    this.device = await adapter.waitDevice(mac);
    console.log('connecting device');
    await this.device.connect();
    this.mac = mac;
    console.log('connected', mac);
    const gatt = await this.device.gatt();

    const serviceNotification = await gatt.getPrimaryService(UUIDS.notifications);
    this.charNotifications = await serviceNotification.getCharacteristic(CHAR_UUIDS.notifications);
  }

  async disconnect() {
    console.log('disconnect', this.mac);
    await this.device.disconnect();
    this.init();
  }

  async sendNotification(message, type = NOTIFICATION_TYPES.msg) {
    console.log('sendNotification', {message});
    return this.charNotifications.writeValue(Buffer.from(type + message));
  }
}

module.exports = MiBand4;