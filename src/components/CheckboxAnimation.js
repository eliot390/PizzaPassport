import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  pop: {
    0: { scale: 1, opacity: 1 },
    0.5: { scale: 1.5, opacity: 0.5 },
    1: { scale: 1, opacity: 1 },
  },
});

const CheckboxWithAnimation = () => {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const starViewRef = useRef(null)
  const checkboxRef = useRef(null)
  const fourHours = 4*60*60*1000

  const handlePress = () => {
    if (disabled) return;

    setChecked(!checked)
    if (checkboxRef.current) {
      checkboxRef.current.pop(500);
    }
    if (!checked && starViewRef.current) {
      starViewRef.current.bounceIn(800);
    }
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, fourHours)
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Animatable.View
        ref={checkboxRef}
        style={styles.checkbox}
        animation="pop"
        duration={500}
      >
        {checked && (
          <Animatable.View
            ref={starViewRef}
            style={styles.starContainer}
          >
            <Icon name="star" size={20} color="#ffd700" />
          </Animatable.View>
        )}
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    position: 'absolute',
  },
});

export default CheckboxWithAnimation;