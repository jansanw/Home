/*直接更新state的多个方法的对象*/

import {
  CHANGE_MOREFLAG,
  ASSCEFLAG
}  from "./mutation_type";
export default {
  //更改更多页面的标识
  [CHANGE_MOREFLAG] (state, {moreFlag}) {
    state.moreFlag = moreFlag;
  },
  //更改景观漫游标识
  [ASSCEFLAG] (state, {assceFlag}) {
    state.assceFlag = assceFlag;
  },

}
