document.addEventListener('DOMContentLoaded', function() {
    // تحميل اللغة المخزنة من التخزين المحلي
    let storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);

    // إضافة مستمع لزر EN
    document.querySelector('.language-toggle-en').addEventListener('click', function(e) {
        e.preventDefault(); // منع الانتقال عند النقر على الرابط
        setLanguage('en');
    });

    // إضافة مستمع لزر AR
    document.querySelector('.language-toggle-ar').addEventListener('click', function(e) {
        e.preventDefault(); // منع الانتقال عند النقر على الرابط
        setLanguage('ar');
    });
});

function setLanguage(language) {
    // حفظ اللغة في التخزين المحلي
    localStorage.setItem('language', language);

    // تغيير النصوص في الصفحة بناءً على اللغة
    document.querySelectorAll('[data-en]').forEach(function(element) {
        if (language === 'ar') {
            element.textContent = element.getAttribute('data-ar');
            document.documentElement.setAttribute('lang', 'ar');
            document.body.style.direction = 'rtl';
        } else {
            element.textContent = element.getAttribute('data-en');
            document.documentElement.setAttribute('lang', 'en');
            document.body.style.direction = 'ltr';
        }
    });

   

 function switchToArabic() {
  document.documentElement.setAttribute("lang", "ar");
  document.documentElement.setAttribute("dir", "rtl");
}

function switchToEnglish() {
  document.documentElement.setAttribute("lang", "en");
  document.documentElement.setAttribute("dir", "ltr");
}
    // تحديث نص الأزرار إذا كان هناك حاجة لتبديل النصوص (حسب السياق)
    document.querySelector('.language-toggle-ar').textContent = (language === 'ar') ? 'AR' : 'AR';
    document.querySelector('.language-toggle-en').textContent = (language === 'ar') ? 'EN' : 'EN';
}
