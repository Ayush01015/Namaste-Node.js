console.log("important file code excuted")
var PI = 3.14;
function areaOfCircle(radius){
    console.log(`For Radius ${radius}, Area is ${PI*radius**2}`)
}
module.exports = {
    PI,
    areaOfCircle
};