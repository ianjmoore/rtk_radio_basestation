const {SerialPort} = require('serialport')

const serial_in_port_id       = "\\\\.\\COM31" // on Base Computer this is RTK Basestation, on Rover Computer this is Rover Radio
const serial_in_port_baudrate = 921600; // configure for application

const serial_out_port_id       = "\\\\.\\COM11" // on Base Computer this is Base Radio, on Rover Computer this is GQ7 (AUX)
const serial_out_port_baudrate = 921600; // configure for application


const serial_in_port  = new SerialPort({path: serial_in_port_id, baudRate: serial_in_port_baudrate});
const serial_out_port = new SerialPort({path: serial_out_port_id, baudRate: serial_out_port_baudrate});


serial_in_port.on('data', function (data) {
  console.log('Got Data of size: ' + data.length.toString());
  serial_out_port.write(data);
})


serial_in_port.on('error', function (error) {
  console.log('Serial port error: ' + error);
})
