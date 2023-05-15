import {ScrollView, Text, View} from 'react-native';
import {externalStyles} from './styles';
import ComponentCard from './component-card';
import {componentsImages} from './images';

export default function ComponentsState() {
  const styles = externalStyles();
  const components = [
    {
      image: componentsImages.tempretureSensorImage,
      text: 'Tempreture sensor',
      state: '',
    },
    {
      image: componentsImages.pirSensorImage,
      text: 'PIR sensor',
      state: '',
    },
    {
      image: componentsImages.irSensorImage,
      text: 'IR sensor',
      state: '',
    },
    {
      image: componentsImages.fanImage,
      text: 'Fan',
      state: '',
    },
    {
      image: componentsImages.servoMotorImage,
      text: 'Servo motor',
      state: '',
    },
    {
      image: componentsImages.buzzerImage,
      text: 'Buzzer',
      state: '',
    },
  ];

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.componentsList}>
      <View style={styles.container}>
        <Text style={styles.title}>Components state</Text>

        {components.map((component, i) => (
          <ComponentCard key={`component${i}`} data={component} />
        ))}
      </View>
    </ScrollView>
  );
}
