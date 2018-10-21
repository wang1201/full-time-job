// 提供职位信息数据
const job_detailInfo = (id) => {
    return $.ajax({
        url: `/quanzhi/ajax/job/pagedetail?jobid=${id}`,
        dataType:'json',
        success: (res) => {
            console.log(res);
            return res;
        }
    })
}


export default {
    job_detailInfo
}