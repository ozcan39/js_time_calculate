# js_time_calculate
This js code calculates the load time of any web page and the spent time of a user on the web page.

# How it works
Whenever a user visits a web page, it calculates the load time of the page based on <a href="https://www.w3.org/TR/navigation-timing/#introduction" target="_blank">W3C Navigation Timing Script</a>. After this calculation, it checks if the user is on the page or not to calculate the spent time of the user. If the user switches the tab, the interval for this calculation is stopped. When the user comes back to the web page, the interval starts again. The action of stopping interval is used for any browser close event too.
