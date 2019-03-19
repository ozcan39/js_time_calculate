var lt_target=$('#load_time');
var st_target=$('#spent_time');
var interval_timeout=100; //the value of interval on watching the visibility changings in milisecond (0.1 second)
var counter_status = false;
var counter, hidden, visibilityChange;

// the control of page visibility
if (typeof document.hidden !== "undefined") { hidden = "hidden"; visibilityChange = "visibilitychange"; }
else if (typeof document.msHidden !== "undefined") { hidden = "msHidden"; visibilityChange = "msvisibilitychange"; }
else if (typeof document.webkitHidden !== "undefined") { hidden = "webkitHidden"; visibilityChange = "webkitvisibilitychange"; }

// This function updates the value of spent time
function show_time_spent()
{
    counter_status = true;
    var lt_value=parseFloat(st_target.html());
    var second=(lt_value+interval_timeout/1000).toFixed(2);
    st_target.html(second);
}

//This function watches the visibility changings on the page
function visibility_change() {
    if(document[hidden]) //if the page is not visible
    {
        clearInterval(counter);
        counter_status = false;
    }
    else //if the page is visible
    {
        clearInterval(counter);
        if (!counter_status) { counter = setInterval(show_time_spent, interval_timeout); }
    }
}

$(window).on('load',function(){
    var finish =new Date().getTime();
    var load_time=(finish-performance.timing.navigationStart)/1000;
    lt_target.html(load_time); // page load time

    if (!document[hidden])
    {
        clearInterval(counter);
        if (!counter_status) { counter = setInterval(show_time_spent, interval_timeout); }
    }
}).focus(function() { visibility_change(); }).blur(function() { clearInterval(counter); counter_status = false; })


// if the browser does not support addEventListener and Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
    //alert('warnings...');
}
else { document.addEventListener(visibilityChange, visibility_change, false); }