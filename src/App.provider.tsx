import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MoodOptionType, MoodOptionWithTimestamp } from './types';

type AppData = {
  moodList: MoodOptionWithTimestamp[]
}

const dataKey = 'my-app-data'

const setAppData = async (data: AppData) => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(data))
  } catch (error) {
    
  }
}

const getAppData = async (): Promise<AppData | null>  => {
  try {
    const result = await AsyncStorage.getItem(dataKey)
    if (result) {
      return JSON.parse(result)
    } 
  } catch (error) {
    
  }

  return null
}

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectedMood: (mood: MoodOptionType) => void;
  handeDeleteMood: (mood: MoodOptionWithTimestamp) => void;
}

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectedMood: () => {},
  handeDeleteMood: () => {}
})

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])
  const handleSelectedMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => {
      const newMoodList = [
        ...current,
        { mood: selectedMood, timestamp: Date.now() }
      ]

      setAppData({ moodList: newMoodList })

      return newMoodList
    })
  }, [])

  const handeDeleteMood = useCallback((mood: MoodOptionWithTimestamp) => {
    setMoodList(current => {
      const newMoodList = current.filter(
        val => val.timestamp !== mood.timestamp
      )

      setAppData({ moodList: newMoodList })
      return newMoodList
    })
  }, [])

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData()
      if (data) {
        setMoodList(data.moodList)
      }
    }

    fetchAppData()
  }, [])

  return (
    <AppContext.Provider value={{ moodList, handleSelectedMood, handeDeleteMood }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
