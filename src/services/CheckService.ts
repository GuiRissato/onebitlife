import getRealm from "../Database";
import HabitService from "./HabitService";
import { propsHabitDB } from './HabitService';

const realm = await getRealm();

const checkHabit = (props:propsHabitDB) =>{
  try {
    const uHabit = realm.objects<propsHabitDB>("Habit").filtered("habitArea=$0",props.habitArea)
    realm.write(()=>{
       uHabit[0].lastCheck = props.lastCheck
       uHabit[0].habitIsChecked = props.habitIsChecked
       uHabit[0].habitChecks = props.habitChecks
    })
    realm.close()
  } catch (error) {
    return console.log('error update checkHabit on database: ', error)
  }
}

const removeCheckHabit = (props:propsHabitDB) => {
  try {
    const uHabit = realm.objects<propsHabitDB>("Habit").filtered("habitArea=$0",props.habitArea)
    realm.write(()=>{
       uHabit[0].habitIsChecked = props.habitIsChecked
    })
    realm.close()
  } catch (error) {
    return console.log('error update removeCheckHabit on database: ', error)
  }
}

const removeCheck = (mindHabit:propsHabitDB,moneyHabit:propsHabitDB, bodyHabit:propsHabitDB,funHabit:propsHabitDB) => {
  const date = new Date()
  
  // mind
  const mindLastCheck = date.getDate() - (new Date(mindHabit?.lastCheck).getDate() + 1)

  if(mindHabit?.habitFrequency == "Diario" && mindLastCheck > 0){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: mindHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(mindHabit?.habitFrequency == "Semanal" && mindLastCheck > 7){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: mindHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(mindHabit?.habitFrequency == "Mensal" && mindLastCheck > 30){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: mindHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  
  // money
  const moneyLastCheck = date.getDate() - (new Date(moneyHabit?.lastCheck).getDate() + 1)

  if(moneyHabit?.habitFrequency == "Diario" && moneyLastCheck > 0){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: moneyHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(moneyHabit?.habitFrequency == "Semanal" && moneyLastCheck > 7){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: moneyHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(moneyHabit?.habitFrequency == "Mensal" && moneyLastCheck > 30){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: moneyHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }

  //body
  const bodyLastCheck = date.getDate() - (new Date(bodyHabit?.lastCheck).getDate() + 1)

  if(bodyHabit?.habitFrequency == "Diario" && bodyLastCheck > 0){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: bodyHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(bodyHabit?.habitFrequency == "Semanal" && bodyLastCheck > 7){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: bodyHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(bodyHabit?.habitFrequency == "Mensal" && bodyLastCheck > 30){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: bodyHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }

  // Fun
  const funLastCheck = date.getDate() - (new Date(funHabit?.lastCheck).getDate() + 1)

  if(funHabit?.habitFrequency == "Diario" && funLastCheck > 0){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: funHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(funHabit?.habitFrequency == "Semanal" && funLastCheck > 7){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: funHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
  if(funHabit?.habitFrequency == "Mensal" && funLastCheck > 30){
    removeCheckHabit({
      habitIsChecked: false,
      habitArea: funHabit?.habitArea,
      habitName: "",
      habitFrequency: "",
      habitNotification: false,
      habitNotificationFrequency: undefined,
      habitNotificationTime: undefined,
      daysWithoutChecks: undefined,
      progressBar: 0,
      habitChecks: undefined,
      lastCheck: "",
      hour: undefined,
      weekday: undefined
    })
  }
}

const checkStatus = (mindHabit:propsHabitDB,moneyHabit:propsHabitDB, bodyHabit:propsHabitDB,funHabit:propsHabitDB) => {
  const date:Date = new Date()

  const mindLastCheck:any = date.getDate() - (new Date(mindHabit?.lastCheck).getDate())

  const auxMind:number = parseInt(mindLastCheck.toString()) / (1000 *3600 * 24)
  
  const mindDiff:number = parseInt(auxMind.toString())

  // mind
  if(mindHabit?.habitFrequency == "Diario"){
    if(mindDiff == 1){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }else if(mindDiff == 2){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }else if(mindDiff >= 3){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }
  }else if(mindHabit?.habitFrequency == "Semanal"){
    if(mindDiff == 8){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }else if(mindDiff == 9){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }else if(mindDiff >= 10){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }
  }else if(mindHabit?.habitFrequency == "Mensal"){
    if(mindDiff == 31){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }else if(mindDiff == 32){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }else if(mindDiff >= 33){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: mindHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined
      })
    }
  }

  // money
  const moneyLastCheck:any = date.getDate() - (new Date(moneyHabit?.lastCheck).getDate())

  const auxMoney:number = parseInt(moneyLastCheck.toString()) / (1000 *3600 * 24)
  
  const moneyDiff:number = parseInt(auxMoney.toString())

  if(moneyHabit?.habitFrequency == "Diario"){
    if(moneyDiff == 1){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(moneyDiff == 2){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(moneyDiff >=3){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }else if(moneyHabit?.habitFrequency == "Semanal"){
    if(moneyDiff == 7){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(moneyDiff == 8){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(moneyDiff >=9){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }else if(moneyHabit?.habitFrequency == "Mensal"){
    if(moneyDiff == 31){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(moneyDiff == 32){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(moneyDiff >=33){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: moneyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }

  // body
  const bodyLastCheck:any = date.getDate() - (new Date(bodyHabit?.lastCheck).getDate())

  const auxBody:number = parseInt(bodyLastCheck.toString()) / (1000 *3600 * 24)
  
  const BodyDiff:number = parseInt(auxBody.toString())

  if(bodyHabit?.habitFrequency == "Diario"){
    if(BodyDiff == 1){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (BodyDiff == 2){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (BodyDiff >=3){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }else if(bodyHabit?.habitFrequency == "Semanal"){
    if(BodyDiff == 7){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (BodyDiff == 8){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (BodyDiff >=9){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }else if(bodyHabit?.habitFrequency == "Mensal"){
    if(BodyDiff == 31){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (BodyDiff == 32){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (BodyDiff >=33){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: bodyHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }

  // fun 
  const funLastCheck:any = date.getDate() - (new Date(funHabit?.lastCheck).getDate())

  const auxFun:number = parseInt(funLastCheck.toString()) / (1000 *3600 * 24)
  
  const FunDiff:number = parseInt(auxFun.toString())

  if(funHabit?.habitFrequency == "Diario"){
    if(FunDiff == 1){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(FunDiff == 2){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (FunDiff >=3){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }else if(funHabit?.habitFrequency == "Semanal"){
    if(FunDiff == 7){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(FunDiff == 8){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (FunDiff >=9){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }else if(funHabit?.habitFrequency == "Mensal"){
    if(FunDiff == 31){
      HabitService.changeProgress({
        progressBar: 0.5,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if(FunDiff == 32){
      HabitService.changeProgress({
        progressBar: 0.25,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }else if (FunDiff >=33){
      HabitService.changeProgress({
        progressBar: 0,
        habitArea: funHabit?.habitArea,
        habitName: "",
        habitFrequency: "",
        habitNotification: false,
        habitNotificationFrequency: undefined,
        habitNotificationTime: undefined,
        daysWithoutChecks: undefined,
        habitIsChecked: undefined,
        habitChecks: undefined,
        lastCheck: "",
        hour: undefined,
        weekday: undefined})
    }
  }

}

export default {checkHabit,removeCheck,removeCheckHabit,checkStatus}


