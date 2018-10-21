import companyDetail_template from '../views/home-company-detail.html';
import company_detail from '../models/home_company_detail';

import BScroll from 'better-scroll';

// 当前加载的职位信息的页数
let _pageNo = 1;
let _job_data_list = [] // job页面要显示的列表的数据
let _company_data_list = [];
const render = () => {
    let _template = Handlebars.compile(companyDetail_template);
    let _html = _template();
    $('#main').html(_html);
    // handleContentScroll();
    getcompanyDetail();
}

// const handleContentScroll = async () => { // 处理整个程序滚动等等逻辑
//     // bscroll
//     const main = document.querySelector("#main");
//     let _job_scroll = new BScroll(main, {
//         startY: true,
//         probeType: 2,
//         tap: true,
//         click: true
//     });

//     await getcompanyDetail(); // 初始加载第一页
//     _job_scroll.refresh(); // 异步加载完成后，让better-scroll重新计算

//     let _o_scroll_info_top = $('.scroll-info--top') // 下拉刷新的dom元素
//     let _o_scroll_info_top_title = _o_scroll_info_top.find('.scroll-info__title') // 下拉刷新的文字dom

//     let _o_scroll_info_bottom = $('.scroll-info--bottom') // 下拉刷新的dom元素
//     let _o_scroll_info_bottom_title = _o_scroll_info_bottom.find('.scroll-info__title') // 下拉刷新的文字dom

//     let _top_class = 'scroll-info--top scroll-info ' // 下拉刷新元素的初始类名
//     let _scroll_y_sta = 'go' // 下拉刷新的状态


//     let _scroll_bottom_sta = false;

//     _job_scroll.on('scroll', ({
//         x,
//         y
//     }) => {
//         if (y > 0 && _scroll_y_sta !== 'release') { // 放手就刷新
//             // 使用状态判断是放在符合条件还不断的更改视图
//             _scroll_y_sta = 'release'
//             _o_scroll_info_top.prop('class', _top_class + 'release-refresh')
//             _o_scroll_info_top_title.html('放开就刷新')
//         }

//         _scroll_bottom_sta = false;
//         if (_job_scroll.maxScrollY - y > 0) {
//             _scroll_bottom_sta = true;
//             _o_scroll_info_bottom_title.html('放开去加载')
//         }
//     })

//     _job_scroll.on('scrollEnd', async ({
//         x,
//         y
//     }) => {
//         if (_job_scroll.maxScrollY - y === 0 && _scroll_bottom_sta) {

//             _o_scroll_info_bottom_title.html('正在加载')
//             _o_scroll_info_bottom.addClass('loading')
//             _pageNo++
//             await getcompanyDetail();
//             _o_scroll_info_bottom_title.html('上拉去加载')
//             _o_scroll_info_bottom.removeClass('loading')
//             _job_scroll.refresh()

//         }
//     })
// }

const getcompanyDetail = async () => { // 获取某一页数据
    var _index = sessionStorage.getItem('companyId');
    _company_data_list = await company_detail.company_detailInfo(_index);
    let _job_data = await company_detail.company_jobDetail(_index, _pageNo);
    let ids = _job_data.result.ids;
    let _company_jobDetail = [];
    ids.forEach(item => {
        _company_jobDetail.push(_job_data.result.list[item]);
    });
    // 多个职位信息数组
    _job_data_list = [..._job_data_list, ..._company_jobDetail];
    renderJobList() // 每次获取到新的数据后重新渲染
}

const renderJobList = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(companyDetail_template);
    let _html = _template({
        companyDetail: _company_data_list.result,
        jobDetail: _job_data_list,
    });
    $('#main').html(_html);
    
    $('.company-detail__toggle').tap(function () {
        let overflow = $('.company-detail__rulesCon').css('overflow');
        console.log(overflow);
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