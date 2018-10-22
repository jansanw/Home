import axios from "axios";
axios.interceptors.response.use((res)=>{
  return res.data.data;
});

//获取天气
export let getResult = (app_id,start_date,end_date,idx,sign)=> {
  return axios.get(`/api/h5/api/ctr_core_data?app_id=${app_id}&start_date=${start_date}&end_date=${end_date}&idx=${idx}&sign=${sign}`);
};
