// ==UserScript==
// @name         Freedom Friend Connect Accept All Friends
// @website    https://www.facebook.com/groups/freedomconnect
// @version      0.2
// @description  When enabled, when you visit the friends page and click invite requests, it will loop through and approve all friend requests
// @author       Colby Guyer, <colbyguyer@gmail.com>
// @match        http://www.freedompop.com/earnfree_friends.htm*
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
waitForKeyElements ("#friendListMain", actionFunction);

function actionFunction(){
    var targetForms = $("tr td.friendRequestBtnTD form");
    targetForms.each( function(index){
        $(this).find("button").delay(4000 * index).click();
        index = index+1;
                                    }
                      )
}

