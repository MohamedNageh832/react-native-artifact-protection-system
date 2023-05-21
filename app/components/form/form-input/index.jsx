import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import {externalStyles} from './styles';

const FormInput = ({
  value,
  placeholder,
  style,
  inputStyle,
  type,
  isPending,
  onFocus,
  onBlur,
  onChangeText,
  errorMessage,
  ...otherProps
}) => {
  const styles = externalStyles({isPending});

  const isPassword = type === 'password';

  const handleFocus = e => {
    if (onFocus) onFocus(e);
  };

  const handleBlur = e => {
    if (onBlur) onBlur(e);
  };

  const handleChange = value => {
    if (onChangeText) onChangeText(value);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        textContentType={type ? type : 'none'}
        autoCorrect={!isPassword}
        secureTextEntry={isPassword}
        style={[styles.input, inputStyle]}
        value={value}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
        editable={!isPending}
        {...otherProps}
      />
      {isPending && (
        <ActivityIndicator style={styles.activityIndicator} size="small" />
      )}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default FormInput;
