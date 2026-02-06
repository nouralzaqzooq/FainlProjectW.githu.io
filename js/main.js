
// console.log("أهلا بكم بأرض الصمود والرباط")
////////////////////////////////////////////////////////////
//طريقة للطباعة  افضل وتكون عدة جمل او نصوص
function printWelcomeMessage(){  //هين بنحط الدالة وبنكتب داخلها الي بدنا نطبعو 
  console.log("أهلا بكم بأرض الصمود والرباط")
  console.log("ارض الشهيد والجريح والصامد والمرابط ")
  console.log(" انها غزة العزة")
}
  printWelcomeMessage() // هين استدعينا الدالة عشان تطبع او تظهر الرسائل بالكنسل


//////////////////////////////////////////////////////////////////////
document.getElementById("myBtn").onclick = function () {
      alert("نحن معك، الصبر مفتاح الفرج");
  };
/////////////////////////////////////////////////////////////////////
 (function () {
    let count = 0;
    window.increaseCount = function () {
      count++;
      document.getElementById("counter").innerText =
        "عدد الصامدون: " + count;

      console.log("عدد الصامدون:", count);
    };
  })();
//////////////////////////////////////////////////////////////////
//هاي لل الزر الثاني يعني للرسالة
let messageCount = 0;
function showMessage() {
     messageCount++; // زيادة العداد كل مرة
  //  تعريف النص الخام والـ HTML
  let plainTextMessage = "نحن معكم بقلوبنا ودعائنا، صمودكم قوة، وصبركم رسالة أمل، وما بعد العسر إلا يسر";
  let messageHtml = "<div class='alert alert-success text-center mt-3'>" + plainTextMessage + "</div>";

  // 2. عرض الرسالة في الصفحة 
  document.body.insertAdjacentHTML("beforeend", messageHtml);
  
  //  طباعة النص الخام في الكونسول كـ "log" (اختياري)
  console.log(plainTextMessage);
  // إرجاع النص الخام كنتيجة عند استدعاء الدالة في الكونسول
  return plainTextMessage;
  // اما هدول الي فوق بكتب الرسالة نفسها وهيعد عدد الرسائل جمبها مع بعض واذا ضغطنا اشي تاني ورجعنالها هيعد من اول في سطر جديد

 /////////////////////////////////////////////////

//هدول اذا بدكم  يكتب عدد الرسائل ويحسبهم ككل
//    console.log(`عدد الرسائل: ${messageCount}`); // العد في الكونسول
//   return plainTextMessage;
 }


//========slader===============

$(document).ready(function () {

    // إخفاء كل الصور ما عدا الأولى
    $('.slide img').hide();
    $('.slide img.show').show();

    $('.next').click(function () {
        const now_img = $('.slide img.show');
        const next_img = now_img.next('img');

        if (next_img.length) {
           
            now_img.fadeOut(200).removeClass('show');
            next_img.fadeIn(200).addClass('show');
        }
    });

    $('.prev').click(function () {
        const now_img = $('.slide img.show');
        const prev_img = now_img.prev('img');

        if (prev_img.length) {
            now_img.fadeOut(200).removeClass('show');
            prev_img.fadeIn(200).addClass('show');
        }
    });

});

////////////////////////// رسالة نجاح التواصل /////////////////////////////////
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للصفحة
    // إفراغ حقول النموذج
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // عند النجاح في إرسال البيانات:
    const formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'block'; // إظهار رسالة النجاح

    // إخفاء الرسالة تلقائياً بعد 4 ثوانٍ 
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 4000); //   4 ثواني
});
///////////////////////////JS/ بحث فوري داخل قائمة/بطاقات //////////////////////////////
document.getElementById("searchInput").addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const stories = document.querySelectorAll(".story");

  stories.forEach(function (story) {
    const text = story.innerText.toLowerCase();
    story.style.display = text.includes(value) ? "block" : "none";
  });
});


////////////////////// فلترة القصص /////////////////////////
$(document).ready(function() {
  $('.buttons button').click(function() {
    const filter = $(this).data('filter');

    if (filter === 'all') {
      $('.story').show();
    } else {
      $('.story').hide();
      $('.story').filter(`[data-category="${filter}"]`).show();
    }
  });
});










