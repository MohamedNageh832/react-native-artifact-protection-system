#include <OneWire.h>
#include <DallasTemperature.h>
#include <SoftwareSerial.h>

// Constants
// pins
const int tempreture_sensor_pin = 2;
const int bluetooth_tx_pin = 3;
const int bluetooth_rx_pin = 4;
const int ir_sensor_pin = 5;
const int pir_sensor_pin = 6;
const int l293d_en_pin = 7;
const int l293d_a1_pin = A3; // Always make as vcc
const int l293d_a2_pin = A4; // Always make ground
const int buzzer_pin  = 10;
const int led_R_pin = A0;
const int led_G_pin = A1;
const int led_B_pin = A2;

// values
const String tempreture_id = "temp";

// Variables
int warning_temp = 30;
int danger_temp = 35;
bool alarm_transmitted = false;
bool is_active_alarm = false;
unsigned long alarm_time_start = 0;
unsigned long alarm_time_end = 0;
int current_alarm_iteration = 0;
String current_alarm_name;


#define ONE_WIRE_BUS tempreture_sensor_pin
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
SoftwareSerial Bluetooth(bluetooth_tx_pin, bluetooth_rx_pin);

float last_transmitted_temp = 0;

void fireAlarm(String alarm_name, int iterationsCount = -1, float rate = 1) {
  const int period = 1000 / rate;
  if (current_alarm_iteration == iterationsCount && alarm_name == current_alarm_name) {
    is_active_alarm = false;
    digitalWrite(buzzer_pin, LOW);
    return;
  } else if (alarm_name != current_alarm_name) {
    current_alarm_name = alarm_name;
    current_alarm_iteration = 0;
  }

  if (!is_active_alarm && millis() - alarm_time_end >= (period / 2)) {
    digitalWrite(buzzer_pin, HIGH);
    alarm_time_start = millis();
    is_active_alarm = true;
  } else if (is_active_alarm && millis() - alarm_time_start >= period) {
    digitalWrite(buzzer_pin, LOW);
    alarm_time_end = millis();
    is_active_alarm = false;

    current_alarm_iteration++;
  } 
}

void RGBLed(int r, int g, int b) {
  analogWrite(led_R_pin, r);
  analogWrite(led_G_pin, g);
  analogWrite(led_B_pin, b);
}

void setup(void) {
  Serial.begin(9600);
  Serial.println("hi");
  // Bluetooth.begin(9600);
  Bluetooth.println("Ready");
  sensors.begin();

  pinMode(ir_sensor_pin, INPUT);
  pinMode(buzzer_pin, OUTPUT);
  pinMode(led_R_pin, OUTPUT);
  pinMode(led_G_pin, OUTPUT);
  pinMode(led_B_pin, OUTPUT);
  pinMode(l293d_en_pin, OUTPUT);
  pinMode(l293d_a1_pin, OUTPUT);
  pinMode(l293d_a2_pin, OUTPUT);
  RGBLed(255, 0, 0);
  delay(1000);
  RGBLed(0, 255, 0);
  delay(1000);
  RGBLed(0, 0, 255);
  delay(1000);
}

void loop(void) { 
  Serial.println(digitalRead(ir_sensor_pin));

  // sensors.requestTemperatures();
  // float current_temp = sensors.getTempCByIndex(0);

  // if (current_temp != DEVICE_DISCONNECTED_C) {
  //   if (abs(current_temp - last_transmitted_temp) >= 0.5) {
  //     String msg = tempreture_id + ":" + String(current_temp) + "\r";

  //     Bluetooth.write(msg.c_str());
  //     last_transmitted_temp = current_temp;
  //   }

  //   if (current_temp >= danger_temp) {
  //     digitalWrite(l293d_en_pin, HIGH);
  //     analogWrite(l293d_a1_pin, 255);
  //     analogWrite(l293d_a2_pin, LOW);
  //     fireAlarm(true, 2);
  //     RGBLed(255, 0, 0);

  //   } else if (current_temp >= warning_temp) {
  //     digitalWrite(l293d_en_pin, HIGH);
  //     analogWrite(l293d_a1_pin, 120);
  //     analogWrite(l293d_a2_pin, LOW);
  //     fireAlarm(true, 1);
  //     RGBLed(0, 0, 255);
  //   } else {
  //     digitalWrite(l293d_en_pin, LOW);
  //     RGBLed(0, 255, 0);
  //   }
  // } else {
  //   Bluetooth.println("Error: Could not read temperature data");
  // }

  // if (Bluetooth.available()) {
  //   String bt_msg;

  //   while (Bluetooth.available()) {
  //     bt_msg += Bluetooth.read();
  //   }

  //   bt_msg += "\r";

  //   // if (bt_msg.index(''));
  //   Bluetooth.write(bt_msg.c_str());
  // }
   
  if (digitalRead(ir_sensor_pin)) {
    if (!alarm_transmitted) {
      Bluetooth.write("piece stolen\r");
      alarm_transmitted = true;
    }
  
    fireAlarm("stolen", 3);
  } else if (!digitalRead(ir_sensor_pin)) {
    if (alarm_transmitted) {
      Bluetooth.write("piece returned\r");
      alarm_transmitted = false;
    }

    fireAlarm("returned", 2, 3);
  }
}

