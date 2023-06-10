//此文件为未防抖版本
//判断http是否为空或是否存在，为空或不存在则http等于默认
$(function () {
if (localStorage.getItem("http") == null) {
	http = "https://www.baidu.com/s?ie=utf-8&word="
}

if(window.localStorage.getItem('linksnav') == 'baidu'){
		links01.onclick=function(){window.open('https://fanyi.baidu.com/','_blank')}
		links2.onclick=function(){window.open('https://map.baidu.com/','_blank')}
		links3.onclick=function(){window.open('https://image.baidu.com/','_blank')}
		links4.onclick=function(){window.open('https://pan.baidu.com/','_blank')}
}

if(window.localStorage.getItem('linksnav') == 'bing'){
		links01.onclick=function(){window.open('https://cn.bing.com/translator/','_blank')}
		links2.onclick=function(){window.open('https://cn.bing.com/maps/','_blank')}
		links3.onclick=function(){window.open('https://cn.bing.com/images/','_blank')}
		links4.onclick=function(){window.open('https://onedrive.live.com/','_blank')}
}

if(window.localStorage.getItem('linksnav') == 'google'){
		links01.onclick=function(){window.open('https://translate.google.cn/','_blank')}
		links2.onclick=function(){window.open('https://www.google.com/maps/','_blank')}
		links3.onclick=function(){window.open('https://www.google.com/imghp','_blank')}
		links4.onclick=function(){window.open('https://drive.google.com/','_blank')}
}

//网络图片
if(window.localStorage.getItem('Networkpicture') == null){
}else{
	imageslinks.value = localStorage.getItem('Networkpicture'),
	bgbox.src = imageslinks.value;
	bgPreBoxInCus.classList.remove("selected"),
			bgPreBoxIn1.classList.remove("selected"),
			bgPreBoxIn2.classList.remove("selected"),
			bgPreBoxIn3.classList.remove("selected"),
			bgPreBoxIn4.classList.remove("selected"),
			bgPreBoxIn5.classList.remove("selected"),
			bgPreBoxIn6.classList.remove("selected"),
			bgPreBoxInBing.classList.remove("selected"),
			bgPreBoxInLive.classList.remove("selected"),
			bgPreBoxInLive2.classList.remove("selected")
}

//网络视频
if(window.localStorage.getItem('Networkvideos') == null){
}else{
	videoslinks.value = localStorage.getItem('Networkvideos'),
	!0 === liteMode;
		liveBgBox.classList.add("focus"),
		liveBgBox.src = videoslinks.value,
		liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
    bgbox.style.opacity = "0",
	bgPreference = "Live999",
		bgPreBoxInCus.classList.remove("selected"),
			bgPreBoxIn1.classList.remove("selected"),
			bgPreBoxIn2.classList.remove("selected"),
			bgPreBoxIn3.classList.remove("selected"),
			bgPreBoxIn4.classList.remove("selected"),
			bgPreBoxIn5.classList.remove("selected"),
			bgPreBoxIn6.classList.remove("selected"),
			bgPreBoxInBing.classList.remove("selected"),
			bgPreBoxInLive.classList.remove("selected"),
			bgPreBoxInLive2.classList.remove("selected")
}

if(window.localStorage.getItem('shortcutshape') == 'on'){
	shortcutstyle.value = "圆形",
	$(".customNav").addClass("yuanxing")
}else{
	shortcutstyle.value = "方形",
	$(".customNav").removeClass("yuanxing")
}

})

// 实现搜索框热词 原生js操作dom
var http = localStorage.getItem("http");
$("body #searchOptBox span").click(function () {
        if ($(this).attr("title") == "baidu") {
            http = "https://www.baidu.com/s?ie=utf-8&word="
			localStorage.setItem("http", "https://www.baidu.com/s?ie=utf-8&word="),
			localStorage.setItem("linksnav", "baidu"),
			links01.onclick=function(){window.open('https://fanyi.baidu.com/','_blank')}
			links2.onclick=function(){window.open('https://map.baidu.com/','_blank')}
			links3.onclick=function(){window.open('https://image.baidu.com/','_blank')}
			links4.onclick=function(){window.open('https://pan.baidu.com/','_blank')}
        } else if ($(this).attr("title") == "bing") {
            http = "https://cn.bing.com/search?q="
			localStorage.setItem("http", "https://cn.bing.com/search?q="),
			localStorage.setItem("linksnav", "bing"),
			links01.onclick=function(){window.open('https://cn.bing.com/translator/','_blank')}
			links2.onclick=function(){window.open('https://cn.bing.com/maps/','_blank')}
			links3.onclick=function(){window.open('https://cn.bing.com/images/','_blank')}
			links4.onclick=function(){window.open('https://onedrive.live.com/','_blank')}
        } else if ($(this).attr("title") == "google") {
            http = "https://www.google.com/search?q="
			localStorage.setItem("http", "https://www.google.com/search?q="),
			localStorage.setItem("linksnav", "google"),
			links01.onclick=function(){window.open('https://translate.google.cn/','_blank')}
			links2.onclick=function(){window.open('https://www.google.com/maps/','_blank')}
			links3.onclick=function(){window.open('https://www.google.com/imghp','_blank')}
			links4.onclick=function(){window.open('https://drive.google.com/','_blank')}
        }
        if ($("#input0").val() !== null) {
            $("#quotebox").hide();
        }
        $(".ypoctonod").focus()
        event.stopPropagation()
    });	
	
	// 点击根据引擎跳转
    $("div").delegate("li", "click", function () {
        window.open(http + $(this).text());
    });
    var txt = document.getElementById("input0");
    var oUl = document.getElementById("keyword");
    txt.onkeyup = function () {
        var val = txt.value;
        if (val === null || val === undefined || val === '' || val === ' ') {
            //$("#keyword").html("");
            //oUl.style.display = "none",
			//oUl.style.maxHeight = "0px";
		   //setTimeout(()=>oUl.style.opacity = "0", 10);
		   hideKeyword();
        }
        var oScript = document.createElement("script");//动态创建script标签
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=callback";
        //添加链接及回调函数
        document.body.appendChild(oScript);//添加script标签
        document.body.removeChild(oScript);//删除script标签
    }
    //回调
    function callback(data) {
		var inputsearch = document.getElementById("input0");
        var str = "";
		var strfanyi = "";
		strfanyi = '<a target="_blank" style="text-decoration:none;" href=https://fanyi.baidu.com/#en/zh/' + inputsearch.value  + "><div><i style='margin-right: 8px;font-size: small;'></i>\u7FFB\u8BD1\uFF1A" + inputsearch.value + "</div></a>";
        for (var i = 0; i < data.s.length; i++) {
            str += '<li id='+ i +'>' + data.s[i] + "</li>";
        }
		SearchHistorybox.style.display = "none";
        oUl.innerHTML = strfanyi + str;
        oUl.style.display = "block";
        oUl.style.maxHeight = "30px";
        setTimeout(()=>oUl.style.maxHeight = "330px", 150);
		oUl.style.opacity = "1";
    }

//和风天气组件
WIDGET = {
  "CONFIG": {
    "modules": "120",
    "background": "5",
    "tmpColor": "FFFFFF",
    "tmpSize": "14",
    "cityColor": "FFFFFF",
    "citySize": "14",
    "aqiColor": "FFFFFF",
    "aqiSize": "16",
    "weatherIconSize": "24",
    "alertIconSize": "18",
    "padding": "10px 10px 10px 10px",
    "shadow": "0",
    "language": "auto",
    "borderRadius": "5",
    "fixed": "true",
    "vertical": "top",
    "horizontal": "left",
    "left": "10",
    "bottom": "10",
    "key": "b0f17461ed01472b8261cd847326f729"
  }
};

var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
        //如果滑动距离太短则取消滑动事件,100越小滑动距离越短
        if (Math.abs(angx) < 100 && Math.abs(angy) < 100) {
            return result;
        }
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
        return result;
    }
 
//IOS端长按捷径弹出折叠菜单开始
	$("#links01").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links01.style.display = "none",
            		localStorage.setItem('navlinks_1','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    }) 
    $("#links2").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links2.style.display = "none",
            		localStorage.setItem('navlinks_2','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#links3").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links3.style.display = "none",
            		localStorage.setItem('navlinks_3','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#links4").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links4.style.display = "none",
            		localStorage.setItem('navlinks_4','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#links5").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links5.style.display = "none",
            		localStorage.setItem('navlinks_5','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#links6").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links6.style.display = "none",
            		localStorage.setItem('navlinks_6','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#links7").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links7.style.display = "none",
            		localStorage.setItem('navlinks_7','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#links8").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		links8.style.display = "none",
            		localStorage.setItem('navlinks_8','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#setMenuBgPref1").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		setMenuBgPref1.style.display = "none",
            		localStorage.setItem('navlinks_setMenuBgPref1','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
    $("#chkDarkModeInner1").on({   
		touchstart: function(e){ 
			timeOutEvent = setTimeout(function(){
			    menuCusNavPreset.style.left = startx + 0 + "px",
                menuCusNavPreset.style.top = starty + 0 + "px",
			    showMenu(menuCusNavPreset),
    			    cusNavMenuPresetDel.onclick = ()=>{
            		chkDarkModeInner1.style.display = "none",
            		localStorage.setItem('navlinks_chkDarkModeInner1','false');
                	}
			},500);
		},
		touchmove: function(e){
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
			e.preventDefault();
		},
		touchend: function(e){
			clearTimeout(timeOutEvent);
		}
    })
//IOS端长按捷径弹出折叠菜单结束//  

    //手指接触屏幕
	document.getElementById("navbox1").addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
	document.getElementById("navbox1").addEventListener("touchend", function(e){
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY; 
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                //alert("未滑动！");
                break;
            case 1:
                //alert("向上！")
                break;
            case 2:
                //alert("向下！")
                break;
            case 3:
                //alert("向左！")
				$('#nbSwitch2').click();
                break;
            case 4:
                $('#title').click();
                break;
            default:
        }
    }, false);
	
	//下面的是判断navbox2事件
	//手指接触屏幕
	document.getElementById("navbox2").addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
	document.getElementById("navbox2").addEventListener("touchend", function(e){
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                //alert("未滑动！");
                break;
            case 1:
                //alert("向上！")
                break;
            case 2:
                //alert("向下！")
                break;
            case 3:
                //alert("向左！")
                break;
            case 4:
                //alert("向右！")
				$('#nbSwitch1').click();
                break;
            default:
        }
    }, false);
    
    //下面的是判断背景图像的滑动事件
	//手指接触屏幕
	document.getElementById("cover").addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
	document.getElementById("cover").addEventListener("touchend", function(e){
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                //alert("未滑动！");
                break;
            case 1:
                //alert("向上！")
                break;
            case 2:
                //alert("向下！")
                break;
            case 3:
                //alert("向左！")
                $('#title').click();
                break;
            case 4:
                //alert("向右！")
                break;
            default:
        }
    }, false);

//主题色功能
$(document).ready(function(){
			$(document).on('click', '#themeColorOptLime', function () {
				//开启1
				var el = document.getElementById('chkLime');
				el.checked = true;
				var Lime = !$(this).is(":checked");    
				localStorage.setItem('checkboxLime', Lime);
			//强制关闭2
			var el1 = document.getElementById('chkIndigo');
			el1.checked = false;
			var Indigo = $(this).is(":checked");    
			localStorage.setItem('checkboxIndigo', Indigo);
			//强制关闭3
			var el2 = document.getElementById('chkViolet');
			el2.checked = false;
			var Violet = $(this).is(":checked");    
			localStorage.setItem('checkboxViolet', Violet);
			//强制关闭4
			var el3 = document.getElementById('chkRose');
			el3.checked = false;
			var Rose = $(this).is(":checked");    
			localStorage.setItem('checkboxRose', Rose);	
			//强制关闭5
			var el4 = document.getElementById('chkBlue');
			el4.checked = false;
			var Blue = $(this).is(":checked");    
			localStorage.setItem('checkboxBlue', Blue);	
			document.body.style.setProperty('--theme-color', '#70c000');
						document.body.style.setProperty('--theme-color-hover', '#61A600');
						document.body.style.setProperty('--theme-color-active', '#528C00');
						document.body.style.setProperty('--theme-color-tint', 'rgba(112,192,0,0.1)');
						document.body.style.setProperty('--selection-color', 'rgba(112,192,0,0.35)');
						$("#themeColorOptLime").addClass("selected");
						$("#themeColorOptIndigo").removeClass("selected");
						$("#themeColorOptViolet").removeClass("selected");
						$("#themeColorOptRose").removeClass("selected");
						$("#themeColorOptBlue").removeClass("selected");
		});
});
$(document).ready(function(){
			$(document).on('click', '#themeColorOptIndigo', function () {
			//开启2
			var el1 = document.getElementById('chkIndigo');
			el1.checked = true;
			var Indigo = !$(this).is(":checked");    
			localStorage.setItem('checkboxIndigo', Indigo);
			//强制关闭1
			var el = document.getElementById('chkLime');
				el.checked = false;
				var Lime = $(this).is(":checked");    
				localStorage.setItem('checkboxLime', Lime);
			//强制关闭3
			var el2 = document.getElementById('chkViolet');
			el2.checked = false;
			var Violet = $(this).is(":checked");    
			localStorage.setItem('checkboxViolet', Violet);
			//强制关闭4
			var el3 = document.getElementById('chkRose');
			el3.checked = false;
			var Rose = $(this).is(":checked");    
			localStorage.setItem('checkboxRose', Rose);	
			//强制关闭5
			var el4 = document.getElementById('chkBlue');
			el4.checked = false;
			var Blue = $(this).is(":checked");    
			localStorage.setItem('checkboxBlue', Blue);	
						document.body.style.setProperty('--theme-color', '#4cb6c2');
						document.body.style.setProperty('--theme-color-hover', '#429EA8');
						document.body.style.setProperty('--theme-color-active', '#337A82');
						document.body.style.setProperty('--theme-color-tint', 'rgba(76,182,194,0.1)');
						document.body.style.setProperty('--selection-color', 'rgba(76,182,194,0.35)');
						$("#themeColorOptIndigo").addClass("selected");
						$("#themeColorOptLime").removeClass("selected");
						$("#themeColorOptViolet").removeClass("selected");
						$("#themeColorOptRose").removeClass("selected");
						$("#themeColorOptBlue").removeClass("selected");
		});
});
$(document).ready(function(){
			$(document).on('click', '#themeColorOptViolet', function () {
			//开启3
			var el2 = document.getElementById('chkViolet');
			el2.checked = true;
			var Violet = !$(this).is(":checked");    
			localStorage.setItem('checkboxViolet', Violet);
			//强制关闭1
			var el = document.getElementById('chkLime');
				el.checked = false;
				var Lime = $(this).is(":checked");    
				localStorage.setItem('checkboxLime', Lime);	
			//强制关闭2
			var el1 = document.getElementById('chkIndigo');
			el1.checked = false;
			var Indigo = $(this).is(":checked");    
			localStorage.setItem('checkboxIndigo', Indigo);
			//强制关闭4
			var el3 = document.getElementById('chkRose');
			el3.checked = false;
			var Rose = $(this).is(":checked");    
			localStorage.setItem('checkboxRose', Rose);	
			//强制关闭5
			var el4 = document.getElementById('chkBlue');
			el4.checked = false;
			var Blue = $(this).is(":checked");    
			localStorage.setItem('checkboxBlue', Blue);	
						document.body.style.setProperty('--theme-color', '#bb8cdd');
						document.body.style.setProperty('--theme-color-hover', '#A67CC4');
						document.body.style.setProperty('--theme-color-active', '#86649E');
						document.body.style.setProperty('--theme-color-tint', 'rgba(187,140,221,0.1)');
						document.body.style.setProperty('--selection-color', 'rgba(187,140,221,0.35)');
						$("#themeColorOptViolet").addClass("selected");
						$("#themeColorOptLime").removeClass("selected");
						$("#themeColorOptIndigo").removeClass("selected");
						$("#themeColorOptRose").removeClass("selected");
						$("#themeColorOptBlue").removeClass("selected");
		});
});
$(document).ready(function(){
			$(document).on('click', '#themeColorOptRose', function () {
			//开启4
			var el3 = document.getElementById('chkRose');
			el3.checked = true;
			var Rose = !$(this).is(":checked");    
			localStorage.setItem('checkboxRose', Rose);
			//强制关闭1
			var el = document.getElementById('chkLime');
				el.checked = false;
				var Lime = $(this).is(":checked");    
				localStorage.setItem('checkboxLime', Lime);
			//强制关闭2
			var el1 = document.getElementById('chkIndigo');
			el1.checked = false;
			var Indigo = $(this).is(":checked");    
			localStorage.setItem('checkboxIndigo', Indigo);
			//强制关闭3
			var el2 = document.getElementById('chkViolet');
			el2.checked = false;
			var Violet = $(this).is(":checked");    
			localStorage.setItem('checkboxViolet', Violet);
			//强制关闭5
			var el4 = document.getElementById('chkBlue');
			el4.checked = false;
			var Blue = $(this).is(":checked");    
			localStorage.setItem('checkboxBlue', Blue);	
						document.body.style.setProperty('--theme-color', '#ff4b68');
						document.body.style.setProperty('--theme-color-hover', '#E6435E');
						document.body.style.setProperty('--theme-color-active', '#BF374E');
						document.body.style.setProperty('--theme-color-tint', 'rgba(255,75,104,0.1)');
						document.body.style.setProperty('--selection-color', 'rgba(255,75,104,0.35)');
						$("#themeColorOptRose").addClass("selected");
						$("#themeColorOptLime").removeClass("selected");
						$("#themeColorOptIndigo").removeClass("selected");
						$("#themeColorOptViolet").removeClass("selected");
						$("#themeColorOptBlue").removeClass("selected");
		});
});
$(document).ready(function(){
			$(document).on('click', '#themeColorOptBlue', function () {
			//开启5
			var el4 = document.getElementById('chkBlue');
			el4.checked = true;
			var Blue = !$(this).is(":checked");    
			localStorage.setItem('checkboxBlue', Blue);
			//强制关闭1
			var el = document.getElementById('chkLime');
				el.checked = false;
				var Lime = $(this).is(":checked");    
				localStorage.setItem('checkboxLime', Lime);
			//强制关闭2
			var el1 = document.getElementById('chkIndigo');
			el1.checked = false;
			var Indigo = $(this).is(":checked");    
			localStorage.setItem('checkboxIndigo', Indigo);
			//强制关闭3
			var el2 = document.getElementById('chkViolet');
			el2.checked = false;
			var Violet = $(this).is(":checked");    
			localStorage.setItem('checkboxViolet', Violet);
			//强制关闭4
			var el3 = document.getElementById('chkRose');
			el3.checked = false;
			var Rose = $(this).is(":checked");    
			localStorage.setItem('checkboxRose', Rose);
						document.body.style.setProperty('--theme-color', '#5ca1ff');
						document.body.style.setProperty('--theme-color-hover', '#5390E6');
						document.body.style.setProperty('--theme-color-active', '#4578BF');
						document.body.style.setProperty('--theme-color-tint', 'rgba(92,161,255,0.1)');
						document.body.style.setProperty('--selection-color', 'rgba(92,161,255,0.35)');
						$("#themeColorOptBlue").addClass("selected");
						$("#themeColorOptLime").removeClass("selected");
						$("#themeColorOptIndigo").removeClass("selected");
						$("#themeColorOptViolet").removeClass("selected");
						$("#themeColorOptRose").removeClass("selected");
		});
});

//时间扩展（显示月日周农历）
$(function () {
    var lunar = calendar.solar2lunar();
    $('#titleCalendar').html(''+lunar.cMonth +  '月' + lunar.cDay +'日（'+lunar.ncWeek+'）' + lunar.IMonthCn +lunar.IDayCn+'');
});

//判断是否为IE则跳转
(function(window){
	var userAgent = navigator.userAgent; 
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	if(isIE || isIE11){
			window.location.href = "error-js.html"
	}
})(window);

//默认壁纸下载的鼠标指向显示
var bizhi1 = document.getElementById('bgPreBoxD1');
bizhi1.onmouseover = function(){bz1.style.opacity = "1";bz1.style.zIndex = "9";}
bizhi1.onmouseout = function(){bz1.style.opacity = "0";bz1.style.zIndex = "-1";}
var bizhi2 = document.getElementById('bgPreBoxD2');
bizhi2.onmouseover = function(){bz2.style.opacity = "1";bz2.style.zIndex = "9";}
bizhi2.onmouseout = function(){bz2.style.opacity = "0";bz2.style.zIndex = "-1";}
var bizhi3 = document.getElementById('bgPreBoxD3');
bizhi3.onmouseover = function(){bz3.style.opacity = "1";bz3.style.zIndex = "9";}
bizhi3.onmouseout = function(){bz3.style.opacity = "0";bz3.style.zIndex = "-1";}
var bizhi4 = document.getElementById('bgPreBoxD4');
bizhi4.onmouseover = function(){bz4.style.opacity = "1";bz4.style.zIndex = "9";}
bizhi4.onmouseout = function(){bz4.style.opacity = "0";bz4.style.zIndex = "-1";}
var bizhi5 = document.getElementById('bgPreBoxD5');
bizhi5.onmouseover = function(){bz5.style.opacity = "1";bz5.style.zIndex = "9";}
bizhi5.onmouseout = function(){bz5.style.opacity = "0";bz5.style.zIndex = "-1";}
var bizhi6 = document.getElementById('bgPreBoxD6');
bizhi6.onmouseover = function(){bz6.style.opacity = "1";bz6.style.zIndex = "9";}
bizhi6.onmouseout = function(){bz6.style.opacity = "0";bz6.style.zIndex = "-1";}

//自定义网络图片为背景
btnimageslinks.onclick = ()=>{
	var imagelink = imageslinks.value;
		function checkImgExists(imgurl) {
			return new Promise(function(resolve, reject) {
			  var ImgObj = new Image();
			  ImgObj.src = imgurl;
			  ImgObj.onload = function(res) {
				resolve(res);
			  }
			  ImgObj.onerror = function(err) {
				reject(err)
			  }
			})
		}
		checkImgExists(imagelink).then(()=>{
			//success callback
			setTimeout(()=>{
			bgbox.src = imageslinks.value;
			
			bgPreBoxInCus.classList.remove("selected"),
			bgPreBoxIn1.classList.remove("selected"),
			bgPreBoxIn2.classList.remove("selected"),
			bgPreBoxIn3.classList.remove("selected"),
			bgPreBoxIn4.classList.remove("selected"),
			bgPreBoxIn5.classList.remove("selected"),
			bgPreBoxIn6.classList.remove("selected"),
			bgPreBoxInBing.classList.remove("selected"),
			bgPreBoxInLive.classList.remove("selected"),
			bgPreBoxInLive2.classList.remove("selected")
			
			localStorage.setItem("Networkpicture", imageslinks.value)
			}
			, 100)
		}).catch(()=>{
				sweetAlert("", "无效链接或图片不存在", "");
		})
}

//自定义视频壁纸
btnvideoslinks.onclick = ()=>{
	var video = document.createElement('video');
	video.onload = function() {
		sweetAlert("", "视频壁纸已准备就绪", "");
		// show video element
	}
	video.onerror = function() {
		sweetAlert("", "无效链接或不支持的视频格式", "");
		// don't show video element
	}
	video.src = videoslinks.value;
	//不同浏览器情况不同，这里判断在该浏览器是否可以播放
	video.oncanplaythrough = function() {
		!0 === liteMode;
		liveBgBox.classList.add("focus"),
		liveBgBox.src = videoslinks.value,
		liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
    bgbox.style.opacity = "0",
	bgPreference = "Live999",
		bgPreBoxInCus.classList.remove("selected"),
			bgPreBoxIn1.classList.remove("selected"),
			bgPreBoxIn2.classList.remove("selected"),
			bgPreBoxIn3.classList.remove("selected"),
			bgPreBoxIn4.classList.remove("selected"),
			bgPreBoxIn5.classList.remove("selected"),
			bgPreBoxIn6.classList.remove("selected"),
			bgPreBoxInBing.classList.remove("selected"),
			bgPreBoxInLive.classList.remove("selected"),
			bgPreBoxInLive2.classList.remove("selected"),
			localStorage.setItem("Networkvideos", videoslinks.value)
	};
}

//捷径样式
$(function(){
$('#shortcutstyle').click(function(){
if($('#shortcutstylelist').is(':hidden')){
$('#shortcutstylelist').show();
}else{
$('#shortcutstylelist').hide();
}
})
})
//捷径样式
shortcutstylecircular.onclick = ()=>{
	shortcutstyle.value = "圆形",
	$(".customNav").addClass("yuanxing"),
	localStorage.setItem("shortcutshape", "on"),
	$('#shortcutstylelist').hide()
}
shortcutstylesquare.onclick = ()=>{
	shortcutstyle.value = "方形",
	$(".customNav").removeClass("yuanxing"),
	localStorage.setItem("shortcutshape", "off"),
	$('#shortcutstylelist').hide();
}

//网络视频壁纸库
bgPreBoxInLivenetwork1.onclick = ()=>{
	videoslinks.value = "https://cdn.jsdelivr.net/gh/dsource/static/assets/6-test.webm",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork2.onclick = ()=>{
	videoslinks.value = "https://cdn.jsdelivr.net/gh/dsource/static/assets/5-test.webm",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork3.onclick = ()=>{
	videoslinks.value = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/lime-live-wallpapers/Live4.mp4",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork4.onclick = ()=>{
	videoslinks.value = "https://cdn.jsdelivr.net/gh/dsource/static/assets/10-test.webm",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork5.onclick = ()=>{
	videoslinks.value = "https://files.codelife.cc/itab/videos/03.mp4",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork6.onclick = ()=>{
	videoslinks.value = "https://cdn.jsdelivr.net/gh/dsource/static/assets/41-test.webm",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork7.onclick = ()=>{
	videoslinks.value = "https://files.codelife.cc/itab/videos/12.mp4",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork8.onclick = ()=>{
	videoslinks.value = "https://cdn.jsdelivr.net/gh/dsource/static/assets/43-test.webm",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

bgPreBoxInLivenetwork9.onclick = ()=>{
	videoslinks.value = "https://files.codelife.cc/itab/videos/24.mp4",
	!0 === liteMode;
	liveBgBox.src = videoslinks.value,
	liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
	bgbox.style.opacity = "0",
	bgPreference = "Live999",
	localStorage.setItem("Networkvideos", videoslinks.value)
}

presetNavsArea.oncontextmenu = a => {
	if(window.localStorage.getItem('Zhedie') == 'off'){
		menuCusNavPreset1.style.left = a.clientX + 3 + "px",
		menuCusNavPreset1.style.top = a.clientY + 3 + "px",
		showMenu(menuCusNavPreset1)
	}else{
	}
}