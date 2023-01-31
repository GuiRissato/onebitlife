export const HabitScehma:Realm.ObjectSchema = {
  name: "Habit",
  primaryKey: "_id",
  properties:{
    _id: {type: "int", indexed: true},
    habitArea: 'string',
    habitName: 'string',
    habitFrequency: 'string',
    habitNotification: {type: "boolean", default: false},
    habitNotificationFrequency: 'string?',
    habitNotificationTime: 'string?',
    daysWithoutChecks: 'int?',
    progressBar:{type: 'int', default: 0},
    habitIsChecked: 'boolean?',
    habitChecks: 'int?',
    lastCheck: 'string?',
    hour:"string?",
    weekday: "string?"
  }
}

export const Change_Navigation:Realm.ObjectSchema = {
  name: "change_navigation",
  primaryKey: "_id",
  properties: {
    _id: {type: "int", indexed: true},
    showHome: "string",
    appStartData: "string",
  }
}