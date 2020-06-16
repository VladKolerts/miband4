
const UUIDS = {
  notifications: '00001811-0000-1000-8000-00805f9b34fb',
};
const CHAR_UUIDS = {
  notifications: '00002a46-0000-1000-8000-00805f9b34fb',
};
const NOTIFICATION_TYPES = {
  msg: '\x01\x01',
  call: '\x03\x01',
  missed: '\x04\x01',
  sms: '\x05\x01',
}

module.exports = {
  UUIDS,
  CHAR_UUIDS,
  NOTIFICATION_TYPES,
}
