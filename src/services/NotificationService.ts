import PushNotification from "react-native-push-notification"

interface propsCreateNotification{
  habitInput: (s:string|undefined) => void,
  frequencyInput: (s:string|undefined) => void,
  dayNotification: (s:string) => void,
  timeNotification: (s:string) => void

}

interface propsTriggerNotification{
  repeatType: string|undefined,
  hour: number,
  minute: number,
  repeats: boolean,
  weekday:number|null,
}
 
async function createNotification(
  props: propsCreateNotification
) {
  const habitHour = Number(props.timeNotification.toString().slice(0,2));
  const habitMinutes = Number(props.timeNotification.toString().slice(3, 5));

  let weekDay;

  if (props.dayNotification.toString() == "Domingo") {
    weekDay = 1;
  } else if (props.dayNotification.toString() == "Segunda") {
    weekDay = 2;
  } else if (props.dayNotification.toString() == "Terça") {
    weekDay = 3;
  } else if (props.dayNotification.toString() == "Quarta") {
    weekDay = 4;
  } else if (props.dayNotification.toString() == "Quinta") {
    weekDay = 5;
  } else if (props.dayNotification.toString() == "Sexta") {
    weekDay = 6;
  } else if (props.dayNotification.toString() == "Sábado") {
    weekDay = 7;
  }

  let triggerNotification:propsTriggerNotification;
  if (props.frequencyInput.toString() == "Diário") {
    triggerNotification = {
      repeatType: 'day',
      hour: habitHour,
      minute: habitMinutes,
      repeats: true,
      weekday: null
    };
  } else if (props.frequencyInput.toString() == "Semanal") {
    triggerNotification = {
      repeatType: 'week',
      repeats: true,
      weekday: weekDay,
      hour: habitHour,
      minute: habitMinutes,
    };
  }

  await PushNotification.scheduleLocalNotification( 
    {
      channelId: 'cdbicXk5SbasaqarK_vsU0:APA91bGjJuivsJLBagRKiNZOrNdsZjupNjbcIPqGuCruqpAgiBLDjLyUZ7G9oZEVbEIcQg4eJVyj8SK0BXTBmwHywq1cJ6ow9AkHq-yvKpxboLTV2wzvSc-Hs8tY37vVyk5Ls6uuZrR_',
      message: `${props.habitInput}`,
      title: `Lembre de hábito ${props.habitInput}`,
      date: new Date(),
      repeatType:`${triggerNotification.repeatType.toString()}`,
      repeatTime: ``,


      
    }
  )

async function deleteNotification(habitInput) {
  await Notifications.cancelScheduledNotificationAsync(habitInput).then(() => {
    console.log("Exclusão feita!");
  });
}

export default {
  createNotification,
  deleteNotification,
};