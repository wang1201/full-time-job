// import LCalendar from "../static/javascripts/LCalendar"
//  console.log(LCalendar )
    //  地区选择器
     var area1 = new LArea();
     area1.init({
         'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
         'valueTo': '#value1', //选择完毕后id属性输出到该位置
         'keys': {
             id: 'id',
             name: 'name'
         }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
         'type': 1, //数据源类型
         'data': LAreaData //数据源
     });
     // 地区选择器
     area1.value=[1,13,3];//控制初始位置，注意：该方法并不会影响到input的value
     var area2 = new LArea();
     area2.init({
         'trigger': '#demo2',
         'valueTo': '#value2',
         'keys': {
             id: 'value',
             name: 'text'
         },
         'type': 2,
         'data': [provs_data, citys_data, dists_data]
     });
//  时间选择器
     var calendar = new LCalendar();
      calendar.init({
         'trigger': '#demo3', //标签id
         'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
         'minDate': '1900-1-1',  //最小日期
         'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
     });
 // 时间选择器
     var calendarym = new LCalendar();
     calendarym.init({
         'trigger': '#demo4',
         'type': 'ym',
         'minDate': '1900-1',
         'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1)
     });
 
//  学历选择器
 
     var weekdayArr=['高中','大专','本科','硕士','博士','MBA','中专\技校\职高',''];
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
     // 点击自我介绍 弹出
     $("#introduce").on("click",()=>{
         $(".shade").fadeIn();
     })
   
     function txtCount(el) {
         var val = el.value;
         var eLen = val.length;
         return eLen;
     }
    
     var el = document.getElementById('assessment');
     el.addEventListener('input',function () {
         var len =  txtCount(this); //   调用函数 
         document.getElementById('count').innerHTML = len;
     
     });
     
     el.addEventListener('propertychange',function () {//兼容IE
         var len =  txtCount(this); //   调用函数 
         document.getElementById('textCount').innerHTML = len;
     });
 // 点击保存 把文本框内容添加到自我介绍的input中
     $(".submit").on("click",()=>{
         if($('#assessment').val() ==''){
             error='请填写自我介绍'
             show()
          }else{
             $(".shade").css("display","none")
             $("#introduce").attr("placeholder","修改  〉");
             $(".introduce").css("display","block")
             $(".introduce").html(el.value)
          }
       
     })
     // 点击取消 关闭弹出层
     $(".cancel").on("click",()=>{
       el.value='';//关闭 内容清空
         $(".shade").css("display","none")
     })
 
     // 表单验证
     var flag = true;
     var error=''
     $(".save").on("click",()=>{
 
         if( $('.needAddress').val()=='' ) {
             flag =false;
             error ='请填写期望地点' 
           }
           if( $('.birthDay').val()=='' ) {
             flag =false;
             error ='请填写出生日期' 
           }
           if( $('.address').val()=='' ) {
             flag =false;
             error ='请填写居住地' 
           }
           if( $('.jobTime').val()=='' ) {
             flag =false;
             error ='请填写参加工作时间' 
           }
           let str = $(".phone").val();
           if(!( /^\d{11}$/.test(str))){
             flag =false;
             error ='手机格式不正确'
           }
           if(str=='' ) {
             flag =false;
             error ='请填手机号' 
           }
           
           if( $('.userName').val()=='' ) {
             flag =false;
             error ='请填写姓名' 
           }
           if(flag){
              alert("保存成功") 
           }else{
             show();
           }     
 
   
     })
 
     const show = ()=>{
         console.log("1")
         $(".errorConter").html(error);
         $(".error").fadeIn();
         setTimeout(()=>{
         $(".error").fadeOut()
        },3000)
     }
 
     
 