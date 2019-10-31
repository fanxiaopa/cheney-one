// var allA=document.querySelectorAll('#tab>li>a');
// console.log(allA[0]);
var ul=document.getElementById('tab');
var containers=document.querySelectorAll("#container>div")
console.log(containers)
console.log(ul);
ul.onclick=function(e){
    var a=e.target;
    if(a.nodeName=="A"&&a.parentNode.className==''){
        // console.log(a.dataset.id)
        //获得所有的li标签
        var lis=document.querySelectorAll("#tab>li");
        //遍历li，清除选中类
        for(var li of lis){
            li.className='';
        }
         //为选中的li标签添加选中类
         a.parentNode.className='btn-primary';

        //遍历 containers，清除所有的隐藏效果
        for(var can of containers){
            can.hidden=false;
        }
        //先不管三七二十一，全部添上隐藏属性，
        //如果选中了，再取消隐藏属性
        //如果选中全选，则也是取消隐藏属性
        for(var con of containers){
            //如果选中全部按钮，清除隐藏状态属性
            if(a.dataset.id=="contentAll"){
                con.hidden=false;
            }
            else{
                con.hidden=true;
                if(con.id==a.dataset.id){
                    console.log('over');
                    con.hidden=false;
                 }
            }
            
        }
    }
}
