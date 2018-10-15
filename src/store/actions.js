/*通过mutations间接更新state的多个方法的对象*/
import {
  CHANGE_MOREFLAG,
  ASSCEFLAG
}  from "./mutation_type";

export default {
  //存储更多动态组件的标识
  FLAGDATA({commit},moreFlag)  {
    commit(CHANGE_MOREFLAG, {moreFlag});
  },
  //存储景观漫游的标识
  ASSCEGDATA({commit},assceFlag)  {
    commit(ASSCEFLAG, {assceFlag});
  },

}
