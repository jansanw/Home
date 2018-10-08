/*通过mutations间接更新state的多个方法的对象*/
import {
  CHANGE_MOREFLAG
}  from "./mutation_type";

export default {
  //存储标识
  FLAGDATA({commit},moreFlag)  {
    commit(CHANGE_MOREFLAG, {moreFlag});
  },


}
