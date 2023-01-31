import getRealm from "../Database";

interface propsShowHomeDB {
  id: number,
  showHome: string,
  appStartDate: string,
}

const realm = await getRealm();

const setShowHome = (props:propsShowHomeDB) => {
  try {
    const show = realm.write(()=>{
      realm.create("change_navigation",{
        showHome: props.showHome,
        appStartData: props.appStartDate
      })
    })
    realm.close()
    return show
  } catch (error) {
   return console.log("erro setShow Home: ", error)
  }
}

const checkShowHome = (props:propsShowHomeDB) => {
  try {
    const nav = realm.objects("change_navigation").filtered("_id = $0", props.id)
    realm.close()
    return nav
  } catch (error) {
    return console.log("erro checkShow Home: ", error)
  }
}

export default {
  setShowHome,checkShowHome
}