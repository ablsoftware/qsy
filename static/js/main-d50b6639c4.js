document.write("<script language=javascript src='https://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>");//引入Jq库防止添加自定义链接时key报错的问题
"use strict";
const version = "21L37e6",
	LSPAge = parseInt((new Date().getTime() - new Date("2020-01-01").getTime()) / 864e5),
	consoleColor = "color: #70C000; ",
	consoleLineHeight = "line-height: 20px; ",
	consoleFontFamily = "font-family: 'Microsoft Yahei',PingFangSC-Regular,Helvetica,sans-serif,'\u7B49\u7EBF'; ",
	consoleStyle1 = consoleColor + consoleFontFamily + consoleLineHeight,
	consoleStyle2 = consoleFontFamily + consoleLineHeight;
console.log(
	"\n%cYeZhiqiu %cVersion 21L37e6\n%c\u6b22\u8fce\u8bbf\u95ee\u5c0f\u5e03\u8d77\u59cb\u9875\u002d\u8fd8\u4f60\u6e05\u65b0\u6d4f\u89c8\u5668\uff01\n%c%c\u8D77\u59CB\u9875\u5DF2\u4E0A\u7EBF %c" +
	LSPAge + "%c \u5929\n%c\xA9 2021 YeZhiqiu All Rights Reserved.\n", consoleStyle1, consoleStyle2, consoleStyle1,
	consoleColor, consoleStyle1, consoleStyle2, consoleStyle1, consoleStyle2);
const backend = "#",
	ua = navigator.userAgent.toLowerCase(),
	isIpad = -1 != ua.indexOf("ipad"),
	isIphone = !isIpad && -1 != ua.indexOf("iphone"),
	isAndroid = -1 != ua.indexOf("android"),
	isMobile = isIphone || isAndroid,
	isEdge = -1 != ua.indexOf("edge/"),
	isSafari = -1 != ua.indexOf("safari/") && -1 == ua.indexOf("chrome/"),
	originalStatus = txtNoteCloudStatus.innerText,
	localVersion = localStorage.getItem("localVersion"),
	isNotFirstRun = !!localVersion;
let thePopUp, currentAddingNav, currentDeletingNav, currentEditingNav, theTextArea, pushClass, pushTitle, pushContent,
	pushStartTime, pushStopTime, konamiCode = "38384040373937396665",
	konamiCodeInputed = "",
	lastModified0 = "",
	navboxCustom = "",
	username = "",
	birthday = "",
	ShowGreeting = "",
	popUpClosing = !1,
	cusNavIconErrCount = 0,
	cusNavSubmitCount = 0,
	selectedKeyword = -1,
	cusNavEditingMode = !1,
	currentSearchEngine = localStorage.getItem("searchEngPref"),
	cusSearchEngURL = localStorage.getItem("cusSearchEngURL"),
	bgPreference = localStorage.getItem("bgPreference"),
	cusWallpaper = localStorage.getItem("cusWallpaper"),
	autoClrSearchBar = "off" != localStorage.getItem("autoClrSearchBar"),
	openInNew = "off" != localStorage.getItem("openInNew"),
	SearchHistory = "on" == localStorage.getItem("SearchHistory"),
	SearchCandidate = "off" != localStorage.getItem("SearchCandidate"),
	CompletePinnedNote = "off" != localStorage.getItem("CompletePinnedNote"),
	ShowGreetinggtogreet = "on" == localStorage.getItem("ShowGreetinggtogreet"),
	Weather = "off" != localStorage.getItem("Weather"),
	BgGradientMask = "off" != localStorage.getItem("BgGradientMask"),
	TimeTwinkle = "on" == localStorage.getItem("TimeTwinkle"),
	Snows = "on" == localStorage.getItem("Snows"),
	TimeExtension = "on" == localStorage.getItem("TimeExtension"),
	Zdytitle = "off" == localStorage.getItem("Zdytitle"),
	Zhedie = "off" != localStorage.getItem("Zhedie"),
	autoFocus = "off" != localStorage.getItem("autoFocus"),
	autoShowSecondPage = "on" == localStorage.getItem("autoShowSecondPage"),
	noteAsDefault = "on" == localStorage.getItem("noteAsDefault"),
	hitokoto = "off" != localStorage.getItem("hitokoto"),
	liteMode = "on" == localStorage.getItem("liteMode"),
	reduceMotion = !!(isEdge) || "on" == localStorage.getItem("reduceMotion"),
	navLinksBlurEf = "on" == localStorage.getItem("navLinksBlurEf"),
	NavLinksOpacity = "on" == localStorage.getItem("NavLinksOpacity"),
	NotesBlurEf = "on" == localStorage.getItem("NotesBlurEf"),
	NotesOpacity = "on" == localStorage.getItem("NotesOpacity"),
	isDark = (() => {
		const a = localStorage.getItem("darkMode");
		return a ? "off" != a : matchMedia("(prefers-color-scheme: dark)").matches //判断系统是否处于深色模式，是就切换
	})(),
	browserWarning = !1;
oncontextmenu = () => !1,
	onkeydown = a => {
		var b = Math.floor;
		if ((a.ctrlKey || a.metaKey) && 83 == a.keyCode)
			return !1;
		if ("0" != input0.style.opacity && "block" != cover1.style.display && input0.focus(),
			konamiCode)
			if (konamiCodeInputed += a.keyCode,
				konamiCodeInputed == konamiCode) {
				const a = document.title,
					c = ["\u5c0f\u5e03\u8d77\u59cb\u9875", "\u4F60\u5FEB\u56DE\u6765\u554A~",
						"\u60F3\u6211\u4E86\u5417", "\u5624\u5624\u5624", "\u563B\u563B\u563B",
						"\u5566\u5566\u5566\u5566\u5566",
						"\u8D81\u6CA1\u4EBA\u6CE8\u610F\u5077\u5077\u653E\u4E2A\u5C41",
						"\u8D81\u6CA1\u4EBA\u6CE8\u610F\u9AD8\u6B4C\u4E00\u66F2", "\u4F60\u770B\u4E0D\u5230\u6211",
						"\u6DE1\u9EC4\u7684\u957F\u88D9 \u84EC\u677E\u7684\u5934\u53D1",
						"_(\xB0\u03C9\xB0\uFF63\u2220)_", "(*/\u03C9\uFF3C*)", "(\u3003'\u25BD'\u3003)",
						"(\uFF40\u30FB\u03C9\u30FB\xB4)", "(\uFF5E\uFFE3\u25BD\uFFE3)\uFF5E "
					];
				konamiCode = null,
					document.querySelector(":root").setAttribute("style",
						"--theme-color: #FF4B68; --selection-color: rgba(255,75,104,.35);"),
					addEventListener("visibilitychange", () => document.title = document.hidden ? c[b(Math.random() * c
						.length)] : a),
					alert("\u5F69\u86CB\u5DF2\u6FC0\u6D3B (\uFF40\u30FB\u03C9\u30FB\xB4)")
			} else
				konamiCode.startsWith(konamiCodeInputed) || (konamiCodeInputed = "")
	},
	onload = () => {
		onerror = (a, b) => {
			if (window.loaded && b && b.startsWith(location.href) && "Script error." != a)
				if (-1 == a.indexOf("bingWallpaper") ? -1 == a.indexOf("login") ? -1 != a.indexOf(
					"noteList.load") && (a = "\u4FBF\u7B3A\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25") : a =
					"\u767b\u5f55\u7ec4\u4ef6\u52a0\u8f7d\u5931\u8d25" : a =
					"\u65E0\u6CD5\u8FDE\u63A5\u5230\u5FC5\u5E94\u670D\u52A1\u5668",
					a = a + " at " + b.split("/").pop(),
					window.errorContent)
					errorContent.innerText += "\n" + a;
				else {
					const b = document.createElement("div"),
						c = document.createElement("div");
					window.errorContent = document.createElement("div"),
						b.classList.add("error"),
						b.onclick = function() {
							"clipboard" in navigator && navigator.clipboard.writeText(errorContent.innerText),
								delete window.errorContent,
								this.parentElement.removeChild(this)
						},
						c.classList.add("error-title"),
						c.innerText = "\u274C \u9519\u8BEF\uFF08\u70B9\u51FB\u6B64\u5904" + ("clipboard" in
							navigator ? "\u590D\u5236\u5E76" : "") + "\u5173\u95ED\u6B64\u4FE1\u606F\uFF09",
						errorContent.innerText = a,
						b.appendChild(c),
						b.appendChild(errorContent),
						document.body.appendChild(b)
				}
			return !1
		};
		const a = /chrome\/([\d]+)/i.exec(ua);
		setTimeout(() => {
				const a = document.createElement("script");
				//a.src = atob("#"),
					a.onerror = () => window.loaded = !0,
					a.onload = () => {
						"function" == typeof codeLoad && codeLoad(),
							window.loaded = !0
					},
					document.body.appendChild(a)
			}, 1),
			loadJs("https://cdn.sencdn.com/widget/static/js/widget-cc5d550.js"),
			"0px" != topNotificationBar.style.top && processTopNotification(),
			(a && 76 > a[1] || isEdge) && 600 < innerWidth && (!isNotFirstRun && showMenu(tipBoxBrowser),
				browserWarning = !0)
	},

	onblur = () => {
		liteMode && bgPreference.startsWith("Live") && liveBgBox.pause()
	},
	onfocus = () => {
		liteMode && bgPreference.startsWith("Live") && liveBgBox.play()
	},
	addEventListener("visibilitychange", () => {
		bgPreference.startsWith("Live") && (document.hidden ? liveBgBox.pause() : liveBgBox.play())
	}),
	input0.onkeydown = a => {
		switch (a.keyCode) {
			case 13:
				return search(),
					!1;
			case 38:
				return selectKeyword(-1),
					!1;
			case 40:
				return selectKeyword(1),
					!1;
		}
	},
	input0.onfocus = () => {

			
			
		!1 === autoClrSearchBar && input0.select(),
			!0 === hitokoto && (quotebox.style.opacity = "1"),
			searchOptBox.style.display = "block",
			input0.classList.add("focus"),
			
			$(function(){
			if(window.localStorage.getItem('SearchHistory') == 'off' && window.localStorage.getItem('Historylist') == '' || input0.value != ''){
				SearchHistorybox.style.display = "none",
				SearchHistorybox.style.opacity = "0",
				setTimeout(()=>SearchHistorybox.style.maxHeight = "0", 150)
			}else{
				SearchHistorybox.style.display = "block",
				SearchHistorybox.style.opacity = "1",
				setTimeout(()=>SearchHistorybox.style.maxHeight = "330px", 150)
			}
			})
			
			
			setTimeout(() => {
				searchOptBox.style.opacity = "1",
					searchOptBox.style.top = 600 < innerWidth ? "270px" : "155px"
			}, 100),
			600 >= innerWidth && (title.style.top = "30px"),
			bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = "scale(1.1)"),
				liveBgBox.classList.add("focus")) : (!1 === reduceMotion && (bgbox.style.transform = "scale(1.1)"),
				bgbox.classList.add("focus"))
	},
	input0.oninput = () => {
		if (clearInterval(window.timeoutKeyword),
			input0.value.trim()) {
			const a = document.createElement("div");
			keyword.innerHTML = "",
				//a.innerText = "\u7FFB\u8BD1\uFF1A" + input0.value,
				a.onclick = () => {
					input0.value = a.innerText,
						search()
				},
				//keyword.appendChild(a),
				//keyword.style.height = "30px",
				//keyword.style.display = "block",
				//$("#keyword").animate({ opacity: 'show', height: 'show' }, 'fast');
				window.time = Date.now()
		}
	},
	inputCustomUrl.oncontextmenu = inputCustomTitle.oncontextmenu = input0.oncontextmenu = a => {
		theTextArea = a.target,
			showSearchMenu(a),
			menuGroupingLineEngine.style.display = "block",
			searchMenuEngine.style.display = "block"
	},
	textNote.oncontextmenu = a => {
		showSearchMenu(a),
			menuGroupingLineEngine.style.display = "none",
			searchMenuEngine.style.display = "none"
	},

	//此处是右键单击捷径图标显示右键菜单，带删除
	links01.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links01.style.display = "none",
				localStorage.setItem('navlinks_1', 'false');
		}
		showUserMenu(a)
	},
	links2.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links2.style.display = "none",
				localStorage.setItem('navlinks_2', 'false');
		}
		showUserMenu(a)
	},
	links3.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links3.style.display = "none",
				localStorage.setItem('navlinks_3', 'false');
		}
		showUserMenu(a)
	},
	links4.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links4.style.display = "none",
				localStorage.setItem('navlinks_4', 'false');
		}
		showUserMenu(a)
	},
	links5.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links5.style.display = "none",
				localStorage.setItem('navlinks_5', 'false');
		}
		showUserMenu(a)
	},
	links6.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links6.style.display = "none",
				localStorage.setItem('navlinks_6', 'false');
		}
		showUserMenu(a)
	},
	links7.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links7.style.display = "none",
				localStorage.setItem('navlinks_7', 'false');
		}
		showUserMenu(a)
	},
	links8.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			links8.style.display = "none",
				localStorage.setItem('navlinks_8', 'false');
		}
		showUserMenu(a)
	},
	setMenuBgPref1.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			setMenuBgPref1.style.display = "none",
				localStorage.setItem('navlinks_setMenuBgPref1', 'false');
		}
		showUserMenu(a)
	},
	chkDarkModeInner1.oncontextmenu = a => {
		cusNavMenuPresetDel.onclick = () => {
			chkDarkModeInner1.style.display = "none",
				localStorage.setItem('navlinks_chkDarkModeInner1', 'false');
		}
		showUserMenu(a)
	},


	cover.onclick = () => inputBlur();

function inputBlur() {
	!0 === autoClrSearchBar ? input0.value = "" : window.getSelection().empty(),
		!0 === hitokoto && (quotebox.style.opacity = "0",
			quotebox.style.animation = "none"),
		searchOptBox.style.opacity = "0",
		searchOptBox.style.top = "",
		input0.classList.remove("focus"),
		
		SearchHistorybox.style.display = "none",
			SearchHistorybox.style.opacity = "0",
			setTimeout(()=>SearchHistorybox.style.maxHeight = "0", 150)
		
		setTimeout(() => {
			searchOptBox.style.display = "none",
				searchOptBox.style.top = ""
		}, 250),
		600 >= innerWidth && (title.style.top = "100px",
			input0.style.top = ""),
		bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = ""),
			liveBgBox.classList.remove("focus")) : (!1 === reduceMotion && (bgbox.style.transform = ""),
			bgbox.classList.remove("focus")),
		hideKeyword()
}

function keydata(a) {
	for (let b = 0; b < a.s.length; b++) {
		const c = document.createElement("div");
		c.innerText = a.s[b],
			c.onclick = () => {
				input0.value = a.s[b],
					search()
			},
			keyword.appendChild(c)
	}!0 === hitokoto && (quotebox.style.opacity = "0"),
		keyword.style.height = 30 * (a.s.length + 1) + "px"
}

var SearchHistorylist = JSON.parse(localStorage.getItem('Historylist'));
function search() {
	const a = input0.value,
		b = encodeURIComponent(a.replace("\u7FFB\u8BD1\uFF1A", ""));
	let c;
	if (/^[a-z]+:\/\/[a-z0-9_\-\/.#?=%]+$/i.test(a))
		open(a);
	else if (-1 != a.indexOf("\u7FFB\u8BD1\uFF1A"))
		c = "https://fanyi.baidu.com/#en/zh/" + b;
	else if ("custom" == currentSearchEngine)
		cusSearchEngURL.startsWith("https://") ? c = cusSearchEngURL + b : (alert(
				"\u641C\u7D22URL\u683C\u5F0F\u4E0D\u89C4\u8303\u3002\u5DF2\u81EA\u52A8\u5207\u6362\u4E3A\u9ED8\u8BA4\u641C\u7D22\u5F15\u64CE\u3002"
				),
			c = "https://www.baidu.com/s?ie=utf-8&word=" + b,
			switchSearchEng("baidu"));
	else {
		const a = document.getElementById(currentSearchEngine + "SearchEngUrl");
		a && (c = a.innerText + b)
	}
	c && (openInNew ? open(c) : location.href = c),
		setTimeout(() => inputBlur(), 50),
//保存搜索记录到localstorage
		$(function(){
			SearchHistorylist.push({
				searchhistorylisttitle: SearchHistorygjz.value
			});
			localStorage.setItem('Historylist',JSON.stringify(SearchHistorylist));
			$("#SearchHistorybox").empty();
			SearchHistorybox.style.display = "block",
			SearchHistorybox.style.opacity = "1",
			showsearchhistorylist();
		})
}

var SearchHistorygjz = document.getElementById("input0");
//网页加载后
$(function(){
		if(!SearchHistorylist){
		SearchHistorylist = [];
		}
		else{
			// 初始化
			showsearchhistorylist();
		}
})
// DOM记录到列表上
function showsearchhistorylist(){
	for(key in SearchHistorylist){
		$("#SearchHistorybox").prepend(`
			<li>${SearchHistorylist[key].searchhistorylisttitle}</li>
		`);
		}
		$("#SearchHistorybox").append(`
			<div class="clrSearchHistory" id="ClearHistory"><i></i>清除历史记录</div>
		`);
		if(window.localStorage.getItem('Historylist') == null || window.localStorage.getItem('autoFocus') == 'off' || window.localStorage.getItem('SearchHistory') == 'off'){
			SearchHistorybox.style.display = "none",
			SearchHistorybox.style.opacity = "0"
		}else{
			SearchHistorybox.style.display = "block",
			SearchHistorybox.style.opacity = "1",
			setTimeout(()=>SearchHistorybox.style.maxHeight = "330px", 150)
		}
}

$(function(){
	if(window.localStorage.getItem('Historylist') == null || window.localStorage.getItem('Historylist') == '' || window.localStorage.getItem('Historylist') == '[]'){
	}else{
		ClearHistory.onclick = ()=>{
		localStorage.removeItem("Historylist"),
		SearchHistorybox.style.display = "none"
		}
	}
})

function selectKeyword(a) {
	const b = keyword.getElementsByTagName("li");
	selectedKeyword + a >= b.length ? selectedKeyword = 0 : 0 > selectedKeyword + a ? selectedKeyword = b.length - 1 :
		selectedKeyword += a;
	for (let c = 0; c < b.length; c++)
		b[c].classList.remove("focus1");
	b[selectedKeyword] && (b[selectedKeyword].classList.add("focus1"),
		input0.value = b[selectedKeyword].innerText) //此处若只有一个等号，则按上下键的时候搜索框显示引擎候选词
}
const searchOpts = document.getElementsByClassName("searchOpt");
for (let a = 0; a < searchOpts.length; a++) {
	const b = searchOpts[a].id.replace("SearchOpt", "");
	searchOpts[a].onclick = () => searchOptBox.style.top && switchSearchEng(b)
}
const searchEngListItems = document.getElementsByClassName("searchEngListItem");
for (let a = 0; a < searchEngListItems.length; a++) {
	const b = searchEngListItems[a].firstElementChild.id.replace("RadioSearchEng", "");
	searchEngListItems[a].onclick = () => switchSearchEng(b)
}

function switchSearchEng(a) {
	currentSearchEngine = a,
		localStorage.setItem("searchEngPref", a),
		baiduSearchOpt.classList.remove("selected"),
		bingSearchOpt.classList.remove("selected"),
		googleSearchOpt.classList.remove("selected"),
		document.getElementById(a + "RadioSearchEng").click();
	"baidu" === a ? (baiduSearchOpt.classList.add("selected"),
		navlinkTranslate.href = "https://fanyi.baidu.com/",
		navlinkMap.href = "https://map.baidu.com/",
		navlinkImage.href = "https://image.baidu.com/",
		navlinkCloudDrive.href = "https://pan.baidu.com/") : "bing" === a ? (bingSearchOpt.classList.add(
		"selected"),
		navlinkTranslate.href = "https://cn.bing.com/translator/",
		navlinkMap.href = "https://cn.bing.com/maps/",
		navlinkImage.href = "https://cn.bing.com/images/",
		navlinkCloudDrive.href = "https://onedrive.live.com/") : "google" === a ? (googleSearchOpt.classList.add(
			"selected"),
		navlinkTranslate.href = "https://translate.google.cn/",
		navlinkMap.href = "https://www.google.com/maps/",
		navlinkImage.href = "https://www.google.com/imghp",
		navlinkCloudDrive.href = "https://drive.google.com/") : "custom" === a ? (cusSearchEngURL =
		inputCusSearchEngUrl.value,
		localStorage.setItem("cusSearchEngURL", cusSearchEngURL)) : void 0;
	"1" != popSearchEng.style.opacity && input0.focus()
}
keyword.onclick = () => {
	setTimeout(() => inputBlur(), 50)
};

function hideKeyword() {
	//keyword.style.height = "0px",
	keyword.style.maxHeight = "0px",
		keyword.style.opacity = "0"
	setTimeout(() => {
		//keyword.style.display = "none",
		keyword.innerHTML = ""
		//keyword.style.height = "auto",
		//keyword.style.opacity = "1"
	}, 250)
}
title.onclick = a => {
		tipBoxGuideContent.innerText =
"\u5728\u4E8C\u7EA7\u754C\u9762\uFF0C\u60A8\u53EF\u4EE5\u6DFB\u52A0\u7F51\u7AD9\u6377\u5F84\u3001\u521B\u5EFA\u4FBF\u7B3A\u3001\u4FEE\u6539\u58C1\u7EB8\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u300C\u8BBE\u7F6E\u300D\u56FE\u6807\u53EF\u4EE5\u6839\u636E\u60A8\u7684\u559C\u597D\u5BF9\u8D77\u59CB\u9875\u8FDB\u884C\u4E2A\u6027\u5316\u66F4\u6539\u3002";
		tipBoxGuideContent2.innerText =
			"\u60A8\u4E5F\u53EF\u70B9\u51FB\u9875\u9762\u4E0B\u65B9\u7684\u300C\u5173\u4E8E\u300D\u67E5\u770B\u8D77\u59CB\u9875\u7684\u66F4\u65B0\u65E5\u5FD7\u7B49\u4FE1\u606F\u3002";
		//判断第一次点击和第二次点击
		var f = false;
		$(".title").click(function() {
			if (f = !f) {
				hideMenu(tipBoxBrowser1)
			} else {
				hideMenu(tipBoxBrowser1)
			}
		});
		"block" == navbox.style.display ? navbox.onclick(a) : (input0.style.opacity = "0",
			inputBlur(),
			!0 === hitokoto && (quotebox.style.opacity = "0",
				quotebox.style.animation = "none"),
			bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = "scale(1.1)"),
				liveBgBox.classList.add("focus")) : (!1 === reduceMotion && (bgbox.style.transform = "scale(1.1)"),
				bgbox.classList.add("focus")),
			navbox.style.display = "block",
			btnUser.style.display = "block",
			btnSettings.style.display = "block",
			!0 === browserWarning && (btnWarn.style.display = "block"),
			"Bing" == bgPreference && (btnLike.style.display = "block"),
			document.getElementById("he-plugin-simple").style.opacity = "0.5",
			document.getElementById("he-plugin-simple").style.pointerEvents = "auto"
		)
	},
	title.onmouseenter = () => {
		//title.style.transform = "scale(1.15)",
			setTimeout(() => title.style.transform = "scale(1.1)", 250)
	},
	title.onmouseleave = () => {
		title.style.transform = "scale(0.95)",
			setTimeout(() => title.style.transform = "scale(1)", 250)
	},
	navbox.onclick = a => {
		const b = a.target;
		b && !1 == b.classList.contains("shouldNotFade") && (input0.style.opacity = "1",
			bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = ""),
				liveBgBox.classList.remove("focus")) : (!1 === reduceMotion && (bgbox.style.transform = ""),
				bgbox.classList.remove("focus")),
			navbox.style.opacity = "0",
			btnUser.style.opacity = "0",
			btnSettings.style.opacity = "0",
			btnLike.style.opacity = "0",
			!0 === browserWarning && (btnWarn.style.opacity = "0"),
			setTimeout(() => {
				navbox.style.display = "none",
					btnUser.style.display = "none",
					btnSettings.style.display = "none",
					btnLike.style.display = "none",
					!0 === browserWarning && (btnWarn.style.display = "none"),
					navbox.style.opacity = "",
					btnUser.style.opacity = "",
					btnSettings.style.opacity = "",
					btnLike.style.opacity = "",
					!0 === browserWarning && (btnWarn.style.opacity = "")
			}, 250),
			document.getElementById("he-plugin-simple").style.opacity = "0",
			document.getElementById("he-plugin-simple").style.pointerEvents = "none",
			(frmSetCustomNav.style.opacity = "1") && btnCloseFrmCusNav.onclick(),
			hideMenu(tipBoxBrowser1)
		)
	},


	quotebox.oncontextmenu = cover.oncontextmenu = () => {
		"1" === menuSearch.style.opacity && hideMenu(menuSearch),
			title.onclick()
	};

function encodeData(a) {
	const b = [];
	for (const c in a)
		a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
	return b.join("&")
}
//textNote.onclick = ()=>isLoggedIn(),

textNote.onkeydown = a => {
		(a.ctrlKey || a.metaKey) && 83 == a.keyCode && noteList.save()
	},
	//btnDelNote.onclick = ()=>noteList.isOpened() && confirm("\u5220\u9664\u8FD9\u6761\u4FBF\u7B3A\uFF1F") && noteList.delete(),
	//btnSaveNote.onclick = ()=>noteList.save();

	btnSaveNote.onclick = () => {
		//noteList.save();
		//noteCloudStatusIndicator.style.left = "28px";
		//noteCloudStatusIndicator.style.display = "inherit";
		document.getElementById("tipNoteCloud").style.overflow = "unset";
		NoteCloudtext.innerText = "\u6B63\u5728\u4FDD\u5B58";
		NoteCloudtext.style.color = "#ffa769";
		//iconNoteCloud.style.color="#ffa769";
		setTimeout(function() {
			NoteCloudtext.style.color = "#70c000";
			//iconNoteCloud.style.color="#70c000";
			NoteCloudtext.innerText = "\u5DF2\u4FDD\u5B58";
			document.title = "\u5c0f\u5e03\u8d77\u59cb\u9875\u002d\u8fd8\u4f60\u6e05\u65b0\u6d4f\u89c8\u5668";
			//noteCloudStatusIndicator.style.display="block";
			//noteCloudStatusIndicator.style.left = "40px";
			setTimeout(function() {
				NoteCloudtext.innerText =
					"\u4FBF\u7B3A\u4E91\u540C\u6B65\u7531\u77E5\u79CB\u4E91\u63D0\u4F9B\u6280\u672F\u652F\u6301";
			}, 1501);
			setTimeout(function() {
				NoteCloudtext.style.color = "rgb(0 0 0 / 50%)";
			}, 1500);
			//send();
		}, 250);
	}

function createPinnedNote(a, b, c) {
	const d = document.createElement("div"),
		e = document.createElement("div"),
		f = document.createElement("div"),
		g = document.createElement("span");
	d.className = "pinnedNote",
		d.id = "pinnedNote" + a,
		d.onclick = () => pinnedNoteClick(a),
		d.onmousemove = pinnedNoteHover,
		d.onmouseout = pinnedNoteHover2,
		e.className = "pinnedNoteContent",
		e.id = "pinnedNoteContent" + a,
		e.innerText = b,
		f.className = "pinnedNoteTime",
		f.id = "pinnedNoteTime" + a,
		f.innerText = c,
		g.className = "btnCloseS",
		g.id = "btnUnpin" + a,
		g.onclick = b => {
			b.stopPropagation(),
				unpinNote(a)
		},
		d.appendChild(e),
		d.appendChild(f),
		d.appendChild(g),
		pinnedBox.appendChild(d)
}

//点击换页按钮时的缩小放大动画
function navboxScale0() {
	// navbox1.style.transform = "scale(0.9)",
		// navbox2.style.transform = "scale(0.9)"
}
//点击换页按钮时的缩小放大动画
function navboxScale1() {
	// navbox1.style.transform = "scale(1)",
		// navbox2.style.transform = "scale(1)"
}
nbSwitch1.onclick = () => {
		"0px" != navbox1.style.left && (nbSwitch2_0.classList.remove("current"),
			nbSwitch1_0.classList.add("current"),
			!1 === reduceMotion ? (navboxScale0(),
				setTimeout(() => {
					navbox1.style.left = "0px",
						navbox2.style.left = "100%"
				}, 100),
				setTimeout(() => navboxScale1(), 400)) : (navbox1.style.left = "0px",
				navbox2.style.left = "100%"),
			window.cooldownScroll = !0,
			setTimeout(() => window.cooldownScroll = !1, 400))
	},
	nbSwitch2.onclick = () => {
		"0px" != navbox2.style.left && (nbSwitch1_0.classList.remove("current"),
			nbSwitch2_0.classList.add("current"),
			!1 === reduceMotion ? (navboxScale0(),
				setTimeout(() => {
					navbox1.style.left = "-100%",
						navbox2.style.left = "0px"
				}, 100),
				setTimeout(() => navboxScale1(), 400)) : (navbox1.style.left = "-100%",
				navbox2.style.left = "0px"),
			window.cooldownScroll = !0,
			setTimeout(() => window.cooldownScroll = !1, 400))
	};

function showAbout() {
	pVersion.innerText = version,
		window.frmChangeLog || (window.frmChangeLog = document.createElement("iframe"),
			frmChangeLog.id = "frmChangeLog",
			frmChangeLog.title = "\u66F4\u65B0\u65E5\u5FD7",
			frmChangeLog.src = "changelog.html",
			changeLog.appendChild(frmChangeLog)),
		showPop(popAbout)
}

function showPop(a) {
	if (cover1.style.display = "block",
		a.style.display = "block",
		!1 === reduceMotion) {
		const b = a.getElementsByClassName("btnClose")[0];
		b && !b.onmouseenter && (b.onmouseenter = function() {
					!1 === reduceMotion && (a = this.parentNode,
						a.style.transform = "rotate3d(1,1,0,5deg)")
				},
				b.onmouseleave = function() {
					!1 === reduceMotion && !1 == popUpClosing && (a.style.transform = "none")
				}
			),
			setTimeout(() => {
				cover1.style.opacity = "1",
					a.style.opacity = "1",
					a.classList.add("showPop"),
					setTimeout(() => {
						a.style.transform = "none",
							a.classList.remove("showPop")
					}, 300)
			}, 100)
	} else
		cover1.style.opacity = "1",
		a.style.transition = "all 0s",
		a.style.transform = "none",
		a.style.transition = "all 0.25s",
		setTimeout(() => a.style.opacity = "1", 25)
}
const btnCloses = document.getElementsByClassName("btnClose");
for (let a = 0; a < btnCloses.length; a++) {
	const b = btnCloses[a].parentNode;
	btnCloses[a].onclick = () => closePop(b)
}

function closePop(a) {
	popUpClosing = !0,
		cover1.style.opacity = "0",
		a.style.opacity = "0",
		!1 === reduceMotion && (a.style.transform = "rotate3d(1,1,0,20deg)"),
		setTimeout(() => {
			cover1.style.display = "none",
				a.style.display = "none",
				!1 === reduceMotion && (a.style.transform = "rotate3d(1,1,0,20deg)"),
				popUpClosing = !1
		}, 350)
}
btnBrowse.onclick = () => {
		inputImg.value = "",
			inputImg.click()
	},
	inputImg.onchange = a => {
		const b = new FileReader;
		b.onload = () => {
				try {
					localStorage.setItem("cusWallpaper", b.result)
				} catch (a) {
					return void alert(
						"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u9009\u62E9\u5C0F\u4E8E 4MB \u7684\u56FE\u7247\u5594"
						)
				}
				cusWallpaper = b.result,
					bgPreBoxInCus.classList.remove("unset"),
					bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")",
					changeWp("bgPreBoxCus")
			},
			b.readAsDataURL(a.target.files[0])
	};
const bgPreBoxes = document.getElementsByClassName("bgPreviewBox");
for (let a = 0; a < bgPreBoxes.length; a++) {
	const b = bgPreBoxes[a].id;
	bgPreBoxes[a].onclick = () => changeWp(b)
}

function changeWp(a) {
	const b = document.getElementsByClassName("bgPreBoxInner");
	for (let c = 0; c < b.length; c++)
		b[c].classList.remove("selected");
	"bgPreBoxCus" === a ? cusWallpaper && (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = cusWallpaper,
		bgbox.style.opacity = "1",
		bgPreBoxInCus.classList.add("selected"),
		localStorage.setItem("bgPreference", "Custom"),
		bgPreference = "Custom",
		bgbox.classList.add("focus")) : "bgPreBoxD1" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "/static/images/bg1.jpg",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxIn1.classList.add("selected"),
		localStorage.setItem("bgPreference", "Default"),
		bgPreference = "Default",
		bgbox.classList.add("focus")) : "bgPreBoxD2" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "https://inews.gtimg.com/newsapp_ls/0/13664068784/0",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxIn2.classList.add("selected"),
		localStorage.setItem("bgPreference", "Default2"),
		bgPreference = "Default2",
		bgbox.classList.add("focus")) : "bgPreBoxD3" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "/static/images/bg2.jpg",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxIn3.classList.add("selected"),
		localStorage.setItem("bgPreference", "Default3"),
		bgPreference = "Default3",
		bgbox.classList.add("focus")) : "bgPreBoxD4" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "https://inews.gtimg.com/newsapp_ls/0/13662879975/0",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxIn4.classList.add("selected"),
		localStorage.setItem("bgPreference", "Default4"),
		bgPreference = "Default4",
		bgbox.classList.add("focus")) : "bgPreBoxD5" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "/static/images/bg3.jpg",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxIn5.classList.add("selected"),
		localStorage.setItem("bgPreference", "Default5"),
		bgPreference = "Default5",
		bgbox.classList.add("focus")) : "bgPreBoxD6" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_6.jpg",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxIn6.classList.add("selected"),
		localStorage.setItem("bgPreference", "Default6"),
		bgPreference = "Default6",
		bgbox.classList.add("focus")) : "bgPreBoxBing" === a ? (liveBgBox.style.display = "none",
		liveBgBox.pause(),
		bgbox.src = "/other/bing/bingpic.php",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		bgbox.style.opacity = "1",
		bgPreBoxInBing.classList.add("selected"),
		localStorage.setItem("bgPreference", "Bing"),
		bgPreference = "Bing",

		bgbox.classList.add("focus")) : "bgPreBoxLive" === a ? (liveBgBox.src =
		"https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_1.mp4",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		liveBgBox.style.display = "block",
		liveBgBox.play(),
		setTimeout(() => liveBgBox.style.opacity = "1", 50),
		bgbox.style.opacity = "0",
		bgPreBoxInLive.classList.add("selected"),
		localStorage.setItem("bgPreference", "Live"),
		bgPreference = "Live",


		liveBgBox.classList.add("focus"),
		!0 === liteMode) : "bgPreBoxLive2" === a ? (liveBgBox.src =
		"https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_2.mp4", //这一行的liteMode后面加 && location.reload()可以做到设置视频背景后刷新网页的效果
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		liveBgBox.style.display = "block",
		liveBgBox.play(),
		setTimeout(() => liveBgBox.style.opacity = "1", 50),
		bgbox.style.opacity = "0",
		bgPreBoxInLive2.classList.add("selected"),
		localStorage.setItem("bgPreference", "Live2"),
		bgPreference = "Live2",

		liveBgBox.classList.add("focus"),
		!0 === liteMode) : "bgPreBoxLive5" === a ? (liveBgBox.src =
		"https://tiger.cdnja.co/v/lm/LM4dg.mp4?secure=MezVbuX6Cq2IQHBV7zlCSw&expires=1592886600",
		localStorage.removeItem("Networkpicture"),
		localStorage.removeItem("Networkvideos"),
		liveBgBox.style.display = "block",
		liveBgBox.play(),
		setTimeout(() => liveBgBox.style.opacity = "1", 50),
		bgbox.style.opacity = "0",
		bgPreBoxInLive5.classList.add("selected"),
		localStorage.setItem("bgPreference", "Live5"),
		bgPreference = "Live5",

		liveBgBox.classList.add("focus"),
		!0 === liteMode) : void 0
}

function getPostData(a) {
	const b = new FormData;
	for (const c in a)
		a[c] && b.append(c, a[c]);
	return {
		body: b,
		method: ""
	}
}
btnLike.onclick = () => {
		btnLike.classList.add("rebound")
	},

	btnLike.onmouseenter = () => showMenu(wallpaperInfo),
	btnLike.onmouseleave = () => hideMenu(wallpaperInfo);

function currentTime() {
	const a = new Date,
		b = a.getFullYear(),
		c = a.getMonth() + 1,
		d = a.getDate(),
		e = a.getHours();
	let f = a.getMinutes();
	return 10 > f && (f = "0" + f),
		titleText.innerHTML = e + "<span>:</span>" + f,
		//b + "\u5E74" + c + "\u6708" + d + "\u65E5 " + e + ":" + f;
		currentTime = b + "年" + c + "月" + d + "日 " + e + ":" + f
};
setInterval(currentTime, 1e3);

function cusNavClick(b) {
	if (currentAddingNav != b || "0" === frmSetCustomNav.style.opacity) {
		!0 === cusNavEditingMode ? (captionSetCusNav.innerText = "\u7F16\u8F91\u7F51\u7AD9\u6377\u5F84",
			btnAddCusNav.innerText = "\u4FDD\u5B58") : (captionSetCusNav.innerText =
			"\u6DFB\u52A0\u7F51\u7AD9\u6377\u5F84",
			btnAddCusNav.innerText = "\u6DFB\u52A0");
		let c = a.clientX - 150;
		currentAddingNav = b,
			0 > c ? c = 10 : c + 300 > innerWidth && (c = innerWidth - 310),
			frmSetCustomNav.style.left = c + "px",
			frmSetCustomNav.style.top = a.clientY - 180 + "px",
			frmSetCustomNav.style.display = "block",
			setTimeout(() => {
				frmSetCustomNav.style.opacity = "1",
					frmSetCustomNav.style.transform = "scale(1.05)"
			}, 50),
			setTimeout(() => frmSetCustomNav.style.transform = "scale(1)", 300)
	} else
		btnCloseFrmCusNav.onclick(),
		currentAddingNav = "",
		currentEditingNav = ""
}
btnCloseFrmCusNav.onclick = () => {
		frmSetCustomNav.style.transform = "scale(1.05)",
			setTimeout(() => frmSetCustomNav.style.opacity = "0", 150),
			setTimeout(() => frmSetCustomNav.style.transform = "scale(0.5)", 200),
			setTimeout(() => frmSetCustomNav.style.display = "none", 400),
			setTimeout(() => title.style.zIndex = "unset", 200),
			setTimeout(() => frmSetCustomNav.style.position = "absolute", 200)
	},
	inputCustomUrl.onkeydown = inputCustomTitle.onkeydown = a => {
		13 == a.keyCode && btnAddCusNav.onclick()
	}






function getDefaultCusNavIcon(a) {
	if (!a.naturalWidth || 17 > a.naturalWidth && confirm(
			"\u6B64\u7F51\u7AD9\u7684\u56FE\u6807\u5206\u8FA8\u7387\u8FC7\u4F4E\uFF0C\u8981\u4F7F\u7528\u81EA\u52A8\u751F\u6210\u7684\u56FE\u6807\u5417\uFF1F"
			)) {
		let b = cusNavIconUrlParsed.host;
		b.startsWith("www.") && (b = b.substring(4)),
			b = b.substring(0, 1).toUpperCase();
		const c = ["333&fg=70BF00", "333&fg=FF4B68", "333&fg=F0C419", "333&fg=C0CA55", "333&fg=5CA1FF", "333&fg=916BC5",
				"56626B&fg=FFF", "6C9380&fg=FFF", "C0CA55&fg=333", "F07C6C&fg=333", "AD5472&fg=FFF"
			],
			d = c[Math.floor(Math.random() * c.length)];
		cusNavIconUrl = "https://iph.href.lu/128x128?bg=" + d + "&text=" + b,
			a.src = cusNavIconUrl,
			a.classList.add("round"),
			cusNavIconErrCount = 0
	}
}

function submitCusNav() {
	if (++cusNavSubmitCount,
		1 == cusNavSubmitCount) {
		let a = inputCustomUrl.value;
		a = a.startsWith("http") ? encodeURIComponent(a) : encodeURIComponent("http://" + a),
			a = "\"" + a + "\"",
			cusNavIconUrl = encodeURIComponent(cusNavIconUrl);
		let b;
		!0 === cusNavEditingMode ? b = "editCusNav" : (b = "submitCusNav",
				currentEditingNav = ""),
			fetch("#", getPostData({
				action: b,
				rthUsername: login.username,
				cusNavUrl: a,
				cusNavTitle: inputCustomTitle.value,
				cusNavIconUrl: cusNavIconUrl,
				editIndex: currentEditingNav
			})).then(a => {
				if (a.ok)
					return a.text()
			}).then(getCusNav)
	}
	setTimeout(() => cusNavSubmitCount = 0, 2e3)
}
onclick = () => {

		"1" === menuSettings.style.opacity && hideMenu(menuSettings),
			"1" === menuCusNav.style.opacity && hideMenu(menuCusNav),
			"1" === menuCusNavPreset.style.opacity && hideMenu(menuCusNavPreset),
			"1" === menuSearch.style.opacity && hideMenu(menuSearch),
			"1" === tipBoxCopyPaste.style.opacity && hideMenu(tipBoxCopyPaste),
			"1" === tipBoxLogin.style.opacity && hideMenu(tipBoxLogin),
			"1" === tipBoxBrowser.style.opacity && hideMenu(tipBoxBrowser)
		//"1" === tipBoxBrowser1.style.opacity && hideMenu(tipBoxBrowser1)
	},

	btnWarn.onmouseenter = () => {
		showMenu(tipBoxBrowser)
		//showMenu(tipBoxBrowser1)
	},

	btnWarn.onmouseout = () => {
		hideMenu(tipBoxBrowser)
		//showMenu(tipBoxBrowser1)
	},

	tipBoxBrowser.onmouseleave = () => {
		"1" === tipBoxBrowser.style.opacity && hideMenu(tipBoxBrowser)
	},

	//tipBoxBrowser1.onmouseleave = ()=>{
	//    "1" === tipBoxBrowser1.style.opacity && hideMenu(tipBoxBrowser1)
	//}

	btnUser.onclick = () => showPop(loginin),

	btnUser.onmouseenter = () => {
		(showMenu(tipBoxLogin),
			offlineMark.style.opacity = 0)
	},
	btnUser.onmouseout = () => {
		"1" === tipBoxLogin.style.opacity && hideMenu(tipBoxLogin)
	},


	btnSettings.onclick = () => {
		"1" === menuSettings.style.opacity ? hideMenu(menuSettings) : showMenu(menuSettings)
	},
	setMenuGeneral.onclick = () => showPop(popGeneralSettings),
	setMenuSearchEngPref.onclick = () => showPop(popSearchEng),
	searchMenuEngine.onclick = () => showPop(popSearchEng),
	setMenuBgPref.onclick = () => showPop(popBg),
	setMenuDonate.onclick = () => showPop(popDonate),
	setMenuFeedback.onclick = () => showPop(popFeedback);

function showMenu(a) {
	a.style.display = "block",
		setTimeout(() => {
			a.style.opacity = "1",
				a.style.transform = "scale(1.05)"
		}, 50),
		setTimeout(() => a.style.transform = "scale(1)", 275)
}

function hideMenu(a) {
	a.style.transform = "scale(0.5)",
		a.style.opacity = "0",
		setTimeout(() => a.style.display = "none", 275)
}


function isLoggedIn() {
	return !!login.username || (window.frmLogin || (window.frmLogin = document.createElement("iframe"),
			frmLogin.id = "frmLogin",
			frmLogin.title = "\u767B\u5F55",
			frmLogin.src = "",
			popLogin.appendChild(frmLogin)),
		showPop(popLogin),
		!1)
}

function loggedIn(a) {
	a && closePop(popLogin),
		accInfoTextEmail.innerText = login.email,
		accInfoTextUid.innerText = login.username,
		fetch("#" + encodeData({
			action: "verifyUsername",
			rthUsername: login.username,
			email: login.email
		})).then(a => {
			if (a.ok)
				return a.text()
		}).then(a => {
			if (a)
				if ("0" === a)
					showPop(popCompleteReg);
				else {
					const b = JSON.parse(a);
					let c, d;
					if (username = b[0].username,
						birthday = b[0].birthday,
						birthday) {
						let a = new Date().getMonth() + 1;
						const b = new Date().getDate();
						10 > a && (a = "0" + a),
							d = a + "-" + b,
							c = birthday.substring(5)
					}
					c && c == d ? showGreeting("", "\u751F\u65E5\u5FEB\u4E50\uFF0C" + username) : showGreeting(
							username, ""),

						titlePopAccount.innerText = "\u6B22\u8FCE\u4F60\uFF0C" + username,
						accInfoTextUid.innerText = b[0].uid,
						accInfoTextUsername.innerText = username,
						accInfoTextBirthday.innerText = birthday,
						inputEditUsername.value = username,
						inputEditBirthday.value = birthday
				}
		}),
		getCusNav(),
		noteList.load(),
		textNote.value = "",
		offlineMark.style.opacity = 0
}

function getCusNav() {
	fetch("#" + encodeData({
			action: "getCusNav",
			rthUsername: login.username
		})).then(a => {
			if (a.ok)
				return a.text()
		}).then(a => {
			a && (navboxCustom.innerHTML = a)
		}),
		inputCustomUrl.value = "",
		inputCustomTitle.value = ""
}

function loadCusNavSlots() {
	fetch("" + encodeData({
		action: ""
	})).then(a => {
		if (a.ok)
			return a.text()
	}).then(a => {
		a && (a) //原navboxCustom.innerHTML = a
	})
}

//显示自定义网站捷径的位置，并显示弹窗
addlinks.onclick = (a) => {
	frmSetCustomNav.style.left = a.clientX - 166 + "px",
		frmSetCustomNav.style.top = a.clientY - 166 + "px",
		title.style.zIndex = "-1",
		nongli.style.zIndex = "-1",
		frmSetCustomNav.style.position = "sticky",
		showMenu(frmSetCustomNav)
}

//右键单击添加图标，隐藏添加捷径的弹窗
addlinks.oncontextmenu = () => {
	setTimeout(() => title.style.zIndex = "unset", 200),
	setTimeout(() => nongli.style.zIndex = "unset", 200),
	setTimeout(() => frmSetCustomNav.style.position = "absolute", 200),
	btnCloseFrmCusNav.onclick()
}


//此处是右键单击捷径图标显示右键菜单
function showCusNavPresetMenu(a, b) {
	"1" === menuCusNavPreset.style.opacity && navlinkTranslate.onclick(), navlinkMap.onclick(), navlinkImage.onclick(),
		navlinkCloudDrive.onclick(), navlinkSmallTool.onclick(), navlinkQqEmail.onclick(), navlinkCloudMusic.onclick(),
		navlinkBiliBili.onclick(), navlinkWallPaper.onclick(), navlinkWallPaper.onclick(),
		menuCusNavPreset.style.left = a.clientX + 3 + "px",
		menuCusNavPreset.style.top = a.clientY + 3 + "px",
		//currentEditingNav = a.id,
		//currentDeletingNav = a.id,
		showMenu(menuCusNavPreset)
}

function showCusNavMenu(a, b) {
	"1" === frmSetCustomNav.style.opacity && btnCloseFrmCusNav.onclick(),
		menuCusNav.style.left = a.clientX + 3 + "px",
		menuCusNav.style.top = a.clientY + 3 + "px",
		currentEditingNav = a.id,
		currentDeletingNav = a.id,
		showMenu(menuCusNav)
}

	cusNavMenuEdit.onclick = () => {
			//cusNavEditingMode = !0,
			//inputCustomUrl.value = "",
			//inputCustomTitle.value = document.getElementById(currentEditingNav).lastChild.innerText,
			//cusNavClick(event, this),
			swal("", "该功能开发中")
	},
	inputEditUsername.onkeyup = inputUsername.onkeyup = () => checkUsername();

function checkUsername() {
	const a = inputUsername.value.length - 1;
	let b = inputUsername.value.charAt(a);
	0 <= "[`~!#$^&*()=|{}':;',\\[\\].<>/?~\uFF01#\uFFE5\u2026\u2026&*\uFF08\uFF09\u2014\u2014|{}\u3010\u3011\u2018\uFF1B\uFF1A\u201D\u201C'\u3002\uFF0C\u3001\uFF1F]\u2018'"
		.indexOf(b) && (b = inputUsername.value.substring(0, a),
			inputUsername.value = b),
		20 < inputUsername.value.length ? (loginTipUsername.innerText =
			"\u7528\u6237\u540D\u957F\u5EA6\u4E0D\u7B26\u5408\u9650\u5236",
			loginTipUsername.style.color = isDark ? "#FF565F" : "#FF2F3C") : (loginTipUsername.innerText =
			"\u4E3A\u81EA\u5DF1\u8D77\u4E00\u4E2A\u597D\u542C\u7684\u7528\u6237\u540D",
			loginTipUsername.style.color = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)")
}
btnCompleteReg.onclick = () => {
		btnCompleteReg.style.pointerEvents = "none",
			0 < inputUsername.value.length && 21 > inputUsername.value.length && (username = inputUsername.value,
				fetch("", getPostData({
					action: "completeReg",
					rthUsername: login.username,
					username: username,
					birthday: inputBirthday.value
				})).then(a => {
					a.ok && (closePop(popCompleteReg),
						showGreeting(username, ""))
				}))
	},
	btnEditUsername.onclick = () => editBtnClick("username"),
	btnUpdateUsername.onclick = () => updateUserInfo("username"),
	btnEditBirthday.onclick = () => editBtnClick("birthday"),
	btnUpdateBirthday.onclick = () => updateUserInfo("birthday");

function editBtnClick(a) {
	"username" === a ? (btnEditUsername.style.display = "none",
		inputEditUsername.style.display = "inline-block",
		btnUpdateUsername.style.display = "inline-block") : "birthday" === a ? (btnEditBirthday.style.display =
		"none",
		inputEditBirthday.style.display = "inline-block",
		btnUpdateBirthday.style.display = "inline-block") : void 0
}

function updateUserInfo() {
	if (0 < inputEditUsername.value.length && 21 > inputEditUsername.value.length) {
		const a = inputEditUsername.value,
			b = inputEditBirthday.value;
		(a != username || b != birthday) && fetch("", getPostData({
				action: "completeReg",
				rthUsername: login.username,
				username: a,
				birthday: b
			})).then(c => {
				c.ok && (menuTextUsername.innerText = a,
					titlePopAccount.innerText = "\u6B22\u8FCE\u4F60\uFF0C" + a,
					accInfoTextUsername.innerText = a,
					accInfoTextBirthday.innerText = b,
					username = a,
					birthday = b)
			}),
			btnEditUsername.style.display = "inline-block",
			inputEditUsername.style.display = "none",
			btnUpdateUsername.style.display = "none",
			btnEditBirthday.style.display = "inline-block",
			inputEditBirthday.style.display = "none",
			btnUpdateBirthday.style.display = "none"
	}
}

//此处为弹出提示代码区，已经放在底部的起始页加载完成立刻执行的代码里面

// 判断鼠标滚轮切换捷径和便笺的代码2 function navboxScroll(a) {
//window.cooldownScroll || -1 != a.target.className.indexOf("note") || "textNote" == a.target.id || "iconAdd" == a.target.id || (0 > a.deltaX || 0 > a.deltaY ? nbSwitch1.onclick() : nbSwitch2.onclick())
//}

chkAutoClrSearchBarInner.onclick = () => {
		!0 == chkAutoClrSearchBar.checked ? (autoClrSearchBar = !1,
			localStorage.setItem("autoClrSearchBar", "off")) : (autoClrSearchBar = !0,
			localStorage.setItem("autoClrSearchBar", "on"))
	},
	chkOpenInNewInner.onclick = () => {
		!0 == chkOpenInNew.checked ? (openInNew = !1,
			localStorage.setItem("openInNew", "off")) : (openInNew = !0,
			localStorage.setItem("openInNew", "on"))
	},

	chkSearchHistoryInner.onclick = () => {
		!0 == chkSearchHistory.checked ? (SearchHistory = !1,
			localStorage.setItem("SearchHistory", "off")
			) : (SearchHistory = !0,
			localStorage.setItem("SearchHistory", "on"),
				$(function(){
				if(window.localStorage.getItem('Historylist') == null){
					SearchHistorybox.style.display = "none",
					SearchHistorybox.style.opacity = "0"
				}else{
					SearchHistorybox.style.display = "block",
					SearchHistorybox.style.opacity = "1"
				}
				})
			)
	},

	chkSearchCandidateInner.onclick = () => {
		!0 == chkSearchCandidate.checked ? (SearchCandidate = !1,
			localStorage.setItem("SearchCandidate", "off"),
			$("#keyword").addClass("closesearchcandidate")
		) : (SearchCandidate = !0,
			localStorage.setItem("SearchCandidate", "on"),
			$("#keyword").removeClass("closesearchcandidate")
		)
	},

	chkCompletePinnedNoteInner.onclick = () => {
		!0 == chkCompletePinnedNote.checked ? (CompletePinnedNote = !1,
			localStorage.setItem("CompletePinnedNote", "off"),
			pinnedNoteContent.style.maxHeight = "20px",
			pinnedNoteContent.style.marginBottom = "0px",
			pinnedNote.style.height = "55px",
			pinnedNoteContent.style.position = "absolute"
		) : (CompletePinnedNote = !0,
			localStorage.setItem("CompletePinnedNote", "on"),
			pinnedNoteContent.style.maxHeight = "unset",
			pinnedNoteContent.style.marginBottom = "40px",
			pinnedNote.style.height = "unset",
			pinnedNoteContent.style.position = "inherit"
		)
	},

	chkShowGreetinggtogreetInner.onclick = () => {
		!0 == chkShowGreetinggtogreet.checked ? (ShowGreetinggtogreet = !1,
			localStorage.setItem("ShowGreetinggtogreet", "off"),
			greetingBoxtogreet.style.display = "none",
			greetingBoxtogreet.style.opacity = "0"
		) : (ShowGreetinggtogreet = !0,
			localStorage.setItem("ShowGreetinggtogreet", "on"),
			greetingBoxtogreet.style.display = "block",
			greetingBoxtogreet.style.opacity = "1"
		)
	},

	chkWeatherInner.onclick = () => {
		var hepluginsimple = document.getElementById("he-plugin-simple");
		!0 == chkWeather.checked ? (Weather = !1,
			localStorage.setItem("Weather", "off"),
			tpweatherwidget.style.display = "none",
			hepluginsimple.style.opacity = "0",
			hepluginsimple.style.pointerEvents = "none"
		) : (Weather = !0,
			localStorage.setItem("Weather", "on"),
			tpweatherwidget.style.display = "block",
			hepluginsimple.style.opacity = "0.5",
			hepluginsimple.style.pointerEvents = "auto"
		)
	},

	chkBgGradientMaskInner.onclick = () => {
		!0 == chkBgGradientMask.checked ? (BgGradientMask = !1,
			localStorage.setItem("BgGradientMask", "off"),
			cover.style.opacity = "0"
		) : (BgGradientMask = !0,
			localStorage.setItem("BgGradientMask", "on"),
			cover.style.opacity = "1"
		)
	},

	chkTimeTwinkleInner.onclick = () => {
		!0 == chkTimeTwinkle.checked ? (TimeTwinkle = !1,
			localStorage.setItem("TimeTwinkle", "off"),
			$("#titleText").removeClass("twinkle")
		) : (TimeTwinkle = !0,
			localStorage.setItem("TimeTwinkle", "on"),
			$("#titleText").addClass("twinkle")
		)
	},





	chkAutoFocusInner.onclick = () => setAutoFocus();

function setAutoFocus() {
	!0 == chkAutoFocus.checked ? (autoFocus = !1,
		localStorage.setItem("autoFocus", "off")) : (autoFocus = !0,
		localStorage.setItem("autoFocus", "on"))
}


chkAutoShowSecondPageInner.onclick = () => setautoShowSecondPage();

function setautoShowSecondPage() {
	!0 == chkAutoShowSecondPage.checked ? (autoShowSecondPage = !1,
		localStorage.setItem("autoShowSecondPage", "off"),
		setOptCapAutoFocus.classList.remove("invalid"),

		!1 === autoFocus && (setAutoFocus(), //关闭加载时自动显示二级页面并打开加载时自动聚焦到搜索栏
			chkAutoFocus.checked = !0),
		zdjjssl.style.opacity = "1",
		zdjjssl.style.pointerEvents = "unset"

	) : (autoShowSecondPage = !0,
		localStorage.setItem("autoShowSecondPage", "on"),
		setOptCapAutoFocus.classList.add("invalid"),

		!0 === autoFocus && (setAutoFocus(), //打开加载时自动显示二级页面并关闭加载时自动聚焦到搜索栏
			chkAutoFocus.checked = !1),
		zdjjssl.style.opacity = ".5",
		zdjjssl.style.pointerEvents = "none"
	)
}


chkNoteAsDefaultInner.onclick = () => {
		!0 == chkNoteAsDefault.checked ? (noteAsDefault = !1,
			localStorage.setItem("noteAsDefault", "off"),
			nbSwitch1.onclick()) : (noteAsDefault = !0,
			localStorage.setItem("noteAsDefault", "on"),
			nbSwitch2.onclick())
	},
	chkHitokotoInner.onclick = () => {
		!0 == chkHitokoto.checked ? (hitokoto = !1,
			localStorage.setItem("hitokoto", "off"),
			quotebox.style.display = "none") : (hitokoto = !0,
			localStorage.setItem("hitokoto", "on"),
			quotebox.style.display = "block")
	},
	chkLiteModeInner.onclick = () => {
		!0 == chkLiteMode.checked ? (liteMode = !1,
			localStorage.setItem("liteMode", "off"),
			document.body.classList.remove("lite")) : (liteMode = !0,
			localStorage.setItem("liteMode", "on"),
			document.body.classList.add("lite"),
			!1 === reduceMotion && (setReduceMotion(), //打开流畅模式并且打开减弱动态效果
				chkReduceMotion.checked = !0),

			!0 === navLinksBlurEf && (setNavLinksBlurEf(), //打开流畅并关闭捷径栏的毛玻璃效果
				chkNavLinksBlurEf.checked = !1),

			!0 === NavLinksOpacity && (setNavLinksOpacity(), //打开流畅并关闭捷径的半透明效果
				chkNavLinksOpacity.checked = !1),

			!0 === Snows && (setSnows(), //打开流畅并关闭下雪特效
				chkSnows.checked = !1),

			!0 === NotesBlurEf && (setNotesBlurEf(), //打开流畅并关闭便笺区的毛玻璃效果
				chkNotesBlurEf.checked = !1),

			!0 === NotesOpacity && (setNotesOpacity(), //打开流畅并关闭便笺区的半透明效果
				chkNotesOpacity.checked = !1)

		)
	},

	chkReduceMotionInner.onclick = () => setReduceMotion();

function setReduceMotion() {
	!0 == chkReduceMotion.checked ? (reduceMotion = !1,
		localStorage.setItem("reduceMotion", "off")) : (reduceMotion = !0,
		localStorage.setItem("reduceMotion", "on"))
}

chkNavLinksBlurEfInner.onclick = () => setNavLinksBlurEf();

function setNavLinksBlurEf() {
	!0 == chkNavLinksBlurEf.checked ? (navLinksBlurEf = !1,
		localStorage.setItem("navLinksBlurEf", "off"),
		$(".customNav").removeClass("linkblurEf")
	) : (navLinksBlurEf = !0,
		localStorage.setItem("navLinksBlurEf", "on"),
		$(".customNav").addClass("linkblurEf"))
}

//下雪特效带联动，可当做代码案例
chkSnowsInner.onclick = () => setSnows();

function setSnows() {
	!0 == chkSnows.checked ? (Snows = !1,
		localStorage.setItem("Snows", "off"),
		$("#snow").addClass("indexsnow")) : (Snows = !0,
		localStorage.setItem("Snows", "on"),
		$("#snow").removeClass("indexsnow"))
}

//下雪特效按钮不带联动
//chkSnowsInner.onclick = ()=>{
//   !0 == chkSnows.checked ? (Snows = !1,
//    localStorage.setItem("Snows", "off"),
//	$("#snow").addClass("indexsnow")
//	) : (Snows = !0,
//    localStorage.setItem("Snows", "on"),
//	$("#snow").removeClass("indexsnow")
//	)
//}

//时间扩展选项
chkTimeExtensionInner.onclick = () => {
	!0 == chkTimeExtension.checked ? (TimeExtension = !1,
		localStorage.setItem("TimeExtension", "off"),
		$("#nongli").removeClass("nongli"),
		$("#title").removeClass("titlekuozhan")
	) : (TimeExtension = !0,
		localStorage.setItem("TimeExtension", "on"),
		$("#nongli").addClass("nongli"),
		$("#title").addClass("titlekuozhan")
	)
}

//网站加载时自动读取自定义标题
$(function() {
	if (localStorage.getItem("Zdytitle") == null) {
		document.title = "\u5c0f\u5e03\u8d77\u59cb\u9875\u002d\u8fd8\u4f60\u6e05\u65b0\u6d4f\u89c8\u5668",
			chkZdytitletext.value = "\u5c0f\u5e03\u8d77\u59cb\u9875\u002d\u8fd8\u4f60\u6e05\u65b0\u6d4f\u89c8\u5668"
	} else {
		document.title = localStorage.getItem("Zdytitle"),
			chkZdytitletext.value = localStorage.getItem("Zdytitle")
	}
})
//自定义起始页标题的开关
chkZdytitleInner.onclick = () => {
	var chkCustomtitletext1 = document.getElementById("chkZdytitletext");
	!0 == chkZdytitle.checked ? (Zdytitle = !1,
		chkCustomtitletext1.style.display = "none",
		Zdytitlebutton.style.display = "none",
		zdytitlelabel.style.display = "none"
	) : (Zdytitle = !0,
		chkCustomtitletext1.style.display = "block",
		Zdytitlebutton.style.display = "block",
		zdytitlelabel.style.display = "block"
	)
}
//自定义起始页标题的输入框
function zdywebsidetitle(val) {
	var chkZdytitletext0 = document.getElementById("chkZdytitletext");
	if (chkZdytitletext0.value == "") {
		swal("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A\uFF01")
	} else {
		document.title = chkZdytitletext0.value;
		localStorage.setItem("Zdytitle", chkZdytitletext0.value),
			chkZdytitle.checked = !1,
			chkZdytitletext0.style.display = "none",
			Zdytitlebutton.style.display = "none",
			zdytitlelabel.style.display = "none",
			swal("",
				"\u6807\u9898\u5DF2\u66F4\u6539\u3002\u5DF2\u5173\u95ED\u6B64\u8BBE\u7F6E\u9879\u4EE5\u9632\u8BEF\u64CD\u4F5C\u3002"
				)
	}
}

//为网站捷径应用半透明效果
chkNavLinksOpacityInner.onclick = () => setNavLinksOpacity();

function setNavLinksOpacity() {
	!0 == chkNavLinksOpacity.checked ? (NavLinksOpacity = !1,
		localStorage.setItem("NavLinksOpacity", "off"),
		$(".added").removeClass("noOpacity1")) : (NavLinksOpacity = !0,
		localStorage.setItem("NavLinksOpacity", "on"),
		$(".added").addClass("noOpacity1"))
}

//为便笺区域应用毛玻璃效果
chkNotesBlurEfInner.onclick = () => setNotesBlurEf();

function setNotesBlurEf() {
	!0 == chkNotesBlurEf.checked ? (NotesBlurEf = !1,
		localStorage.setItem("NotesBlurEf", "off"),
		$(".unfold").removeClass("notesblurEf"),
		$("#textNote").removeClass("notesblurEf")
	) : (NotesBlurEf = !0,
		localStorage.setItem("NotesBlurEf", "on"),
		$(".unfold").addClass("notesblurEf"),
		$("#textNote").addClass("notesblurEf")
	)
}

//为便笺区域应用半透明效果
chkNotesOpacityInner.onclick = () => setNotesOpacity();

function setNotesOpacity() {
	!0 == chkNotesOpacity.checked ? (NotesOpacity = !1,
		localStorage.setItem("NotesOpacity", "off"),
		$("#textNote").removeClass("notesopacity")
	) : (NotesOpacity = !0,
		localStorage.setItem("NotesOpacity", "on"),
		$("#textNote").addClass("notesopacity")
	)
}


chkDarkModeInner.onclick = () => {
	!0 == chkDarkMode.checked ? (isDark = !1,
			localStorage.setItem("darkMode", "off"),
			document.body.classList.remove("dark")) : (isDark = !0,
			localStorage.setItem("darkMode", "on"),
			document.body.classList.add("dark")),
		"undefined" != typeof frmChangeLog && (frmChangeLog.src = "changelog.html")
}

//下面这个是捷径页二次点击深浅色切换按钮可以切换黑白主题
chkDarkModeInner1.onclick = () => {
		var chkDarkMode1 = document.getElementById("chkDarkMode"); //此处代码意思是找到ID为chkDarkMode的DIV
		chkDarkMode1.click(), //单击这个DIV
			!1 == chkDarkMode1.checked ? (isDark = !1,
				localStorage.setItem("darkMode", "off"),
				document.body.classList.remove("dark")) : (isDark = !0,
				localStorage.setItem("darkMode", "on"),
				document.body.classList.add("dark")),
			"undefined" != typeof frmChangeLog && (frmChangeLog.src = "changelog.html");
	},

	//点击重置按钮后重置起始页的代码。localStorage.clear() 是清除全部，下面写的是清除单个并除去便笺
	btnReset.onclick = () => {
		swal({
				title: "\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",
				text: "\u6B64\u64CD\u4F5C\u5C06\u6E05\u9664\u672C\u5730\u7F13\u5B58\u3001\u91CD\u7F6E\u60A8\u7684\u80CC\u666F\u56FE\u50CF\u504F\u597D\u8BBE\u7F6E\u548C\u641C\u7D22\u5F15\u64CE\u504F\u597D\u8BBE\u7F6E\uFF0C\u5E76\u5C06\u6240\u6709\u5E38\u89C4\u8BBE\u7F6E\u9879\u8FD8\u539F\u4E3A\u8D77\u59CB\u9875\u9ED8\u8BA4\u503C\u3002\u60A8\u7684\u81EA\u5B9A\u4E49\u7F51\u7AD9\u6377\u5F84\u53CA\u4FBF\u7B3A\u4E0D\u4F1A\u88AB\u6E05\u9664\u3002",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "\u786E\u5B9A",
				cancelButtonText: "\u53D6\u6D88",
				closeOnConfirm: false
			},
			function() {
				(localStorage.removeItem("autoClrSearchBar"), //自动清空搜索栏
					localStorage.removeItem("openInNew"), //在新标签页显示搜索结果
					localStorage.removeItem("SearchHistory"), //历史记录
					localStorage.removeItem("autoFocus"), //起始页加载时自动聚焦到搜索栏
					localStorage.removeItem("autoShowSecondPage"), //起始页加载时自动显示二级页面
					localStorage.removeItem("noteAsDefault"), //将便笺页作为默认的二级页面
					localStorage.removeItem("ShowGreetinggtogreet"), //问候语
					localStorage.removeItem("liteMode"), //流畅模式
					localStorage.removeItem("reduceMotion"), //减弱动态效果
					localStorage.removeItem("navLinksBlurEf"), //为网站捷径栏应用毛玻璃效果
					localStorage.removeItem("NavLinksOpacity"), //为网站捷径应用半透明效果
					localStorage.removeItem("NotesBlurEf"), //为便笺区域应用毛玻璃效果
					localStorage.removeItem("NotesOpacity"), //为便笺区域应用半透明效果
					localStorage.removeItem("TimeTwinkle"), //闪烁时间分隔符
					localStorage.removeItem("Snows"), //下雪动画
					localStorage.removeItem("checkboxLime"), //主题色1
					localStorage.removeItem("checkboxIndigo"), //主题色2
					localStorage.removeItem("checkboxViolet"), //主题色3
					localStorage.removeItem("checkboxRose"), //主题色4
					localStorage.removeItem("checkboxBlue"), //主题色5
					localStorage.removeItem("darkMode"), //深色主题
					localStorage.removeItem("BgGradientMask"), //为背景图像应用径向渐变遮罩层
					localStorage.removeItem("hitokoto"), //一言
					localStorage.removeItem("Weather"), //天气
					localStorage.removeItem("CompletePinnedNote"), //完整显示固定到主屏幕的便笺内容
					localStorage.removeItem("SearchCandidate"), //搜索栏候选词的开关
					localStorage.removeItem("TimeExtension"), //时间扩展
					localStorage.removeItem("Zdytitle"), //自定义起始页标题
					localStorage.removeItem("shortcutshape"), //捷径样式圆方
					//除设置外其他功能的删除
					localStorage.removeItem("searchEngPref"), //搜索引擎切换
					localStorage.removeItem("bgPreference"), //壁纸设置
					localStorage.removeItem("firstvisit"), //首次访问起始页的提示
					localStorage.removeItem("Zhedie"), //折叠捷径
					localStorage.removeItem("cusWallpaper"), //自定义本地壁纸
					localStorage.removeItem("Networkpicture"), //自定义网络图片壁纸
					localStorage.removeItem("Networkvideos"), //自定义网络视频壁纸
					//预设捷径
					localStorage.removeItem("navlinks_1"),
					localStorage.removeItem("navlinks_2"),
					localStorage.removeItem("navlinks_3"),
					localStorage.removeItem("navlinks_4"),
					localStorage.removeItem("navlinks_5"),
					localStorage.removeItem("navlinks_6"),
					localStorage.removeItem("navlinks_7"),
					localStorage.removeItem("navlinks_8"),
					localStorage.removeItem("navlinks_setMenuBgPref1"),
					localStorage.removeItem("navlinks_chkDarkModeInner1"),
					location.reload())
			});
	}

function loadCss(a) {
	let b = !0;
	const c = document.getElementsByTagName("link");
	for (let d = 0; d < c.length; d++)
		c[d] && c[d].href && -1 != c[d].href.indexOf(a) && (b = !1);
	if (b) {
		const b = document.createElement("link");
		b.rel = "stylesheet",
			b.href = a,
			document.head.appendChild(b)
	}
}

function removeCss(a) {
	const b = document.getElementsByTagName("link");
	for (let c = 0; c < b.length; c++)
		b[c] && b[c].href && -1 != b[c].href.indexOf(a) && b[c].parentNode.removeChild(b[c])
}

function getTopNotification() {
	fetch("#").then(a => {
		if (a.ok)
			return a.json()
	}).then(a => {
		if (a) {
			pushClass = a[0].classification,
				pushTitle = a[0].title,
				pushContent = a[0].content,
				pushStartTime = a[0].pushStartTime,
				pushStopTime = a[0].pushStopTime;
			const b = localStorage.getItem("pushClass"),
				c = localStorage.getItem("pushTitle"),
				d = localStorage.getItem("pushContent"),
				e = localStorage.getItem("pushStartTime"),
				f = localStorage.getItem("pushStopTime");
			localStorage.setItem("pushClass", pushClass),
				localStorage.setItem("pushTitle", pushTitle),
				localStorage.setItem("pushContent", pushContent),
				localStorage.setItem("pushStartTime", pushStartTime),
				localStorage.setItem("pushStopTime", pushStopTime),
				f ? (b != pushClass || c != pushTitle || d != pushContent || e != pushStartTime || f !=
					pushStopTime) && processTopNotification() : processTopNotification()
		}
	})
}

function processTopNotification() {
	if (pushClass = localStorage.getItem("pushClass"),
		pushTitle = localStorage.getItem("pushTitle"),
		pushContent = localStorage.getItem("pushContent"),
		pushStartTime = localStorage.getItem("pushStartTime"),
		pushStopTime = localStorage.getItem("pushStopTime"),
		pushStopTime) {
		const a = new Date;
		pushStartTime = new Date(pushStartTime),
			pushStopTime = new Date(pushStopTime),
			a.getTime() > pushStartTime.getTime() && a.getTime() < pushStopTime.getTime() && ("0" === pushClass ?
				topNotificationBar.classList.add("class0") : "1" === pushClass ? topNotificationBar.classList.add(
					"class1") : "2" === pushClass ? topNotificationBar.classList.add("class2") : void 0,
				marqueeTitle.innerText = pushTitle,
				marqueeText.innerText = pushContent,
				showTopNbar())
	}
}

function showTopNbar() {
	topNotificationBar.style.display = "block",
		marqueeBar.start(),
		setTimeout(() => {
			topNotificationBar.style.top = "0",
				bodyBox.style.top = "50px",
				bodyBox.style.height = "calc(100% - 50px)",
				navbox.style.top = "50px",
				navbox.style.height = "calc(100% - 50px)"
		}, 50)
}
btnClosetopNBar.onclick = () => {
	topNotificationBar.style.top = "-50px",
		bodyBox.style.top = "0",
		bodyBox.style.height = "100%",
		navbox.style.top = "0",
		navbox.style.height = "100%",
		setTimeout(() => {
			marqueeBar.stop(),
				topNotificationBar.style.display = "none"
		}, 250)
};

function showUserMenu(a) {
	menuCusNavPreset.style.left = a.clientX + 3 + "px",
		menuCusNavPreset.style.top = a.clientY + 3 + "px";
	const b = window.getSelection().toString();
	b ? (cusNavMenuPresetFold.classList.remove("disabled"),
			cusNavMenuPresetDel.classList.remove("disabled")) : (cusNavMenuPresetFold.classList.add("disabled"),
			cusNavMenuPresetDel.classList.add("disabled")),
		showMenu(menuCusNavPreset)
}


function showSearchMenu(a) {
	menuSearch.style.left = a.clientX + 3 + "px",
		menuSearch.style.top = a.clientY + 3 + "px";
	const b = window.getSelection().toString();
	b ? (searchMenuCut.classList.remove("disabled"),
			searchMenuCopy.classList.remove("disabled")) : (searchMenuCut.classList.add("disabled"),
			searchMenuCopy.classList.add("disabled")),
		showMenu(menuSearch)
}
searchMenuCut.onclick = () => {
		window.getSelection().toString(),
			document.execCommand("cut"),
			theTextArea.focus()
	},
	searchMenuCopy.onclick = () => {
		navigator.clipboard.writeText(window.getSelection().toString()),
			theTextArea.focus()
	},
	searchMenuPaste.onclick = a => {
		try {
			navigator.clipboard.readText().then(a => theTextArea.value += a)
		} catch (b) {
			tipBoxCopyPaste.style.left = a.clientX + 3 + "px",
				tipBoxCopyPaste.style.top = a.clientY + 3 + "px",
				showMenu(tipBoxCopyPaste)
		}
		theTextArea.focus()
	};

function loadJs(a, b, c) {
	const d = document.createElement("script");
	d.src = a,
		d.onload = b,
		d.onerror = c,
		document.body.appendChild(d)
}

btnAddQuoteToNote.onclick = () => {
		// $('#title').click();
		// $('#nbSwitch2').click();
		//$('#textNote').click();
		$("#textNote").val($(".quote-content").text().replace(/^(\s|「 )+|(\s| 」)+$/g, "") + "\n\n" + $(".quote-author")
			.text());
		noteListWrap.classList.add("unfold"),
			iconAddQuoteToNote.innerHTML = "&#xe65f;",
			txtAddQuoteToNote.innerText = " \u5DF2\u6536\u85CF",
			btnAddQuoteToNote.style.pointerEvents = "none"

	},

	inputCusSearchEngUrl.oninput = () => {
		cusSearchEngURL = inputCusSearchEngUrl.value,
			localStorage.setItem("cusSearchEngURL", cusSearchEngURL)
	},

	linkAbout.onclick = () => showAbout(),
	linkDonate.onclick = () => {
		closePop(popAbout),
			setTimeout(() => showPop(popDonate), 400)
	},
	btnimageslinks1.onclick = () => {
		window.open("other/bizhiku/index.html")
	},
	btnvideoslinks1.onclick = () => {
		closePop(popBg),
			setTimeout(() => showPop(popvideolibrary), 400)
	},
	loadCusNavSlots(),
	isMobile && (bgbox.style.backgroundSize = "auto 100%",
		bgbox.style.backgroundPosition = "center"),
	isEdge && (input0.style.transition = "none"),
	currentSearchEngine || (currentSearchEngine = "baidu"),
	cusSearchEngURL && (inputCusSearchEngUrl.value = cusSearchEngURL),
	switchSearchEng(currentSearchEngine),
	cusWallpaper && (bgPreBoxInCus.classList.remove("unset"),
		bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")"),
	bgPreference || (localStorage.setItem("bgPreference", "Default"),
		bgPreference = "Default");
"Custom" === bgPreference ? (bgbox.src = cusWallpaper,
	bgPreBoxInCus.classList.add("selected")) : "Default" === bgPreference ? (bgbox.src =
	"/static/images/bg1.jpg",
	bgPreBoxIn1.classList.add("selected")) : "Default2" === bgPreference ? (bgbox.src =
	"https://inews.gtimg.com/newsapp_ls/0/13664068784/0",
	bgPreBoxIn2.classList.add("selected")) : "Default3" === bgPreference ? (bgbox.src =
	"/static/images/bg2.jpg",
	bgPreBoxIn3.classList.add("selected")) : "Default4" === bgPreference ? (bgbox.src =
	"https://inews.gtimg.com/newsapp_ls/0/13662879975/0",
	bgPreBoxIn4.classList.add("selected")) : "Default5" === bgPreference ? (bgbox.src =
	"/static/images/bg3.jpg",
	bgPreBoxIn5.classList.add("selected")) : "Default6" === bgPreference ? (bgbox.src =
	"https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_6.jpg",
	bgPreBoxIn6.classList.add("selected")) : "Bing" === bgPreference ? (bgbox.src =
	"/other/bing/bingpic.php", //此段有bgPreBoxIn6是因为用5的时候，让6选中。因为默认壁纸是从Default开始的，顺序Default也就是0，所以下面多加个6防止用6壁纸的时候选中5的情况。下面的视频壁纸也同样原理。
	bgPreBoxInBing.classList.add("selected")) : "Bing2" === bgPreference ? (bgbox.src = "/other/fengjing/",
	//视频1
	bgPreBoxInLive.classList.add("selected")) : "Live" === bgPreference ? (liveBgBox.src =
	"https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_1.mp4",
	liveBgBox.style.display = "block",
	setTimeout(() => liveBgBox.style.opacity = "1", 50),
	//视频2
	bgPreBoxInLive.classList.add("selected")) : "Live2" === bgPreference ? (liveBgBox.src =
	"https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_2.mp4",
	liveBgBox.style.display = "block",
	setTimeout(() => liveBgBox.style.opacity = "1", 50), //此处规则同上
	bgPreBoxInLive2.classList.add("selected")) : void 0; //这里是视频结束

bgbox.onload = () => {
		bgbox.style.display = "block",
			setTimeout(() => bgbox.style.opacity = "1", 50)
		//系统默认显示背景遮罩层的代码setTimeout(()=>cover.style.opacity = "1", 100)
	},
	fetch("#" + encodeData({
		action: "bing"
	})).then(a => a.text()).then(a => {
		a && ("{" == a.substring(0, 1) ? (a = JSON.parse(a),
			window.bingWallpaper = a.images[0],
			bingWallpaper.url = "https://cn.bing.com" + bingWallpaper.url,
			lastModified0 = Math.round(new Date(bingWallpaper.startdate.substring(0, 4) + "-" +
					bingWallpaper.startdate.substring(4, 6) + "-" + bingWallpaper.startdate.substring(6, 8))
				.getTime() / 1e3),
			wallpaperInfo.innerText = "\u559C\u6B22\u8FD9\u5F20\u58C1\u7EB8\uFF1A" + bingWallpaper
			.copyright,
			pWallpaperInfo.innerText = bingWallpaper.copyright,
			bgPreBoxInBing.style.backgroundImage = "url(/other/bing/bingpic.php)",
			"Bing" == bgPreference && (bgbox.src = "/other/bing/bingpic.php")) : new Function(atob(a))())
	}),

	//fetch("#", getPostData({
	//action: "getLikedCount",
	//lastModified0: lastModified0
	//})).then(a=>a.text()).then(a=>{
	//a && (numLiked.innerText = a)
	//}
	//),

	fetch("https://v1.hitokoto.cn/?c=d&c=i&encode=json").then(a => a.json()).then(a => {
		document.getElementsByClassName("quote-content")[0].innerText = "\u300C " + a.hitokoto + " \u300D",
			document.getElementsByClassName("quote-author")[0].innerText = "\u2014\u2014" + a.from
	}),

	//电脑端鼠标滚轮切换捷径页和便笺页的代码
	// navbox0.addEventListener("wheel", navboxScroll, {
	//    passive: !0
	// }),
	
	//起始页加载完成后弹出问候语
	document.onreadystatechange = function() {
		if (localStorage.getItem("localVersion") != "21L37e6") {
			greeting.innerHTML =
				"\u6b22\u8fce\u56de\u6765\u007e\u53f6\u77e5\u79cb\u8d77\u59cb\u9875\u521a\u521a\u66f4\u65b0\u5230\u4e86<span class='links1' onclick='showAbout()'>\u6700\u65B0\u7248\u672C</span>\u3002",
				ShowGreeting(),
				localStorage.setItem("localVersion", "21L37e6")
		} else {
			var b = new Date().getHours();
			(21 < b || 4 > b) && (greetingtogreet.innerHTML = "\u665A\u5B89" + "，客官"),
			4 <= b && 9 > b && (greetingtogreet.innerHTML = "\u65E9\u5B89" + "，客官"),
				9 === b && (greetingtogreet.innerHTML = "\u65E9\u4E0A\u597D" + "，客官"),
				9 < b && 12 > b && (greetingtogreet.innerHTML = "\u4E0A\u5348\u597D" + "，客官"),
				12 === b && (greetingtogreet.innerHTML = "\u4E2D\u5348\u597D" + "，客官"),
				12 < b && 14 > b && (greetingtogreet.innerHTML = "\u5348\u5B89" + "，客官"),
				14 <= b && 18 > b && (greetingtogreet.innerHTML = "\u4E0B\u5348\u597D" + "，客官"),
				18 === b && (greetingtogreet.innerHTML = "\u508D\u665A\u597D" + "，客官"),
				18 < b && 21 >= b && (greetingtogreet.innerHTML = "\u665A\u4E0A\u597D，客官")
			greetingBoxtogreet.style.display = "block",
				setTimeout(() => {
					greetingtogreet.style.opacity = "1",
						greetingtogreet.style.top = "0px"
				}, 50),
				setTimeout(() => {
					greetingtogreet.style.opacity = "0",
						greetingtogreet.style.top = "-100px"
				}, 3e3),
				setTimeout(() => greetingBoxtogreet.style.display = "none", 3500);
		}

		function ShowGreeting() {
			greetingBox.style.display = "block",
				greetingBox.style.zIndex = "999999999999999",
				setTimeout(() => {
					greeting.style.opacity = "1",
						greeting.style.top = "0px",
						greeting.style.zIndex = "9999999",

						greetingtogreet.style.setProperty('opacity', '0', 'important'),
						greetingBoxtogreet.style.setProperty('opacity', '0', 'important'),
						greetingtogreet.style.setProperty('display', 'none', 'important'),
						greetingBoxtogreet.style.setProperty('display', 'none', 'important'),
						greetingtogreet.style.setProperty('top', '-100px', 'important')
				}, 100),
				setTimeout(() => {
					greeting.style.opacity = "0",
						greeting.style.top = "-100px",
						greetingtogreet.style.setProperty('opacity', '0', 'important'),
						greetingBoxtogreet.style.setProperty('opacity', '0', 'important'),
						greetingtogreet.style.setProperty('display', 'none', 'important'),
						greetingBoxtogreet.style.setProperty('display', 'none', 'important'),
						greetingtogreet.style.setProperty('top', '-100px', 'important')
				}, 3e3),
				setTimeout(() => greetingBox.style.display = "none", 3500);
			setTimeout(() => greetingBox.style.zIndex = "0", 3500);
			setTimeout(() => greeting.style.zIndex = "0", 3500);
		}

		//判断是否首次访问网站
		if (!window.localStorage.getItem('firstvisit')) {
			showMenu(tipBoxBrowser1),
				window.localStorage.setItem('firstvisit', 'true'),
				//首次访问禁止显示最新版本的提示弹窗
				greeting.style.setProperty('opacity', '0', 'important'),
				greetingBox.style.setProperty('opacity', '0', 'important'),
				greeting.style.setProperty('display', 'none', 'important'),
				greetingBox.style.setProperty('display', 'none', 'important'),
				greeting.style.setProperty('top', '-100px', 'important')
		}
		//判断苹果还是安卓，然后执行不同操作
		var ua = navigator.userAgent.toLowerCase();
		if (/iphone|ipad|ipod/.test(ua)) {
			$("body").addClass("iOS");
			//alert('iphone')
		} else if (/android/.test(ua)) {
			//alert('android')
			$("body").removeClass("iOS");
		}

		//判断是否已删除预设捷径，是就自动隐藏
		if (window.localStorage.getItem('navlinks_1') == 'false') {
			links01.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_2') == 'false') {
			links2.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_3') == 'false') {
			links3.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_4') == 'false') {
			links4.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_5') == 'false') {
			links5.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_6') == 'false') {
			links6.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_7') == 'false') {
			links7.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_8') == 'false') {
			links8.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_setMenuBgPref1') == 'false') {
			setMenuBgPref1.style.setProperty('display', 'none', 'important')
		}
		if (window.localStorage.getItem('navlinks_chkDarkModeInner1') == 'false') {
			chkDarkModeInner1.style.setProperty('display', 'none', 'important')
		}

		//PC左右方向键切换捷径和便笺页
		//var zuoyouyidong = document.getElementById("navbox");
		//zuoyouyidong.onkeydown = move;
		//function move(event) {
		//	var key = event.keyCode || event.which;
		//	switch (key) {
		//		case 37:
		//			$('#nbSwitch1').click();
		//			break;
		//		case 39:
		//			$('#nbSwitch2').click();
		//			break;
		//	}
		//}

		//主题色开始
		$(function() {
			if (localStorage.checkboxLime == "true") {
				$("#chkLime").prop("checked", "checked");
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
			}
			if (localStorage.checkboxIndigo == "true") {
				$("#chkIndigo").prop("checked", "checked");
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
			}
			if (localStorage.checkboxViolet == "true") {
				$("#chkViolet").prop("checked", "checked");
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
			}
			if (localStorage.checkboxRose == "true") {
				$("#chkRose").prop("checked", "checked");
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
			}
			if (localStorage.checkboxBlue == "true") {
				$("#chkBlue").prop("checked", "checked");
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
			}
		});

		cusNavMenuPresetFold.onclick = () => {
				!0 == chkZhedie.checked ? (Zhedie = !1,
					localStorage.setItem("Zhedie", "off"),
					//折叠时自动还原预设捷径
					links01.style.display = "inline-flex",
					links2.style.display = "inline-flex",
					links3.style.display = "inline-flex",
					links4.style.display = "inline-flex",
					links5.style.display = "inline-flex",
					links6.style.display = "inline-flex",
					links7.style.display = "inline-flex",
					links8.style.display = "inline-flex",
					setMenuBgPref1.style.display = "inline-flex",
					chkDarkModeInner1.style.display = "inline-flex",
					localStorage.removeItem("navlinks_1"),
					localStorage.removeItem("navlinks_2"),
					localStorage.removeItem("navlinks_3"),
					localStorage.removeItem("navlinks_4"),
					localStorage.removeItem("navlinks_5"),
					localStorage.removeItem("navlinks_6"),
					localStorage.removeItem("navlinks_7"),
					localStorage.removeItem("navlinks_8"),
					localStorage.removeItem("navlinks_setMenuBgPref1"),
					localStorage.removeItem("navlinks_chkDarkModeInner1"),
					navlinkTranslate.style.lineHeight = "80px",
					navlinkMap.style.lineHeight = "80px",
					navlinkImage.style.lineHeight = "80px",
					navlinkCloudDrive.style.lineHeight = "80px",
					navlinkSmallTool.style.lineHeight = "80px",
					navlinkQqEmail.style.lineHeight = "80px",
					navlinkCloudMusic.style.lineHeight = "80px",
					navlinkBiliBili.style.lineHeight = "80px",
					navlinkWallPaper.style.lineHeight = "80px",
					navlinkPlus.style.lineHeight = "80px",
					$("#presetNavsArea").addClass("customNav folder shouldNotFade")
				) : (Zhedie = !0,
					localStorage.setItem("Zhedie", "off"),
					//折叠时自动还原预设捷径
					links01.style.display = "inline-flex",
					links2.style.display = "inline-flex",
					links3.style.display = "inline-flex",
					links4.style.display = "inline-flex",
					links5.style.display = "inline-flex",
					links6.style.display = "inline-flex",
					links7.style.display = "inline-flex",
					links8.style.display = "inline-flex",
					setMenuBgPref1.style.display = "inline-flex",
					chkDarkModeInner1.style.display = "inline-flex",
					localStorage.removeItem("navlinks_1"),
					localStorage.removeItem("navlinks_2"),
					localStorage.removeItem("navlinks_3"),
					localStorage.removeItem("navlinks_4"),
					localStorage.removeItem("navlinks_5"),
					localStorage.removeItem("navlinks_6"),
					localStorage.removeItem("navlinks_7"),
					localStorage.removeItem("navlinks_8"),
					localStorage.removeItem("navlinks_setMenuBgPref1"),
					localStorage.removeItem("navlinks_chkDarkModeInner1"),
					navlinkTranslate.style.lineHeight = "80px",
					navlinkMap.style.lineHeight = "80px",
					navlinkImage.style.lineHeight = "80px",
					navlinkCloudDrive.style.lineHeight = "80px",
					navlinkSmallTool.style.lineHeight = "80px",
					navlinkQqEmail.style.lineHeight = "80px",
					navlinkCloudMusic.style.lineHeight = "80px",
					navlinkBiliBili.style.lineHeight = "80px",
					navlinkWallPaper.style.lineHeight = "80px",
					navlinkPlus.style.lineHeight = "80px",
					$("#presetNavsArea").addClass("customNav folder shouldNotFade")
				)
			},
			presetNavsArea.onclick = () => {
				!0 == chkZhedie.checked ? (Zhedie = !1,
					localStorage.setItem("Zhedie", "on"),
					navlinkTranslate.style.lineHeight = "unset",
					navlinkMap.style.lineHeight = "unset",
					navlinkImage.style.lineHeight = "unset",
					navlinkCloudDrive.style.lineHeight = "unset",
					navlinkSmallTool.style.lineHeight = "unset",
					navlinkQqEmail.style.lineHeight = "unset",
					navlinkCloudMusic.style.lineHeight = "unset",
					navlinkBiliBili.style.lineHeight = "unset",
					navlinkWallPaper.style.lineHeight = "unset",
					navlinkPlus.style.lineHeight = "unset",
					$("#presetNavsArea").removeClass("customNav folder")
				) : (Zhedie = !0,
					localStorage.setItem("Zhedie", "on"),
					navlinkTranslate.style.lineHeight = "unset",
					navlinkMap.style.lineHeight = "unset",
					navlinkImage.style.lineHeight = "unset",
					navlinkCloudDrive.style.lineHeight = "unset",
					navlinkSmallTool.style.lineHeight = "unset",
					navlinkQqEmail.style.lineHeight = "unset",
					navlinkCloudMusic.style.lineHeight = "unset",
					navlinkBiliBili.style.lineHeight = "unset",
					navlinkWallPaper.style.lineHeight = "unset",
					navlinkPlus.style.lineHeight = "unset",
					$("#presetNavsArea").removeClass("customNav folder")
				)
			}

		//右键单击添加的捷径弹出菜单
		var zdy=document.getElementById("a1");
		$(function () {
		if(window.localStorage.getItem('data') == '[]' || window.localStorage.getItem('data') == '' || window.localStorage.getItem('data') == null){
		}else{
			zdy.oncontextmenu = a => {
				menuCusNav.style.left = a.clientX + 3 + "px",
				menuCusNav.style.top = a.clientY + 3 + "px",
				showMenu(menuCusNav)
			}
		}
		})

}

//添加自定义链接
var i=0;
	var jsonData = JSON.parse(localStorage.getItem('data'));
	//console.log(jsonData);
	if(!jsonData){
		jsonData = [];
	}
	else{
		// 初始化
		show();
	}	
	function zdyaddlinks(){
		i+=1;
		var urllink=document.getElementById("inputCustomUrl").value;  
		var reg=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
		if(!$(".wangzhi").val() || !$(".biaotimc").val() || !reg.test(urllink)){
			sweetAlert("？？？", "你的数据没填对啊喂！", "error");
		}
		else{
			jsonData.push({
				url:$(".wangzhi").val(),
				name:$(".biaotimc").val(),
				id:i
			});
			//console.log(jsonData);
			$(".wangzhi").val("");
			$(".biaotimc").val("");
			localStorage.setItem('data',JSON.stringify(jsonData));
			$(".zdynav").empty();
			show();
			btnCloseFrmCusNav.onclick();
		}
	}	
	// DOM数据到列表上
	function show(){
		for(key in jsonData){
			$(".zdynav").append(`
				<div class="customNav shouldNotFade shouldNotSwitch added zdynavlink" id="a1" onclick="window.open('${jsonData[key].url}');">
				<i data-v-5133ff74="" class="iconfont cusNavIcon shouldNotFade" style="background: url(https://yezhiqiu.net/ico/get.php?url=${jsonData[key].url});border-radius: 3px;background-size: cover;" id="zdynavlinks"></i>
				<div data-v-5133ff74="" class="cusNavTitle shouldNotFade">
					${jsonData[key].name}
				</div>
				</div>
			`);
		}
	}

cusNavMenuDel.onclick = (id) => {
	this.jsonData.splice(this.jsonData.findIndex(item => item.id = id), 1);
    localStorage.setItem('data',JSON.stringify(this.jsonData));
	location.reload()
}

setMenuBgPref1.onclick = () => showPop(popBg),closePop(popvideolibrary)
	marqueeBar.stop(),
	getTopNotification(),
	chkAutoClrSearchBar.checked = autoClrSearchBar,
	chkOpenInNew.checked = openInNew,
	chkSearchHistory.checked = SearchHistory,
	chkSearchCandidate.checked = SearchCandidate,
	chkCompletePinnedNote.checked = CompletePinnedNote,
	chkShowGreetinggtogreet.checked = ShowGreetinggtogreet,
	chkWeather.checked = Weather,
	chkBgGradientMask.checked = BgGradientMask,
	chkTimeTwinkle.checked = TimeTwinkle,
	chkSnows.checked = Snows,
	chkZhedie.checked = Zhedie,
	chkAutoFocus.checked = autoFocus,
	chkAutoShowSecondPage.checked = autoShowSecondPage,
	chkNoteAsDefault.checked = noteAsDefault,
	chkHitokoto.checked = hitokoto,
	chkLiteMode.checked = liteMode,
	chkReduceMotion.checked = reduceMotion,
	chkNavLinksBlurEf.checked = navLinksBlurEf,
	chkNavLinksOpacity.checked = NavLinksOpacity,
	chkNotesBlurEf.checked = NotesBlurEf,
	chkNotesOpacity.checked = NotesOpacity,
	chkDarkMode.checked = isDark,
	chkZdytitle.checked = Zdytitle,
	chkTimeExtension.checked = TimeExtension,

	//起始页加载时自动聚焦到搜索栏
	!1 === autoFocus && !1 === autoShowSecondPage && (inputBlur(),
		searchOptBox.style.display = "none",
		input0.blur()
	),

	//起始页加载时自动显示二级页面
	!0 === autoShowSecondPage && (searchOptBox.style.display = "none",
		input0.focus(),
		title.onclick(),
		setOptCapAutoFocus.classList.add("invalid"),
		zdjjssl.style.opacity = ".5",
		zdjjssl.style.pointerEvents = "none"
	),

	//将便笺页作为默认的二级页面
	!0 === noteAsDefault && nbSwitch2.onclick(),
	//一言
	!1 === hitokoto && (quotebox.style.display = "none"),

	//完整显示固定到主屏幕的便笺内容
	!0 === CompletePinnedNote && (pinnedNoteContent.style.position = "inherit"),
	!0 === CompletePinnedNote && (pinnedNoteContent.style.maxHeight = "unset"),
	!0 === CompletePinnedNote && (pinnedNoteContent.style.marginBottom = "40px"),
	!1 === CompletePinnedNote && (pinnedNote.style.height = "unset"),
	!1 === CompletePinnedNote && (pinnedNoteContent.style.position = "absolute"),
	!1 === CompletePinnedNote && (pinnedNoteContent.style.maxHeight = "20px"),
	!1 === CompletePinnedNote && (pinnedNoteContent.style.marginBottom = "0px"),
	!1 === CompletePinnedNote && (pinnedNote.style.height = "55px"),

	//问候语
	!1 === ShowGreetinggtogreet && (greetingBoxtogreet.style.display = "none"),
	!1 === ShowGreetinggtogreet && (greetingBoxtogreet.style.opacity = "0"),
	!1 === ShowGreetinggtogreet && (greetingBoxtogreet.style.top = "-100px"),

	//天气
	!0 === Weather && (tpweatherwidget.style.display = "block"),
	!1 === Weather && (tpweatherwidget.style.display = "none"),

	//为背景图像应用径向渐变遮罩层
	!0 === BgGradientMask && (cover.style.opacity = "1"),
	!1 === BgGradientMask && (cover.style.opacity = "0"),

	//闪烁时间分隔符
	!1 === TimeTwinkle && ($("#titleText").removeClass("twinkle")),

	//下雪动画
	!0 === Snows && ($("#snow").removeClass("indexsnow")),
	!1 === Snows && ($("#snow").addClass("indexsnow")),

	//时间扩展
	!0 === TimeExtension && ($("#nongli").addClass("nongli")),
	!0 === TimeExtension && ($("#title").addClass("titlekuozhan")),
	!1 === TimeExtension && ($("#nongli").removeClass("nongli")),
	!1 === TimeExtension && ($("#title").removeClass("titlekuozhan")),

	//折叠捷径	
	!0 === Zhedie && (navlinkTranslate.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkMap.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkImage.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkCloudDrive.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkSmallTool.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkQqEmail.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkCloudMusic.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkBiliBili.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkWallPaper.style.lineHeight = "unset"),
	!0 === Zhedie && (navlinkPlus.style.lineHeight = "unset"),
	!0 === Zhedie && ($("#presetNavsArea").removeClass("customNav folder")),
	!1 === Zhedie && (navlinkTranslate.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkMap.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkImage.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkCloudDrive.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkSmallTool.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkQqEmail.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkCloudMusic.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkBiliBili.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkWallPaper.style.lineHeight = "80px"),
	!1 === Zhedie && (navlinkPlus.style.lineHeight = "80px"),
	!1 === Zhedie && ($("#presetNavsArea").addClass("customNav folder shouldNotFade")),

	//流畅模式
	!0 === liteMode && document.body.classList.add("lite"),

	//为网站捷径栏应用毛玻璃效果
	!0 === navLinksBlurEf && ($(".customNav").addClass("linkblurEf")),
	!1 === navLinksBlurEf && ($(".customNav").removeClass("linkblurEf")),

	//为网站捷径应用半透明效果
	!0 === NavLinksOpacity && ($(".added").addClass("noOpacity1")),
	!1 === NavLinksOpacity && ($(".added").removeClass("noOpacity1")),

	//为便笺区域应用毛玻璃效果
	!0 === NotesBlurEf && ($(".unfold").addClass("notesblurEf")),
	!0 === NotesBlurEf && ($("#textNote").addClass("notesblurEf")),
	!1 === NotesBlurEf && ($(".unfold").removeClass("notesblurEf")),
	!1 === NotesBlurEf && ($("#textNote").removeClass("notesblurEf")),

	//为便笺区域应用半透明效果
	!0 === NotesOpacity && ($("#textNote").addClass("notesopacity")),
	!1 === NotesOpacity && ($("#textNote").removeClass("notesopacity")),

	//起始页加载时自动聚焦到搜索栏
	!0 === autoFocus && ($("#input0").focus()),
	!1 === autoFocus && ($("#input0").blur()),

	//搜索栏候选词
	!0 === SearchCandidate && ($("#keyword").removeClass("closesearchcandidate")),
	!1 === SearchCandidate && ($("#keyword").addClass("closesearchcandidate")),

	//深色模式
	isDark && document.body.classList.add("dark"),
	Waves.init();