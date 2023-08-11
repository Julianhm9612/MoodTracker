import React from 'react';
import { StyleSheet, ImageBackground, Pressable } from 'react-native';
// import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

// const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable)

const imageUrl =
  'https://images.unsplash.com/photo-1509434187-a980e3007ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80';

export const Home: React.FC = () => {
  const appContext = useAppContext()

  // const shared = useSharedValue(0)
  // const style = useAnimatedStyle(
  //   () => ({
  //     transform: [{ translateX: shared.value }]
  //   }), []
  // )

  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <MoodPicker handleSelectedMood={appContext.handleSelectedMood} />
      {/* <ReanimatedPressable
        onPress={() => {
          shared.value = withTiming(shared.value + 20, { duration: 1000 })
        }}
        style={[styles.square, style]}
      /> */}
    </ImageBackground>
    // <View style={styles.container}>
    //   <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
    //   <View style={[StyleSheet.absoluteFill, {justifyContent: 'center'}]}>
    //     <MoodPicker handleSelectedMood={appContext.handleSelectedMood} />
    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'lightgreen'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
