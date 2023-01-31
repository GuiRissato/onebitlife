interface propsAnimationStatus{
  mindHabit: number,
  moneyHabit: number,
  bodyHabit: number,
  funHabit: number,
  setMind: any,
  setMoney: any,
  setRobot: any,
}

function animationStatus(
  props: propsAnimationStatus
) {
  if (
    props.mindHabit === 0 ||
    props.moneyHabit === 0 ||
    props.bodyHabit === 0 ||
    props.funHabit === 0
  ) {
    props.setMind("");
    props.setMoney("");
    props.setRobot(require("../assets/robot/robot-00-00.json"));
  } else {
    if (props.mindHabit === 0.5) {
      props.setMind(require("../assets/education/education-50.json"));
    } else if (props.mindHabit === 0.25) {
      props.setMind(require("../assets/education/education-25.json"));
    } else {
      props.setMind(require("../assets/education/education-100.json"));
    }

    if (props.moneyHabit === 0.5) {
      props.setMoney(require("../assets/money/money-50.json"));
    } else if (props.moneyHabit === 0.25) {
      props.setMoney(require("../assets/money/money-25.json"));
    } else {
      props.setMoney(require("../assets/money/money-100.json"));
    }
    if (props.bodyHabit === 0.25 && props.funHabit === undefined) {
      props.setRobot(require("../assets/robot/robot-100-25.json"));
    } else if (props.bodyHabit === 0.5 && props.funHabit === undefined) {
      props.setRobot(require("../assets/robot/robot-100-50.json"));
    } else if (props.bodyHabit === 1 && props.funHabit === undefined) {
      props.setRobot(require("../assets/robot/robot-100-100.json"));
    } else if (props.bodyHabit === undefined && props.funHabit === 0.25) {
      props.setRobot(require("../assets/robot/robot-100-25.json"));
    } else if (props.bodyHabit === undefined && props.funHabit === 0.5) {
      props.setRobot(require("../assets/robot/robot-100-50.json"));
    } else if (props.bodyHabit === undefined && props.funHabit === 1) {
      props.setRobot(require("../assets/robot/robot-100-100.json"));
    } else if (props.bodyHabit === 0.25 && props.funHabit === 1) {
      props.setRobot(require("../assets/robot/robot-100-25.json"));
    } else if (props.bodyHabit === 0.5 && props.funHabit === 0.5) {
      props.setRobot(require("../assets/robot/robot-50-50.json"));
    } else if (props.bodyHabit === 0.25 && props.funHabit === 0.5) {
      props.setRobot(require("../assets/robot/robot-50-25.json"));
    } else if (props.bodyHabit === 1 && props.funHabit === 0.5) {
      props.setRobot(require("../assets/robot/robot-50-100.json"));
    } else if (props.bodyHabit === 0.5 && props.funHabit === 0.25) {
      props.setRobot(require("../assets/robot/robot-25-50.json"));
    } else if (props.bodyHabit === 0.25 && props.funHabit === 0.25) {
      props.setRobot(require("../assets/robot/robot-25-25.json"));
    } else if (props.bodyHabit === 1 && props.funHabit === 0.25) {
      props.setRobot(require("../assets/robot/robot-25-100.json"));
    } else if (props.bodyHabit === 0.5 && props.funHabit === 1) {
      props.setRobot(require("../assets/robot/robot-100-50.json"));
    } else if (props.bodyHabit === 0.25 && props.funHabit === 1) {
      props.setRobot(require("../assets/robot/robot-100-25.json"));
    } else {
      props.setRobot(require("../assets/robot/robot-100-100.json"));
    }
  }
}

export default { animationStatus };