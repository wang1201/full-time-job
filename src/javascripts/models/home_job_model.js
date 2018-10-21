
// 提供职位信息数据
const job_list = (pageNo = 1) => {
    return $.ajax({
            url: '/quanzhi/ajax/job/search?p='+ pageNo,
            success: (res) => {
                // console.log(res);
               return res;
            }
     })
}


const job_refresh = () => {
    return  $.ajax({
                url: '/quanzhi/ajax/job/search?p=1',
                success: (res) => {
                    return res;
                }
     })
}

export default {
    job_list,
    job_refresh
}