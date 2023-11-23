import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
interface CustomInputProps {
  icon: React.ReactNode;
  placeholder: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  icon_two?: React.ReactNode;
  type: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  placeholder,
  style,
  inputStyle,
  icon_two = <Icon name="verified" size={16} color="gray" />,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[styles.container, style, styles.inputContainer]}>
      <View style={styles.inputContainer}>
        {icon}
        <TextInput
          placeholderTextColor="gray"
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          secureTextEntry={!showPassword}
        />
      </View>
      {type === 'password' ? (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      ) : (
        icon_two
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 12,
    position: 'relative',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#000',
    paddingHorizontal: 12,
    flex: 1,

    maxWidth: 250,
  },
});

export default CustomInput;
