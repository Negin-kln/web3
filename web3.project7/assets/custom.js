// توضیحات مربوط به function setcookie()
// تابع setCookie برای تنظیم یک کوکی جدید
function setCookie(name, value, day) {
  // ایجاد یک شیء Date برای محاسبه تاریخ انقضای کوکی
  let d = new Date();
  // محاسبه زمان انقضای کوکی بر اساس تعداد روزهای ورودی (exdays)
  d.setTime(d.getTime(day * 24 * 60 * 60 * 1000));
  // ایجاد رشته expires برای کوکی که تاریخ انقضا را مشخص می‌کند
  let expires = "expires" + d.toUTCString();
  // تنظیم کوکی با نام (name)، مقدار (value)، تاریخ انقضا (day) و مسیر (path)
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
// -------------------------------------------------------------------------------------
// تابع getCookie برای دریافت مقدار یک کوکی خاص
function getCookie(name) {
  // ایجاد یک رشته برای جستجوی نام کوکی (به شکل "نام=")
  let name = name + "=";
  // دریافت تمام کوکی‌های ذخیره شده در مرورگر و تقسیم آن‌ها به آرایه‌ای از رشته‌ها
  // کوکی‌ها با کاراکتر ; از هم جدا شده‌اند
  let ca = document.cookie.split(";");
  // حلقه برای پیمایش تمام کوکی‌ها در آرایه
  for (let i = 0; i < ca.length; i++) {
    // دریافت کوکی فعلی از آرایه
    let c = ca[i];
    // حذف فاصله‌های ابتدایی از کوکی (اگر وجود داشته باشد)
    // زیرا ممکن است قبل از کوکی فاصله وجود داشته باشد (مثلاً: " username=John")
    while (c.charAt(0) == " ") {
      c = c.substring(1); // حذف فاصله‌های ابتدایی
    }
    // بررسی آیا کوکی فعلی با نام مورد نظر شروع می‌شود یا نه
    // indexOf بررسی می‌کند که آیا رشته name در ابتدای کوکی c وجود دارد
    if (c.indexOf(name) == 0) {
      // اگر کوکی مورد نظر پیدا شد، مقدار آن را برگردان
      // substring برای استخراج مقدار کوکی استفاده می‌شود
      // name.length طول رشته "نام=" است، بنابراین از آن نقطه به بعد مقدار کوکی شروع می‌شود
      return c.substring(name.length, c.length);
    }
  }
  // اگر کوکی مورد نظر پیدا نشد، یک رشته خالی برگردانده شود
  return "";
}
// -------------------------------------------------------------------------------------
// توضیحات مربوط به function checkcookie()
function checkCookie() {
  //ابتدا یک فانکشن تعریف میکنیم
  let userName = getCookie("userName");
  //   دریافت مقدار کوکی
  if (userName != "") alert(`wellcome back ${userName}`);
  //   اگر مقدار کوکی خالی نباشد یک پیام خوش آمدگویی برای کاربر نشان میدهد
  else {
    // در غیر این صورت
    userName = prompt("please enter your username: ", "");
    // نشان دادن پیامی برای ورود مقدار username
    if (userName != "" && userName != null)
      // اگر مقدارش خالی نبود
      setCookie("username", userName, 365);
    //   تابع setCookie("name",value,day)را اجرا می کند
  }
}
