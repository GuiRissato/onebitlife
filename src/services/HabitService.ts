import getRealm from '../Database'

export interface propsHabitDB {
  habitArea: string,
  habitName: string,
  habitFrequency: string,
  habitNotification: boolean,
  habitNotificationFrequency: string | undefined,
  habitNotificationTime: string | undefined,
  daysWithoutChecks: number | undefined,
  progressBar: number,
  habitIsChecked: boolean | undefined,
  habitChecks: number | undefined,
  lastCheck: string | Date ,
  hour: string| undefined,
  weekday: string | undefined
}

const realm = await getRealm();

const createHabit = (props:propsHabitDB) => {
  try {
    realm.write(()=>{
     realm.create("Habit",{
      habitArea: props.habitArea,
      habitName: props.habitName,
      habitFrequency: props.habitFrequency,
      habitNotification: props.habitNotification,
      habitNotificationFrequency: props.habitNotificationFrequency,
      habitNotificationTime: props.habitNotificationTime,
      daysWithoutChecks: props.daysWithoutChecks,
      progressBar:props.progressBar,
      habitIsChecked: props.habitIsChecked,
      habitChecks: props.habitChecks,
      lastCheck: props.lastCheck,
      hour: props.hour,
      weekday: props.weekday
     })
    })
    realm.close()
    
  } catch (error) {
    return console.log('err write on database: ', error)
  }
}

const findByArea = (props:propsHabitDB) => {
  try {
    const habit = realm.objects("Habit").filtered("habitArea = $0", props.habitArea)
    realm.close()
    return habit
  } catch (error) {
    return console.log('err select on database: ', error)
  }
}

const updateHabit = (props:propsHabitDB) => {
  try {
    const uHabit = realm.objects<propsHabitDB>("Habit").filtered("habitArea=$0",props.habitArea)
    const uwHabit = realm.write(()=>{
        uHabit[0].habitName = props.habitName
        uHabit[0].habitFrequency = props.habitFrequency
        uHabit[0].habitNotification = props.habitNotification
        uHabit[0].habitNotificationFrequency = props.habitNotificationFrequency
        uHabit[0].habitNotificationTime = props.habitNotificationTime
        uHabit[0].habitArea = props.habitArea
      })
    realm.close()
    return  uwHabit
  } catch (error) {
    return console.log('err update on database: ', error)
  }
}

const deleteByName = (props:propsHabitDB) => {
  try {
   const dBName = realm.write(()=>{
      const dHabit = realm.objects("Habit").filtered("habitArea=$0",props.habitArea)
      realm.delete(dHabit)
    })
    realm.close()
    return dbName
  } catch (error) {
    return console.log('err delete on database: ', error)
  }
}

const changeProgress = (props:propsHabitDB) => {
  try {
    const uHabit = realm.objects<propsHabitDB>("Habit").filtered("habitArea=$0",props.habitArea)
   const uCP = realm.write(()=>{
       uHabit[0].progressBar = props.progressBar
    })
    realm.close()
    return uCP
  } catch (error) {
    return console.log('err change progress on database: ', error)
  }
}

export default {
  createHabit,
  findByArea,
  updateHabit,
  deleteByName,
  changeProgress,
}
