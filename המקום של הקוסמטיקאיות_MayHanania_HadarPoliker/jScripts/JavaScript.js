
//משתנה גלובלי מקבל 1 מסםר הראשון של התמונה
var num = 1;
// הפעלת הפונקציה המקבלת את המספר הראשון של התמונה כך שתציג אותה כברירת מחדל
showSlide(num);

// העברת תמונות על ידי החצים קדימה או אחורה לפי -1 או 1
function moveSlide(index) {
    showSlide(num += index);
}

//טאבנייל התמונה הנוכחית
function currentSlide(index) {
    showSlide(num = index);
}

//מראה את התמונה הגדולה 
function showSlide(index) {
    //מערך שאורכו כמספר התמונות הגדולות
    var slides = document.getElementsByClassName("mygallery");
    //מערך שאורכו כמספר התמונות הקטנות בגלריה
    var points = document.getElementsByClassName("thumb nail");
    //לוקח את תיאור התמונות 
    var title = document.getElementById("title");
    //אם המספר המתקבל גדול מאורך מערך התמונות הגדולות כלומר הגעתי לסוף התצוגה
    if (index > slides.length) {
        num = 1; // הגדר את התמונה הנוכחית כ1
    }
    // אם המספר המתקבל קטן מאחד כלומר לחצתי על החץ אחורה כאשר התמונה היא תמונה מספר אחד
    if (index < 1) {
        num = slides.length; // הגדר את התמונה הנוכחית כתמונה האחרונה הנמצאת במערך
    }
    //עובר על התמונות הגדולות ומגדיר את אותם כנסתדרות
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //עובר על התמונות הקטנות ומחליף את המילה "אקטיב" ל"" 
    for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace("active", "")
    }
    //מגדיר את התמונה הנוכחית במערך כתמונה הגדולה ומציג את התיאור שלה
    slides[num - 1].style.display = "block";
    points[num - 1].className += " active";
    title.innerHTML = points[num - 1].alt;
}