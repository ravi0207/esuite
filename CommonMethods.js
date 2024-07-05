

function listToAray(fullString, separator) {
    var fullArray = [];

    if (fullString !== undefined) {
        if (fullString.indexOf(separator) == -1) {
            fullArray.push(fullString);
        } else {
            fullArray = fullString.split(separator);
        }
    }

    return fullArray;
}


function getByID(arr, value) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].nickname == value) return arr[i];
    }
}
function wordWrapToStringList(text, maxLength) {
    var result = [], line = [];
    var length = 0;
    text.split(" ").forEach(function (word) {
        if ((length + word.length) >= maxLength) {
            result.push(line.join(" "));
            line = []; length = 0;
        }
        length += word.length + 1;
        line.push(word);
    });
    if (line.length > 0) {
        result.push(line.join(" "));
    }
    return result;
};

function GetIDS(objSelectedIDS) {
    var SelIDS = '';
    var ActualIDS = '';
    for (var key in objSelectedIDS) {
        // skip loop if the property is from prototype
        if (!objSelectedIDS.hasOwnProperty(key)) continue;
        var obj = objSelectedIDS[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
            // your code
            // alert(prop + " = " + obj[prop]);
            if (prop == 'id') {
                //alert(obj[prop]);
                SelIDS += obj[prop] + ","
            }
        }
    }
    ActualIDS = SelIDS.slice(0, -1);
    return ActualIDS
}


 function CheckDuplicateTab() {
    //alert(localStorage.getItem('web_browser'))
    //localStorage.removeItem('web_browser');
    //alert(11)
    // alert(localStorage.getItem('web_browser'))
    window.addEventListener('load', function () {
        if (localStorage.getItem('web_browser') == null) {
            // new tab               
            localStorage.setItem('web_browser', 'true');
            // alert(localStorage.getItem('web_browser'))
            window.addEventListener('unload', function () {
                localStorage.removeItem('web_browser');
            })
        } else {
            // duplicate tab   
            //alert(111)
            window.location = "../Default/DuplicateTab.aspx";
            //return;
        }
    })
}


//disabled enter key in textarea
function disableEnterKey(e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;
    } else {
        key = e.which;
    }
    if (key == 13) {
        return false;
    } else {
        return true;
    }
}

