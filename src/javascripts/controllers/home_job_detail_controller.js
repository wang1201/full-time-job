import jobDetail_template from '../views/home-job-detail.html';
import job_detail from '../models/home_job_detail';

const render = () => {
    // $('.job-detail__content').html(jobDetail_template);
    getJobDetail();
}
const getJobDetail = async () => {
    var _index = sessionStorage.getItem('id');
    let _detail_data = await job_detail.job_detailInfo(_index);
    let _template =  Handlebars.compile(jobDetail_template);
    let JobDescribe = _detail_data.result.data.jobDetail.JobDescribe;
    let stringJob = JobDescribe.replace(/<br>/g, "\n");
    let stringJobInfo = stringJob.replace(/<br \/>/g, "");
    let _html =  _template({
        jobDetail: _detail_data.result.data.jobDetail,
        company: _detail_data.result.data.company,
        stringJob: stringJobInfo
    });
    $('.job-detail__content').html(_html);
    $('.company-general .company-general__con').tap(function () {
        let _index = $(this).attr('index');
        sessionStorage.setItem('companyId', _index);
    })
}

export default {
    render
}