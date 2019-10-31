// $(function(){
//     $.ajax({
//         url:'header.html',
//         type:'get',
//         success:function(result){
//     //result拿到的是herder.html的代码块 
//            $(result).replaceAll('header')
//     //因为header.html有样式，所以添加样式代码到主页上
//             $('<link rel="stylesheet" href="css/header.css">').appendTo('head')
//         }
//     })
//     })

    $(function(){
        function callback(result){
            $(result).replaceAll('header')
            $('<link rel="stylesheet" href="css/header.css">').appendTo('head')
        }
       funs.getHeader(callback);
    })
    