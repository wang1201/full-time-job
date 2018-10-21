import companyDetail_template from '../views/home-company-detail.html';
import company_detail from '../models/home_company_detail';

const render = () => {
    $('.company-detail__content').html(companyDetail_template);
    getcompanyDetail();
}
const getcompanyDetail = async () => {
    var _index = sessionStorage.getItem('companyId');
    let _company_data = await company_detail.company_detailInfo(_index);
    let _job_data = await company_detail.company_jobDetail(_index);
    console.log(_company_data, _job_data);
    let _template = Handlebars.compile(companyDetail_template);
    // let companyDescribe = _detail_data.result.data.companyDetail.companyDescribe;
    // let stringcompany = companyDescribe.replace(/<br>/g, "\n");
    // let stringcompanyInfo = stringcompany.replace(/<br \/>/g, "");
    let _html = _template({
        companyDetail: _company_data.result,
        jobDetail: _job_data.result,
        // stringcompany: stringcompanyInfo
    });
    $('.company-detail__content').html(_html);
    $('.company-detail__toggle').tap(function () {
        let overflow = $('.company-detail__rulesCon').css('overflow');
        if (overflow == 'hidden') {
            $('.company-detail__rulesCon').css({
                'overflow': 'auto',
                'max-height': 'none'
            });
            $(this).html('收起<i class="iconfont icon-xiala company-rulesCon__iconfont"></i>');
        } else { 
             $('.company-detail__rulesCon').css({
                 'overflow': 'hidden',
                 'max-height': '3.2rem'
             });
             $(this).html('展开<i class="iconfont icon-xiala"></i>');
        }

    })
}

export default {
    render
}