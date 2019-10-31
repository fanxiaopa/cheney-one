// $(function(){
//     $.ajax({
//         url:'footer.html',
//         type:'get',
//         success:function(result){
//     //result拿到的是herder.html的代码块 
//            $(result).replaceAll('footer')
//     //因为header.html有样式，所以添加样式代码到主页上
//             $('<link rel="stylesheet" href="css/footer.css">').appendTo('head')
//         }
//     })
//     })
$(function(){
    function callback(result){
        $(result).replaceAll('footer')
        $('<link rel="stylesheet" href="css/footer.css">').appendTo('head')
    }
    funs.getFooter(callback)
})