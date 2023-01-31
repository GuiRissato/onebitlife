import Realm from "realm";
import { Change_Navigation, HabitScehma } from "./schema";

const getRealm = async () => await Realm.open({
  path: "decode-app",
  schema:[HabitScehma,Change_Navigation]
})

export default getRealm