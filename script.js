// JSON itetrate over for loop
// for
var obj= {
    "name":"wasif",
    "age":"23",
    "gender":"male",
    "attendance":["mon","tue","wed","thur","fri"],
    };
for(var i=0;i<obj.attendance.length;i++){
    console.log(obj.attendance[i]);
}
// for in
var obj = {
    "name":"wasif",
    "age":23,
    "gender":"male",
    "attendance":["mon","tue","wed","thur","fri"],
    };
  for (var i in obj.attendance) 
 {
 console.log(i,obj.attendance[i]);
 }

// resume
var resume = {
    name : "wasif",
    age : "23",
    gender:"male",
    education:"B-TECH (MECHANICAL)",
    languagesknown:["tamil","english"],
    location:"dindigul",
    hobby:["internet surfing","badmiton"],
};
console.log(resume);
