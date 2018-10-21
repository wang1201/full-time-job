// 提供公司信息数据
const company_detailInfo = (id) => {
    return $.ajax({
        url: `/quanzhi/ajax/company/getComInfo?comid=${id}`,
        dataType:'json',
        success: (res) => {
            return res;
        }
    })
}
//公司招聘信息
const company_jobDetail = (id, pageNo = 1) => {
    return $.ajax({
        url: `/quanzhi/ajax/job/search?p=${pageNo}&comid=${id}`,
        dataType: 'json',
        success: (res) => {
            return res;
        }
    })
}

export default {
    company_detailInfo,
    company_jobDetail
}