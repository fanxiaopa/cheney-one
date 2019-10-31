$(function(){
    var player = videojs('example_video_1',{
        muted: false,//是否静音
        controls : true/false,//是否拥有控制条      
        height:300, 
        width:100,
        loop : true,//视频播放结束后，是否循环播放
        // 更多配置.....
        playbackRates:[0.5,1] //设置播放速度
    });

    
})
