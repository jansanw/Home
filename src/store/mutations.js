/*直接更新state的多个方法的对象*/

import {
  CHANGE_MOREFLAG
}  from "./mutation_type";
export default {
  //更改标识
  [CHANGE_MOREFLAG] (state, {moreFlag}) {
    state.moreFlag = moreFlag;
  },

}
