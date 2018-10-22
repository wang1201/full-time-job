

import my_template from '../views/my.html';

const render = () => {
    $('.home-container main').html(my_template);
// 自定义选择器
    var weekdayArr=['请选择','正在找工作','有更好的机会，我愿意考虑','暂时不想找工作',''];
    var mobileSelect1 = new MobileSelect({
        trigger: '#trigger1',
    
        wheels: [
                    {data: weekdayArr}
                ],
        position:[2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
        transitionEnd:function(indexArr, data){
            //console.log(data);
        },
        callback:function(indexArr, data){
            console.log(data);
            $("#trigger1").val(data);
            console.log( $("#trigger1").val());
        
        },
    });

}

export default {
    render
}