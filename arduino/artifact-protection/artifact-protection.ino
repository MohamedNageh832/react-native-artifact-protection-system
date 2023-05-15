#include <OneWire.h>
#include <DallasTemperature.h>
#include <SoftwareSerial.h>

// Constants
// pins
const int tempretue_sensor_pin = 2;
const int bluetooth_tx_pin = 3;
const int bluetooth_rx_pin = 4;
const int ir_sensor_pin = 5;
const int buzzer_pin  = 10;

// values
const String tempreture_id = "temp";
const int warningTemp = 30;
const int dangerTemp = 40;

#define ONE_WIRE_BUS tempreture_sensor_pin;
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
SoftwareSerial Bluetooth(bluetooth_tx_pin, bluetooth_rx_pin);

float last_transmitted_temp = 0;


void setup(void) {
  Serial.begin(9600);
  Bluetooth.begin(9600);
  sensors.begin();
}

void loop(void) { 
  sensors.requestTemperatures();
  float current_temp = sensors.getTempCByIndex(0);

  if (current_temp != DEVICE_DISCONNECTED_C) {
    if (abs(current_temp - last_transmitted_temp) >= 1) {
      String msg = tempreture_id + ":" + String(current_temp) + "\r";

      Bluetooth.write(msg.c_str());
      last_transmitted_temp = current_temp;
    }
  } else {
    Serial.println("Error: Could not read temperature data");
  }

  if (Bluetooth.available()) {
    String bt_msg;

    while (Bluetooth.available()) {
      bt_msg += Bluetooth.read();
    }

    bt_msg += "\r";
    Bluetooth.write(bt_msg.c_str());
  }
}
