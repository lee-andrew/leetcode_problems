/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort();
    var diff1 = Math.abs(get_date1(timePoints[timePoints.length -1]) - get_date1(timePoints[0]))/1000/60;
    var diff2 = Math.abs(get_date2(timePoints[timePoints.length -1]) - get_date1(timePoints[0]))/1000/60;
    var min = Math.min((diff1, diff2));

    for (var i = 0; i < timePoints.length - 1; i++) {
        var diff1 = Math.abs(get_date1(timePoints[i+1]) - get_date1(timePoints[i]))/1000/60;
        var diff2 = Math.abs(get_date2(timePoints[i+1]) - get_date1(timePoints[i]))/1000/60;
        var diff = Math.min(diff1, diff2);
        min = Math.min(min, diff);
    }
    return min;
};

var get_date1 = function(time_string) {
    return new Date("2017-03-11 " +  time_string);
};

var get_date2 = function(time_string) {
    return new Date("2017-03-10 " +  time_string);
};

var str = ["23:59","00:00", "18:45","19:00", "00:04"] ;
var str2 = [ "23:55" , "00:00", "00:02"] ;

console.log(findMinDifference(str));
console.log(findMinDifference(str2));