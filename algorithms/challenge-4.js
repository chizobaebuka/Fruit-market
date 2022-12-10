function calculateGrade(marks) {
    let sum = marks.reduce((a,b) => a+b);
    let avgMark = sum / marks.length;

    if (avgMark >= 90 && avgMark <= 100){
        return "A";
    }else if (avgMark >= 80 && avgMark < 90){
        return "B";
    }else if (avgMark >= 70 && avgMark < 80){
        return "C";
    }else if (avgMark >= 60 && avgMark < 70){
        return "D";
    }else if (avgMark >= 50 && avgMark < 60){
        return "E";
    }else{
        return "F"
    }
 }
  module.exports =calculateGrade
