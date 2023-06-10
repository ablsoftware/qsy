var currentEditingNote = "";
//var currentNotes = "";
//var maximumNoteNumber = ""; //未知
var currentNoteIsNew = true;
//var pinnedNoteNum = "";  //未知
//var currentTime = "";  //未知
function loadNotes() {
    if (currentNotes != "") {
        textNote.style.left = "200px";
        textNote.style.width = "calc(100% - 200px)";
        noteListWrap.style.left = "0px";
        for (var i = 1; i < Number(maximumNoteNumber) + 1; i++) {
            currentNoteTitle = localStorage.getItem("note" + i);
            currentNoteTime = localStorage.getItem("noteTime" + i);
            if (currentNoteTitle != "") {
                var newNoteDiv = document.createElement("div");
                newNoteDiv.className = "noteItem";
                newNoteDiv.classList.add("shouldNotFade");
                newNoteDiv.id = "noteItem" + i;
                newNoteDiv.onclick = function() {
                    openNote(this);
                }
                var newNoteSpan1 = document.createElement("span");
                newNoteSpan1.className = "noteTitle";
                newNoteSpan1.classList.add("shouldNotFade");
                newNoteSpan1.id = "noteTitle" + i;
                var newNoteSpan2 = document.createElement("span");
                newNoteSpan2.className = "noteTime";
                newNoteSpan2.classList.add("shouldNotFade");
                newNoteSpan2.id = "noteTime" + i;
                newNoteDiv.appendChild(newNoteSpan1);
                newNoteDiv.appendChild(newNoteSpan2);
                noteList.appendChild(newNoteDiv);
                document.getElementById("noteTitle" + i).innerText = localStorage.getItem("note" + i);
                document.getElementById("noteTime" + i).innerText = localStorage.getItem("noteTime" + i);
            }
        }
    }
    textNote.value = "";
    pinnedNoteNum = localStorage.getItem("pinnedNoteNum");
    if (pinnedNoteNum != undefined && pinnedNoteNum != "") {
        pinnedNoteContent.innerText = localStorage.getItem("note" + pinnedNoteNum);
        pinnedNoteTime.innerText = localStorage.getItem("noteTime" + pinnedNoteNum);
        showPinnedNote();
    }
}
function newNote() {
    noteToolBar.style.display = "none";
    if (document.getElementById("noteItem" + currentEditingNote) != undefined) {
        document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
    }
    currentNotes = Number(currentNotes) + 1;
    currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem", "")) + 1;
    currentNoteIsNew = true;
    textNote.value = "";
    textNote.focus();
    currentNotes = Number(currentNotes) - 1;
    currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem", "")) - 1;
}
function openNote(obj) {
    if (document.getElementById("noteItem" + currentEditingNote) != undefined) {
        document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
    }
    currentNoteIsNew = false;
    currentEditingNote = obj.id.replace("noteItem", "");
    textNote.value = localStorage.getItem("note" + currentEditingNote);
    noteToolBar.style.display = "inline-block";
	noteToolBar.style.zIndex = "999999";
    document.getElementById("noteItem" + currentEditingNote).classList.add("current");
}
function noteChanged() {
    if (textNote.value != "" && noteListWrap.style.left != "0px") {
        textNote.style.left = "180px";
        textNote.style.width = "calc(100% - 200px)";
        noteListWrap.style.left = "0px";
        noteToolBar.style.display = "inline-block";
		noteToolBar.style.zIndex = "999999";
    }
    if (textNote.value != "" && currentNoteIsNew == true) {
        currentNotes = Number(currentNotes) + 1;
        currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem", "")) + 1;
        var newNoteDiv = document.createElement("div");
        newNoteDiv.className = "noteItem";
        newNoteDiv.classList.add("shouldNotFade");
        newNoteDiv.classList.add("current");
        newNoteDiv.id = "noteItem" + currentEditingNote;
        newNoteDiv.onclick = function() {
            openNote(this);
        }
        var newNoteSpan1 = document.createElement("span");
        newNoteSpan1.className = "noteTitle";
        newNoteSpan1.classList.add("shouldNotFade");
        newNoteSpan1.id = "noteTitle" + currentEditingNote;
        var newNoteSpan2 = document.createElement("span");
        newNoteSpan2.className = "noteTime";
        newNoteSpan2.classList.add("shouldNotFade");
        newNoteSpan2.id = "noteTime" + currentEditingNote;
        newNoteDiv.appendChild(newNoteSpan1);
        newNoteDiv.appendChild(newNoteSpan2);
        noteList.appendChild(newNoteDiv);
        noteList.scrollTop = noteList.clientHeight;
        localStorage.setItem("currentNotes", currentNotes);
        localStorage.setItem("maximumNoteNumber", currentEditingNote);
        noteToolBar.style.display = "inline-block";
		noteToolBar.style.zIndex = "999999";
        currentNoteIsNew = false;
    }
    if (textNote.value == "" && currentNotes == "1" && noteListWrap.style.left == "0px") {
        //textNote.style.left = "0px";
        //textNote.style.width = "100%";
        //noteListWrap.style.left = "-200px";
        noteToolBar.style.display = "none";
    }
    if (textNote.value == "") {
        noteList.removeChild(document.getElementById("noteItem" + currentEditingNote));
        currentNotes = Number(currentNotes) - 1;
        currentNoteIsNew = true;
        localStorage.setItem("currentNotes", currentNotes);
        localStorage.setItem("maximumNoteNumber", Number(noteList.lastElementChild.id.replace("noteItem", "")));
        noteToolBar.style.display = "none";
    }
    if (document.getElementById("noteTitle" + currentEditingNote) != undefined) {
        document.getElementById("noteTitle" + currentEditingNote).innerText = textNote.value;
        document.getElementById("noteTime" + currentEditingNote).innerText = currentTime;
    }
    if (currentEditingNote == pinnedNoteNum) {
        pinnedNoteContent.innerText = textNote.value;
        pinnedNoteTime.innerText = currentTime;
    }
    if (currentEditingNote == pinnedNoteNum && textNote.value == "") {
        unpinNote();
    }
}
function saveNote() {
    noteChanged();
    if (textNote.value != "") {
        localStorage.setItem("note" + currentEditingNote, textNote.value);
        localStorage.setItem("noteTime" + currentEditingNote, currentTime);
    } else {
        localStorage.removeItem("note" + currentEditingNote);
        localStorage.removeItem("noteTime" + currentEditingNote);
    }
}
function delNote() {
    if (confirm("删除这条便笺？")) {
        textNote.value = "";
        saveNote();
    }
}
function pinNote() {
    pinnedNoteContent.innerText = textNote.value;
    pinnedNoteTime.innerText = document.getElementById("noteTime" + currentEditingNote).innerText;
    pinnedNoteNum = currentEditingNote;
    localStorage.setItem("pinnedNoteNum", currentEditingNote);
    showPinnedNote();
}
function showPinnedNote() {
    pinnedBox.style.display = "block";
    setTimeout(function() {
        pinnedBox.style.opacity = "1";
		pinnedNote.style.opacity = "1";
		//btnUnpin.style.opacity = "1";
		//btnUnpin.style.setProperty('opacity', '1', 'important');
        pinnedBox.style.transform = "scale(1.05)";
    }, 100);
    setTimeout(function() {
        pinnedBox.style.transform = "scale(1)";
    }, 350);
}
function unpinNote() {
    pinnedNoteNum = "";
    localStorage.setItem("pinnedNoteNum", "");
    pinnedBox.style.transform = "scale(1.05)";
    setTimeout(function() {
        pinnedBox.style.transform = "scale(0.5)";
        pinnedBox.style.opacity = "0";
		//pinnedNote.style.opacity = "0";
		//btnUnpin.style.opacity = "0";
		btnUnpin.style.setProperty('opacity', '0', 'important');
    }, 250);
    setTimeout(function() {
        pinnedBox.style.display = "none";
    }, 500);
}
function pinnedNoteClick() {
    pinnedNoteNum = localStorage.getItem("pinnedNoteNum");
    openNote(document.getElementById("noteItem" + pinnedNoteNum));
    if (navbox.style.display != "block") {
        title.onclick();
    }
    nbSwitch2.onclick();
}


function pinnedNoteHover(ev, obj) {
    if (topNotificationBar.style.top != "0px") {
        m_clientX = ev.clientX - obj.offsetLeft;
        m_clientY = ev.clientY - obj.offsetTop;
        pinnedNoteW = window.getComputedStyle(obj).width.replace("px", "");
        pinnedNoteH = window.getComputedStyle(obj).height.replace("px", "");
        if (m_clientX < pinnedNoteW * 0.3 && m_clientY < pinnedNoteH * 0.3) {
            obj.style.transform = "rotateX(10deg) rotateY(-5deg)";
        }
        if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY < pinnedNoteH * 0.3) {
            obj.style.transform = "rotateX(10deg)";
        }
        if (m_clientX > pinnedNoteW * 0.7 && m_clientY < pinnedNoteH * 0.3) {
            obj.style.transform = "rotateX(10deg) rotateY(5deg)";
        }
        if (m_clientX < pinnedNoteW * 0.3 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
            obj.style.transform = "rotateY(-5deg)";
        }
        if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
            obj.style.transform = "rotate3d(0,0,0,0deg)";
        }
        if (m_clientX > pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
            obj.style.transform = "rotateY(5deg)";
        }
        if (m_clientX < pinnedNoteW * 0.3 && m_clientY > pinnedNoteH * 0.7) {
            obj.style.transform = "rotateX(-10deg) rotateY(-5deg)";
        }
        if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.7) {
            obj.style.transform = "rotateX(-10deg)";
        }
        if (m_clientX > pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.7) {
            obj.style.transform = "rotateX(-10deg) rotateY(5deg)";
        }
    }
    //btnUnpin.style.opacity = "1";
	btnUnpin.style.setProperty('opacity', '1', 'important');
}
function pinnedNoteHover2(obj) {
    obj.style.transform = "rotate3d(0,0,0,0deg)";
    //btnUnpin.style.opacity = "0";
	btnUnpin.style.setProperty('opacity', '0', 'important');
}

function Time() {
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    titleText.innerText = hours + ":" + minutes;
    currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
}

currentNotes = localStorage.getItem("currentNotes");
maximumNoteNumber = localStorage.getItem("maximumNoteNumber");
if (currentNotes == undefined) {
    currentNotes = "0";
    maximumNoteNumber = "0";
}
loadNotes();