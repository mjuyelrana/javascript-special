/**
 * The bind method 
 * Task: Describe the bind() function method.
 * 1. Describe how it works.
 * 2. Explain the parameters that it takes.
 * 3. Code out an example of how bind() is used. 
 */


this.distance = 10000;

const roadTrip1 = {
  distance : 3000,
  getDistance : function (unit, caption){
    return this.distance + unit + caption;
  }
}

const roadTrip2 = {
  distance : 5000
}

const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');
console.log(getTripDistance(' in total.'));

