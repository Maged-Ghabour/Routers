function getCities(router) {
  let countryPlaceholder = document.querySelector("#router");
  let cityPlaceholder = document.querySelector("#city");
  let citiesDropDown = document.querySelector("#cities");

  cityPlaceholder.innerHTML = "";
  countryPlaceholder.innerHTML = "";

  if (router.trim() === "") {
    citiesDropDown.disabled = true;
    citiesDropDown.selectedIndex = 0;
    return false;
  }

  // AJAX request with fetch()
  fetch("countries.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let cities = data[router];
      let out = "";
      out += `<option value="" disabled selected>Choose an action</option>`;
      for (let city of cities) {
        out += `<option value="${city}">${city}</otion>`;
      }
      citiesDropDown.innerHTML = out;
      citiesDropDown.disabled = false;
      countryPlaceholder.innerHTML = router;
    });
}

function getCity(city) {
  return (document.querySelector("#city").innerHTML = city);
}

function getContent(city) {
  return (document.querySelector("#city").innerHTML = city);
}

document.addEventListener("change", () => {
  let action1 = "How to access to cpe page";
  let action2 = "Reset config";
  let action3 = "Wireless config";
  let action4 = "DNS";
  let action5 = "MTU";
  let action6 = "Mac Filter";
  let action7 = "Disable Wps";
  let action8 = "Change password for router page";
  let action9 = "Connected devices";
  let action10 = "Firewall";
  let action11 = "Upstream/ Downstream";
  let action12 = "line code";

  let router1 = "zyxel";
  let router2 = "DN(8245V-56)";
  let router3 = "H188A(zte)";
  let router4 = "TP-Link VN020-F3";
  let router5 = "hg 531 - 532";
  let router6 = "zte108n";
  let router7 = "zte 168";
  let router8 = "hg 630 - 633 - dg8045";

  let router = document.querySelector("#router");
  let action = document.querySelector("#city");
  let content = document.querySelector("#content");

  switch (true) {
    case router.innerHTML == "" || action.innerHTML == "":
      content.style.display = "none";
      break;
    // zyxel
    case router.innerHTML == router1 && action.innerHTML == action1:
      content.style.display = "block";
      content.innerHTML = `كيفيه الدخول لصفحه الروتر 
نكتب فى محرك البحث 192.168.1.1 نضغط انتر  
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب 
user =>  admin 
password =>  admin 
او  
user => admin  
password => الموجود فى ضهر الراوتر 
يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/8r069
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر 
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل الاعدادات 
او عمل ريست من صفحه الروتر
بعد بيتم عمل الاعدادات 
حضرتك يا فندم علشان نعمل الاعدادت 
هيتم الضغط على كلمه  let's go 
هيتم كتابه يوز نيم وباسورد الخدمه
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه
وبعدين دوس next
wifi name  => ده اسم الشبكه
password  =>     ده باسورد شبكه الواى فاى  ويفضل يكون من حروف وارقام ورموز  بحيث يكون قوى ويصعب اختراقه ولايقل 8 حروف  وارقام 
هيتم وضع علامه صح على الاهتيار الاخيار الخاص بالشبكات
هيتم الضغط على كلمه done 
وبكده الروتر اتفعل وده لينك فيه الخطوات بالصور يا فندم  https://justpaste.it/8x5ux
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `فى صفحة الراوتر فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت
هنحتار من قائمة network setting  
wireless
كيفيه تفعيل  الواى  فاى على
2.4g  or 5g
لو حضرتك عايز تفعل الاتنين مع بعض فكده هتحط علامه صح على 
keep the same for 2.4g and 5g 
اما لو عايز تفعل شبكه واحده فقط  هشتيل علامه الصح من على 
keep the same for 2.4g and 5g 
وهتيجى عند كلمه band
وتختار سواء
2.4g or 5g
max clients ده  اقصى عدد لاجهزه المسموح الاتصال بيها
hide ssid عند وضع علامه صح  هيتم اخفاء شبكه الواى فاى
wireless network name  ده اسم شبكه الواى فاى
لو تم وضع علامه صح على كلمه
generate password  automatically فكده الباسود هيكون هوالافتراضى اللى موجود على ضهر الروتر
 #### اما فى حاله الرغبه فى تغير الباسورد الخاص بالواى هيتم ازاله العلامه من  ###
generate password  automatically
وبعد كده نكتب  الباسور وحفظ
وده لينك فيه الخطوات بالصور https://justpaste.it/7rzbg"
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `
هيتم الضغط على network setting
# home networking
هيتم وضع العلامه على  static
#dns we هو 
163.121.128.134          
163.121.128.135     
# dns google  
DNS 1: 8.8.8.8
DNS 2: 8.8.4.4
ثم حفظ وعمل ريستارت عشان الخطوات يتم حفظها
وده لينك بيوضح الخطوات بالصور
https://justpaste.it/3ijuj
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `
فى صفحة الراوتر فى 3 شرط تحت بعض هنضغط عليهم
وبعدين اختيار##    network setting
# ثم broadband 
هنا بنحتار على حسب حضرتك  مفعل الروترعلى ايه 
لو مفعله على adsl ده سرعات عاديه 
على vdsl سرعات عاليه 
وبيتم الضغط على علامه القلم 
هيتم اضافة الرقم 1420 فى المربع الخاص ب 
mtu
ومع كل تغير نضغط كلمه  
عشان يتم الحفظ apply
وده لينك بيوضح الخطوات يا فندم بالصور
https://justpaste.it/3yyeo"
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `فى صفحة الراوتر فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت
هنختار security بعدها  mac filter بعدها  add new rule
ونكتب الاجهزة اللى احنا عاوزين نسمحلها بالدخول للراوتر  وبعدين  apply واللينك ده يا فندم فيه صورة توضيحية https://justpaste.it/mac-zyxel
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `# كيفيه اغلاق wps
هنختار wps
هيتم الضعط على الزر اللى  موجود عند wps ده وبعد كده حفظ
وده لينك فيه الخطوات بالصور https://justpaste.it/7rzbg
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `# فى صفحة الراوتر  فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت بعدين هنختار  maintenance بعدها  user account  وتعلم على علامة القلم ونكتب الباسورد الجديد وندوس  apply
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `"home page من هنختار  connectivity هيظهر لينا الاجهزة اللى موجودة على الراوتر  ومن علامة القلم لو ضغطنا عليها نقدر نعمل حظر للجهاز

"
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `# فى صفحة الراوتر  فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت بعدين هنختار  network setting بعدها  security
بعدها  firewall ونعلم صح على الاتنين  ip وندوس  apply
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `Home page هنختار 
		system info وبعدين vdsl wan عند RX دى سرعة الداونلود
TX دى سرعة الابلود
`;
      break;
    case router.innerHTML == router1 && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = "";
      break;

    //  DN(8245V-56)

    case router.innerHTML == router2 && action.innerHTML == action1:
      content.innerHTML = `كيفيه الدخول لصفحه الروتر 
نكتب فى محرك البحث 192.168.1.1 نضغط انتر  
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح   
 وده لينك يا فندم فيه الخطوات  
https://justpaste.it/8r069
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر 
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل الاعدادات
او عمل ريست من صفحه الروتر 
بعد بيتم عمل الاعدادات # 
هيتم كتابه يوز نيم وباسورد الخدمه 
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه  بعد كده من  wifi configuration ده يا فندم اعدادات الشبكة  2.4 G 5G حضرتك بتعلم صح على الشبكة اللى محتاجها .. او ممكن الاتنين ويتم تغير اسم الشبكة والباسورد وده لينك بيوضح لحضرتك الخطوات بالصور https://justpaste.it/97vnx
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `عشان تغير اسم الشبكه يا فندم
 والباسورد هتدخل على صفحة الراوتر من خلال 192.168.1.1
ثم تكتب اليوزرنيم والباسورد 
تدخل على Advanced  
وبعدين
 WLAN  
تختار شبكة الواي فاي اللى حضرتك عايزها لو ال2.4 جيجا هيرتز هتدخل على G Basic Network
2.4
G Basic Network لو 5 جيجا هيرتز هتخدل على 5
في خانة ال enable wlan هتحط علامة صح
في خانة الssid name  هتكتب اسم شبكة الواى فاي
في خانة ال wpa presharedkey هتكتب باسورد الواي فاي 
ثم تضغط على apply
لو حضرتك عاوز تخفى الشبكة هنختار  home page
وبعدها  wifi configuration
نحط علامه صح على hide network
وبعد كده  save
وده لينك فيه الخطوات يا فندم 
https://justpaste.it/473m2
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `Advanced >هنختار
 LAN > ثم
DHCP Server ثم 
وبعدين  primary dns secondary dns دول اللى هنسجل فيهم
 
dns we هو 
163.121.128.134          
163.121.128.135    
 
Dns google هو
DNS 1: 8.8.8.8
 
DNS 2: 8.8.4.4
 
وتعمل حفظ اللى هيا بتكون apply
ده لينك فيه الشرح بالصور يا فندم  https://justpaste.it/5ob2t
			`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `هنفتح صفحة الراوتر عن طريق كتابة  192.168.1.1 فى شريط العنوان فى اى متصفح 
2-هندخل اليوزر نيم والباسورد الخاص بصفحة الراوتر 
اسم المستخدم و الباسورد  بتكون موجودة فى ظهر الراوتر
3-هتضغط علي Advanced
4-هتختار WAN من القائمة الجانبية
5-7_TR069_INTERNET_R_VDSL_VID_ 
6-ونضغط علي Change ADSL user name and password
7-MRU Type نخليه Manual
8-نكتب 1420 في مكان ال MRU
9-- نضغط Apply
9-نعمل ريستارت للراوتر وده لينك فيه الخطوات يا فندم https://justpaste.it/4un9r
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `Advanced هنختار
 Security > ثم
Wi-Fi MAC Filtering ثم
blacklist ديه عشان يتم حظر الاجهزه من عدم الدخول للروتر
whitelist  ديه عشان يتم اضافه الاجهزه المراد دخولها على الروتر فقط  حضرتك هتختار سواء حظر اجهزة او اضفة اجزة زى ماتحب يا فندم  وبعدين ندوس على  new ونكتب الاجهزة وندوس  apply وده لينك فيه الخطوات يا فندم  https://justpaste.it/1wgjn
			`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `# كيفيه اغلاق wps
من علامة الترس هنختار  wlan ونختار الشبكة سواء 2.4G او 5G خيبقى موجود تحت enable wps هنشيل العلامة من عليها وندوس apply وده لينك يا فندم فيه الخطوات بالصور https://justpaste.it/473m2
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `Advanced > هنختار
System Management >وبعدين
 Account Management وبعدين change password وبعدين ونكتب الباسورد القديم وبعد كده الجديد مرتين apply وندوس وده لينك فيه الخطوات بالصور يا فندم  https://justpaste.it/61dp3
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `Home page"" من 
Wired Devices
ده الاجهزه المتصله كابل
wi-fi devices
ده الاجهزه المتصله واى فاى وده لينك فيه الخطوات يا فندم بالصور  https://justpaste.it/98cj5
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `Advanced > هنختار
 Security > وبعدين
Firewall Level وبعدين  وبعد كده نعمل  disabled وندوس   apply وده لينك فيه الخطوات يا فندم بالصور https://justpaste.it/6q4fm
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `System Information> هنختار
DSL>وبعدين
Upstream دى سرعة الابلود downstream دى سرعة الداونلود
`;
      break;
    case router.innerHTML == router2 && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = `System Information ->هنختار
 DSL ->وبعدين
 DSL Mode وبعدين  standard وبعدين all نختار submit وندوس
`;
      break;

    // H188A(zte)

    case router.innerHTML == router3 && action.innerHTML == action1:
      content.style.display = "block";

      content.innerHTML = `كيفيه الدخول لصفحه الروتر
نكتب فى محرك البحث 192.168.1.1 نضغط انتر 
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/94ppk
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = ` ريست وكونفجريشن  للراوتر
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل الاعدادات
او عمل ريست من صفحه الروتر Management & Diagnosis >  System Management >  Device Management >  Factory Reset Management
بعد بيتم عمل الاعدادات #
هيتم كتابه يوز نيم وباسورد الخدمه
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه  بعد كده من  wifi configuration ده يا فندم اعدادات الشبكة  2.4 G 5G  ويتم تغير اسم الشبكة والباسورد وده لينك بيوضح لحضرتك الخطوات بالصور 
https://justpaste.it/22bgm
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `حضرتك يافندم عشان تغير اسم الشبكه
 والباسورد هتدخل على صفحة الراوتر من خلال 192.168.1.1
ثم تكتب اليوزرنيم والباسورد اللى على ضهر الراوتر 
وتدخل على ال  local network 
 ثم على  wlan
ثم wlan global configuration 
 ثم wlan ssid configuration 
وتختار شبكة الواي الواي اللى حضرتك عايزها سواء ال2.4 جيجا هيرتز او ال5 جيجا هيرتز 
في خانه الssid name  هتكتب اسم شبكة الواي فاي 
في خانه ال wpa passphrase  هتكتب باسورد الواي فاي 
ولو عايز شبكة الواي فاي تكون مخفية عند ssid hide  هتخليها  on 
ثم تضغط على apply  
وده لينك فيه الشرح يا فندم بالصور
https://justpaste.it/1vtm4
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `local network >هنختار
 LAN > وبعدين
Ipv4 وبعدين
DHCP Server ثم 
وبعدين  primary dns secondary dns دول اللى هنسجل فيهم
 
dns we هو 
163.121.128.134          
163.121.128.135    
 
Dns google هو
DNS 1: 8.8.8.8
 
DNS 2: 8.8.4.4
 
وتعمل حفظ اللى هيا بتكون apply
ده لينك فيه الشرح بالصور يا فندم  
https://justpaste.it/9hbux
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `1-هنفتح صفحة الراوتر عن طريق
 كتابة 192.168.1.1 
فى شريط العنوان فى اى متصفح زى Google chrome او Firefox
2-هندخل اليوزر نيم والباسورد الخاص بصفحة الراوتر 
اسم المستخدم و الباسورد  بتكون موجودة فى ظهر الراوتر
3-هتضغط علي كلمة internet
4-هتختار WAN من القائمة الجانبية
5-من DSL Connection نختار WAN0
6-MTU Mode نختاره Manual
7-نكتب 1420 في مكان ال MTU
8- نضغط Apply
9-نعمل ريستارت للراوتر
ودة لينك بيحتوي علي صورة توضيحية هتساعدك بشكل افضل
https://justpaste.it/4ckg3
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = ` home من wlan devices ندخل
ده عشان نعرف الاجهزة المتصلة يا فندم  بعد كده يا فندم هندخل على WLAN وبعدها WLAN Advanced وبعد كده هتختار white list  من شبكة 2.4G عشان تضيف الاجهزة اللى حضرتك عاوزها تدخل للراوتر بعدها ندخل على Access Control-Rule Configuration ونضيف الاجهزة  apply وندوس فى كل خطوه
ونفس الخطوات لشبكة 5g وده لينك فيه الشرح بالصور يا فندم  https://justpaste.it/7lw4i
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `local network هندخل 
wlan وبعدها 
Wps وبعدها
ونقفل wps وندوس حفظ يا فندم
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `Management & Diagnosis >هندخل على 
 Account Management > وبعدين
Admin Account Management وبعدين 
ونغير الباسور ونعمل حفظ يا فندم 
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `home من wlan devices ندخل
ده عشان نعرف الاجهزة المتصلة يا فندم 
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `Internet >هندخل على
 Security >وبعدين
 Firewall وبعدين 
Enable firewall وبعدين apply وندوس  وده لينك فيه الشرح يا فندم بالصور
https://justpaste.it/72uvh
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `Internet >هندخل
 Status >وبعدين
 DSL >وبعدين
 DSL Link Informationوبعدين
Actual rate(up/down)دى سرعة الابلود والداونلود
وده لينك فيه الشرح يا فندم بالصور
https://justpaste.it/92jo6
`;
      break;
    case router.innerHTML == router3 && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = `Internet => ندخل على 
 WAN =>  وبعدين
DSL => وبعدين
 DSL Modeling Parameters وبعدين 
ونعلم على كله يا فندم 
Apply وندوس
وده لينك فيه الشرح بالصور 
https://justpaste.it/7frv8
`;
      break;

    // TP-Link VN020-F3

    case router.innerHTML == router4 && action.innerHTML == action1:
      content.style.display = "block";

      content.innerHTML = `كيفيه الدخول لصفحه الروتر
نكتب فى محرك البحث 192.168.1.1 نضغط انتر 
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/94ppk
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل 
لو ريست من صفحه الروتر اسمه ريست سوفت ودى الخطوات 
قم بالضغط علي advanced
ثم اضغط على > system tools
ثم اضغط على > backup and restore
ثم اضغط على >factory restore
ثم اضغط على yes 
هيتم كتابه يوز نيم وباسورد الخدمه
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه
بعد عمل الريست بيتم عمل الاعدادات الخاصه بالشبكة
قم بتغيير اسم شبكة الواي فاي من اما مربع : Network Name (SSID).
 نظام الامان في شبكة الواي فاي يفضل تركه كما هو موجود بالصوة امام مربع  : security .
لاخفاء شبكة الواي فاي قم بوضع علامة صح اما مربع Hide SSID.
اصدار نظام التشفير نتركما بالصورة : version.
نظام التشفير يفضل ايضا تركه كما هو موجود بالصورة : Encryption.
تستطيع تغيير كلمة مرور شبكة الواي فاي من أمام مربع Password.
ثم قم بالضغط على save .
ده لينك بيوضح الشرح بالصور يا فندم
https://justpaste.it/6gqph
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `
حضرتك يافندم عشان تغير اسم الشبكه
 والباسورد هتفتح صفحه الراوتر عن طريق 192.168.1.1
وبعدها هتدخل اليوزر نيم والباسورد اللي في ضهر الراوتر
هندخل علي Basic 
وتضغط علي  Wirless
 (SSID) Network Nameوحضرتك هتكتب  هنا اسم الشبكه :
Hide SSID : وهنا قم بوضع علامة صح امامها لاخفاء شبكة الواي فاي
وبعد كده Password  : حضرتك هتكتب باسورد شبكه الواي فاي 
وتضغط save لحفظ البيانات التي تم تغييرها
وده لينك بيوضح خطوات اعدادات الواي فاي  بالتفصيل  https://justpaste.it/2w678
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `حضرتك هتفتح اى متصفح
 وتكتب فى اعلى العنوان 192.168.1.1
هايفتح صفحة الروتر 
هتختار من على الشمال   network
وبعدين تختار منها lan 
وبعدين تختار اول حاجه  dhcp server 
هاتكتب فى اول خانه هاتظهر فى نص الشاشه  dns server 1 ip الارقام 163.121.128.134
هاتكتب فى تانى خانه  dns server 1 ipالارقام 163.121.128.135
save وبعدين تضغط   
بعد ما تسجل البيانات هنحتاج اننا نقوم برسترت الرواتر عشان البيانات تتحفظ ولو حضرتك متصل معانا من نفس الشبكه وبترسترت الرواتر هيؤدي لفصل الشات فلو فصل حضرتك بتقدر بتتابع معانا مره اخري 
وده لينك فيه صورة بتوضح الخطوات بالتفصيل
https://justpaste.it/53va6
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `1-هنفتح صفحة الراوتر عن طريق كتابة
 192.168.1.1 فى شريط العنوان فى اى متصفح زى 
Google chrome او Firefox
2-هندخل اليوزر نيم والباسورد الخاص بصفحة الراوتر 
اسم المستخدم و الباسورد  بتكون موجودة فى ظهر الراوتر
3-هتضغط علي Advanced
4-pppoe_ptm_0_0_d
5-نضغط علي modify
6-هتضغط علي Advanced
7-نكتب 1420 في مكان ال MTU
8-نضغط Save
-نعمل ريستارت للراوتر
ودة لينك بيحتوي علي صورة توضيحية هتساعدك بشكل افضل
https://justpaste.it/8qfi
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `1 - هتختار advanced
2 - network
3- wirless
4- mac filtering 
بعد كده فى حاجه اسمها بلاك ليست اللى بيتحط فى القايمه ديه مش بيعرف يدخل  على الراوتر وبيتم حظره 
وفيه اختيار تانى وايت ليست ديه الناس اللى ممكن تدخل على الروتر 
device online ديه الاجهزه اللى شغاله على الروتر  
هتجيى عند device list 
وتعمل add لو عايز تضيف اى جهاز 
وتعمل delete لو عايز تحذف اى جهاز
وندخل بيانات الجهاز يا فندم ونعمل  save وده لينك فيه الخطوات بالصور
https://justpaste.it/4d668
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action7:
      content.style.display = "block";
      content.innerHTML = `
1 - هتختار advanced
2 – wireless وبعدين 
Wps وبعدين
Save نقفلها وندوس
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `" قم بالضغط علي Advanced
ثم اضغط على  > System Tools
ثم اضغط على > Administration
من خلال Account Management
Old Password: الباسورد القديم.
New Password : الباسورد الجديد.
Confirm New Password : هنكتب الباسورد الجديد مره تانى.
ثم الضغط على Save. ده لينك فيه الخطوات بالصور يا فندم https://justpaste.it/9a25h
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `قم بالضغط علي Advanced
Security بعدين 
Access control بعدين 
Online devices دى الاجهزة المتصلة 
وده لينك فيه الخطوات بالصور يا فندم 
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `1- advanced هندخل على 
2- security وبعدين 
3- firewall وبعدين 
Ipv4/ ipv6 هنقفل الاتنين يا فندم 
Save  وندوس
زده لينك فيه الخطوات بالصور
https://justpaste.it/3m1a2
`;
      break;
    case router.innerHTML == router4 && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `1- advanced هندخل على
2- status وبعدين 
current downstream ده الداونلود
current upstream ده الابلود
وده لينك بيوضح الخطوات بالصور يا فندم https://justpaste.it/8ujpn
`;
    case router.innerHTML == router4 && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = `1 - هتختار advanced
2 – network وبعدين 
3- dsl setting  وبعدين 
Auto sync up هندوس على السهم 
All هنختار 
Save وندوس
`;
      break;

    // hg 531 - 532

    case router.innerHTML == router5 && action.innerHTML == action1:
      content.style.display = "block";

      content.innerHTML = `كيفيه الدخول لصفحه الروتر
نكتب فى محرك البحث 192.168.1.1 نضغط انتر 
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/4sosw
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل 
لو ريست من صفحه الروتر اسمه ريست سوفت ودى الخطوات 
قم بالضغط علي  maintinance
ثم اضغط على   device
ثم اضغط على >   reset
ثم اضغط على > restore default settings
ثم اضغط على yes 
هيتم كتابه يوز نيم وباسورد الخدمه
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه
بعد عمل الريست بيتم عمل الاعدادات الخاصه بالشبكة
enable wlan بنتركها كما هى بحيث لو اعلامة الصح من أمامها سوف يتم تعطيل شبكة الواى فاى وبالتالى لمبة Wlan  فى الراوتر هتفصل
WLAN SSID دا اسم شبكة الواى فاى
security  دا نظام التشفير وبنختار اعلى نظام وهو
WPA – PSK / WPA2 -PSK
WPA pre shared key دا باسور الواى فاى ومن المفترض  ان لا يقل عن 8 عناصر سواء ارقام او أحرف
encryption دا يفضل نختاره WPA+AES
وبعدين اضغط NEXT
وبكده الخطوات تكون اتعملت 
وده لينك فيه الخطوات يا فندم
https://justpaste.it/7zxt5
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `1- حضرتك يافندم عشان تغير اسم الشبكه والباسورد هتفتح صفحه الراوتر عن طريق 192.168.1.1
2- بعدين هتكتب اليوزرنيم والباسورد الموجودين ع ضهر الراوتر
3-بعد كدا هتفتح basic..Wlan
4- هتلاقي اسم الشبكه والباسورد هتغيرهم ssid --- wpa pre-shared key
5- لو عاوز تخفي الوايفاي هتلاقي عندك hide broadcast
وجمبها مربع هتدوس عليه هيتعمل علامه صح وبعدين تعمل حفظ يافندم
وده لينك بيوضح خطوات اعدادات الواي فاي  بالتفصيل  https://justpaste.it/79nh0"
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `"حضرتك هتفتح اى متصفح وتكتب فى اعلى العنوان192.168.1.1
هايفتح صفحة الروتر
هتختار من على الشمال Basic
ومنها تختار lan
فى نص الصفحه فى خانة الdhsp srever 
هاتكتب فى اول خانه هاتظهر primary dns الارقام 163.121.128.134
هاتكتب فى تانى خانه secondry dns الارقام 163.121.128.135
save وبعدين تضغط   
بعد ما تسجل البيانات هنحتاج اننا نقوم بعمل ريستارت للرواتر عشان البيانات تتحفظ ولو حضرتك متصل معانا من نفس الشبكه 
ممكن الشات يفصل يا فندم
  وده لينك فيه صورة بتوضح الخطوات بالتفصيل https://justpaste.it/4qvg3
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `هنختار  basic 
نختار wan
INTERNET_TR069_R_O_35
هنغير كلمه auto الى  manual
1420 ونضيف الرقم فى 
MTU
و نضغط كلمه  
submit  عشان يتم الحفظ
وده لينك فيه الخطوات يا فندم يالصور
https://justpaste.it/8mvci
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `
basic ندخل على 
wlan وبعدين 
Wlan filtering بعدين 
Whitelist دى لو عاوزين نحدد اجهزة تدخل على الراوتر 
Blacklist دى لو عاوزين نمنع اجهزة تدخل على الراوتر 
ونكتب الماك ادريس الخاص بالجهاز 
submit وندوس
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/73mbo
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `
basic ندخل على 
wlan وبعدين 
Wireless seting بعدين 
wps هنلاقى مربع عندها نشيل علامة الصح
Wps mode هنختار منها
bbs 
submit وندوس 
واللينك ده يا فندم فيه الخطوات بالصور
https://justpaste.it/79nh0
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `Maintenance ندخل على
Account بعدين 
old password تكتب الباسورد القديم
new تكتب الجديد 
confirm  تكتب الجديد كمان مره 
submit
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/2v7dj
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `status ندخل على 
lan بعدين 
ethernet بعدين
Lan side devices هنلاقى هنا الاجهزة المتصلة 
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/9p2iz
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `advanced ندخل على 
firewall بعدين 
off   نعملها 
ثم 
submit
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/1nudj
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `Status هنختار
wan وبعدين 
Dsl وبعدين
Line status هنلاقى مربع اسمه
upstream بيكون جنبها سرعه الابلود 
downstream بيكون جنيها  سرعه الداون لود 
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/5rkmx
`;
      break;
    case router.innerHTML == router5 && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = `Basic ندخل على 
Dsl بعدين 
Dsl تانى
وبعد ما بنسجل اللاين كود بندوس  submit
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/3ndsj
`;
      break;

    //zte108n

    case router.innerHTML == router6 && action.innerHTML == action1:
      content.style.display = "block";

      content.innerHTML = `كيفيه الدخول لصفحه الروتر
نكتب فى محرك البحث 192.168.1.1 نضغط انتر 
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/8phhd
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل 
لو ريست من صفحه الروتر اسمه ريست سوفت ودى الخطوات 
قم بالضغط علي  administration
ثم اضغط على   system management 
ثم اضغط على > restore default 
ثم اضغط على yes 
هيتم كتابه يوز نيم وباسورد الخدمه
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه
بعد عمل الريست بيتم عمل الاعدادات الخاصه بالشبكة
name ssid هنكتب اسم الشبكة اللى حضرتك عاوزه 
passphrase wpa  هنكتب الباسورد اللى حضرتك عاوزه 
authentication type ده نوع الحماية 
 وهنختاره  wpa 2
 next وبعدن
وبعدين اضغط finish
وبكده الخطوات تكون اتعملت 
وده لينك فيه الخطوات يا فندم
https://justpaste.it/8yqvp
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `1- حضرتك يافندم عشان تغير اسم الشبكه والباسورد هتفتح صفحه الراوتر عن طريق 192.168.1.1
2- بعدين هتكتب اليوزرنيم والباسورد الموجودين ع ضهر الراوتر
3-بعد كدا هتفتح network..Wlan..ssid setting
4- ssid    هنكتب اسم الشبكه
5- بعد كدا هتفتح network..Wlan..security عشان تغير الباسورد
6- لو عاوز تخفي الوايفاي هتلاقي عندك network..Wlan..ssid setting.. hide ssid
وجمبها مربع هتدوس عليه هيتعمل علامه صح وبعدين تعمل حفظ يافندم
وده لينك بيوضح خطوات اعدادات الواي فاي  بالتفصيل https://justpaste.it/6fv0g
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `
حضرتك هتفتح اى متصفح وتكتب فى اعلى العنوان 192.168.1.1
هايفتح صفحة الروتر 
هتختار من على الشمال   network
وبعدين تختار منها lan 
فوبعدين تختار اول حاجه  dhcp server 
هاتكتب فى اول خانه هاتظهر فى نص الشاشه  dns server 1 ip الارقام 163.121.128.134
هاتكتب فى تانى خانه  dns server 1 ipالارقام 163.121.128.135
save وبعدين تضغط   
بعد ما تسجل البيانات هنحتاج اننا نقوم بعمل ريستارت للراواتر عشان البيانات تتحفظ ولو حضرتك متصل معانا من نفس الشبكه ممكن تؤدى الى فصل الشات  
 وده لينك في صورة بتوضح الخطوات بالتفصيل  https://justpaste.it/51dx7
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `نختار wan
ثم wan connection
Mtu عندها هنكتب 1420
ومع كل تغير نضغط كلمه  
modify عشان يتم الحفظ
وده لينك فيه الشرح يا فندم
https://justpaste.it/6mc22
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `"network ندخل 
wlan وبعدين 
access control list وبعدين 
هنكتب الماك ادريس الخاص بالجهاز 
add ونعمل 
وده لينك فيه الخطوات بالصور
https://justpaste.it/2me44
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `networl ندخل على 
wlan وبعدين 
wps وبعدين
Wps mode هنختار منها
bbs 
submit وندوس 
واللينك ده يا فندم فيه الخطوات بالصور
https://justpaste.it/6fv0g
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `administration  ندخل على 
User management وبعدين 
old password نكتب الباسورد القديم
new نكتب الجديد 
confirm  نكتب الجديد كمان مره 
Submit وندوس
وده لينك فيه الخطوات بالصور يا فندم 
https://justpaste.it/9nke7
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `network هندخل على 
wlan بعدين 
associated devices بعدين 
هيظهر الاجهزة المتصلة 
وده لينك فيه الخطوات بالصور يا فندم 
https://justpaste.it/8f4ro
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `security هندخل على 
firewall بعدين 
off نعملها 
submit وندوس
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/6q6p1
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action11:
      content.innerHTML = `status هندخل على 
network interface وبعدين 
Adsl وبعدين 
actual rate (up/down) هنلاقى عندها السرعه 
اللى مكتوب الاول من الشمال سرعة الابلود واللى بعدها سرعة الداونلود 
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/2k20z
`;
      break;
    case router.innerHTML == router6 && action.innerHTML == action12:
      content.innerHTML = `network هندخل على 
wan بعدين 
Adsl modulation بعدين 
ونعلم على النوع اللى محتاجينه وندوس  submit
وده لينك فيه الخطوات بالصور يا فندم 
https://justpaste.it/6o5as
`;
      break;

    // zte 168

    case router.innerHTML == router7 && action.innerHTML == action1:
      content.style.display = "block";

      content.innerHTML = `كيفيه الدخول لصفحه الروتر
نكتب فى محرك البحث 192.168.1.1 نضغط انتر 
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
وده لينك يا فندم فيه الخطوات 
https://justpaste.it/7xq5q
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل 
لو ريست من صفحه الروتر اسمه ريست سوفت ودى الخطوات 
قم بالضغط علي   management & diagnosis
ثم اضغط على   system management 
بعدين  system management
ثم اضغط على > restore default 
هيتم كتابه يوز نيم وباسورد الخدمه
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه 
وبكده الخطوات تكون اتعملت 
وده لينك فيه الخطوات يا فندم
https://justpaste.it/5bh8r
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `1- حضرتك يافندم عشان تغير اسم الشبكه والباسورد هتفتح صفحه الراوتر عن طريق 192.168.1.1
2- بعدين هتكتب اليوزرنيم والباسورد الموجودين ع ضهر الراوتر
3-بعد كدا هتفتح network..Wlan..wlan ssid setting..wlan ssid
4- هتلاقي اسم الشبكه والباسورد هتغيرهم ssid name --- wpa passphrase
5- لو عاوز تخفي الوايفاي هتلاقي عندك hide ssid
وجمبها مربع هتدوس عليه هيتعمل علامه صح وبعدين تعمل حفظ يافندم
ولو حضرتك بتتابعنا من نفس الراوتر الشات ممكن يفصل
وده لينك بيوضح خطوات اعدادات الواي فاي  بالتفصيل  https://justpaste.it/8t1ww  
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action4:
      content.style.display = "block";
      content.innerHTML = `حضرتك هتفتح اى متصفح وتكتب فى اعلى العنوان 192.168.1.1
هيفتح صفحة الروتر
فى فوق خالص home جمبها internet  وجمبها local network 
اختار الlocal network 
على الشمال اختار lan 
هتظهر فى نص الصفحه dhcp اختارها يا فندم 
وبعدين بتعمل على isp dns
وتكتب فى اول خانه هاتظهر primary dns الارقام 163.121.128.134
وتكتب فى تانى خانه secondry dns الارقام 163.121.128.135
apply وبعدين تضغط   
وعمل ريستارت للراوتر يا فندم عشان يسحب الاعدادات اللى اتغيرت 
ولو حضرتك بتتابعنا من نفس الراوتر الشات ممكن يفصل 
وده لينك فيه صورة بتوضح الخطوات بالتفصيل 
https://justpaste.it/6odk0
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `Internet هندخل على 
wan بعدين 
pvc0 بعدين
mtu mode هنخليها 
manual 
mtu وبعدين هنكتب 1420 عند  
ومع كل تغير نضغط كلمه  
apply  عشان يتم الحفظ
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/7v9ap
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `Local network ندخل على 
wlan بعدين 
wlan advansed  بعدين 
Whitelist دى لو عاوزين نحدد اجهزة تدخل على الراوتر 
Blacklist دى لو عاوزين نمنع اجهزة تدخل على الراوتر 
ونكتب الماك ادريس الخاص بالجهاز 
apply  وندوس
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/7vw9v
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `Local network ندخل على 
wlan بعدين 
wps بعدين 
wps  تانى 
نختار الشبكة 
wps mode نخليها 
disable
apply وندوس 
وده لينك فيه الشرح بالصور يا فندم
https://justpaste.it/8t1ww
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `Account management ندخل على 
telcomadmin Account management بعدين 
old password نكتب الباسورد القديم
new نكتب الجديد 
confirm  نكتب الجديد كمان مره 
Apply ندوس 
وده لينك فيه الخطوات يا فندم 
https://justpaste.it/4sr1y
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `Local network ندخل على 
lan بعدين 
ipv4 بعدين
هنلاقى الاجهزة المتصلة بالراوتر 
وده لينك فيه الخطوات يا فندم 
https://justpaste.it/8vhdt
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `Home ندخل على 
firewall بعدين 
وده لينك فيه الخطوات يا فندم 
https://justpaste.it/8h18a
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `Internet هندخل على 
status بعدين
dsl link information بعدين
actual rate (up/down) دى السرعه
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/5emqy
`;
      break;
    case router.innerHTML == router7 && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = `Internet ندخل على 
wan بعدين
dsl modulation parameters بعدين
ونعلم على كله
apply وندوس
وده لينك فيه الخطوات يا فندم 
https://justpaste.it/303dw
`;
      break;

    // hg 630 - 633 - dg8045

    case router.innerHTML == "router8" && action.innerHTML == action1:
      content.style.display = "block";

      content.innerHTML = `
كيفيه الدخول لصفحه الروتر
نكتب فى محرك البحث 192.168.1.1 نضغط انتر 
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/4t25r
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action2:
      content.style.display = "block";

      content.innerHTML = `ريست وكونفجريشن  للراوتر
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل 
لو ريست من صفحه الروتر اسمه ريست سوفت ودى الخطوات 
قم بالضغط علي   maintain
ثم اضغط على   system management 
بعدين  device  management
ثم اضغط على > restore 
هيتم كتابه يوز نيم وباسورد الخدمه
home هندخل على 
start wizard بعدين
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه
وبكده الخطوات تكون اتعملت
وده لينك فيه الخطوات يا فندم
https://justpaste.it/5fg53
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action3:
      content.style.display = "block";

      content.innerHTML = `1- حضرتك يافندم عشان تغير اسم الشبكه والباسورد هتفتح صفحه الراوتر عن طريق 192.168.1.1
2- بعدين هتكتب اليوزرنيم والباسورد الموجودين ع ضهر الراوتر
3-بعد كدا هتفتح network..Wlan settings..wlan encryption
4- هتلاقي اسم الشبكه والباسورد هتغيرهم ssid --- wpa pre-shared key
5- لو عاوز تخفي الوايفاي هتلاقي عندك hide broadcast
وجمبها مربع هتدوس عليه هيتعمل علامه صح وبعدين تعمل حفظ يافندم
ولو حضرتك بتتابعنا من تفس الراوتر ممكن الشات يفصل
وده لينك بيوضح خطوات اعدادات الواي فاي  بالتفصيل  https://justpaste.it/75s6m   
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action4:
      content.style.display = "block";

      content.innerHTML = `حضرتك هتفتح اى متصفح وتكتب فى اعلى العنوان 192.168.1.1
هايفتح صفحة الروتر 
هتختار من على الشمال   network
وبعدين تختار منها lan 
وبعدين تختار اول حاجه  dhcp server 
هاتكتب فى اول خانه هاتظهر فى نص الشاشه  dns server 1 ip الارقام 163.121.128.134
هاتكتب فى تانى خانه  dns server 1 ipالارقام 163.121.128.135
save وبعدين تضغط   
بعد ما تسجل البيانات هنحتاج ان حضرتك تعمل ريستارت للراوتر 
ولو حضرتك بتتابعنا من تفس الراوتر ممكن الشات يفصل   
   وده لينك فيه صورة بتوضح الخطوات بالتفصيل
 https://justpaste.it/7vteu
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action5:
      content.style.display = "block";

      content.innerHTML = `Internet هندخل على 
internet setting بعدين 
INTERNET_TR069_R_0_35 بعدين 
edit بعدين 
هنغير كلمه auto الى  manual
Mtu هنكتب عندها1420
ومع كل تغير نضغط كلمه  
apply  عشان يتم الحفظ اوsave 
وده لينك فيه الخطوات بالصور يا فندم 
https://justpaste.it/7jnjw

`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action6:
      content.style.display = "block";

      content.innerHTML = `Home Network ندخل على 
wlan access بعدين 
WLAN Access Rules بعدين 
نختار اسم الشبكة ونعمل  edit 
هيظهر 3 اختيارات يا فندم 
Only allow specific computers in the WLAN
هنختار ده .. وده اللى من خلاله هنختار الاجهزة اللى عاوزبنها تدخل على الراوتر 
Managed LAN devices  هيظهر لحضرتك بعد كده 
ونعلم على الاجهزة اللى عاوزينها تدخل على الراوتر وبعد كده
add device ندوس
Save واخر حاجه ندوس
وده لينك فيه الخطوات بالصور يا فندم 
https://justpaste.it/73o4u
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action7:
      content.style.display = "block";

      content.innerHTML = `"Home network ندخل على 
wlan access بعدبن 
Wlan wps بعدين 
Enable wps هنشيل الصح من عليها 
Wps by push button(pbc) ونختار 
Save وندوس 
وده لينك فيه الخطوات بالصور يا فندم 
https://justpaste.it/75s6m
"
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action8:
      content.style.display = "block";

      content.innerHTML = `"maintain ندخل على 
account management  بعدين 
Modify login password بعدين 
Edit نختار اللى فيها ادمن  
Current password:  نكتب الباسورد القديم
new نكتب الجديد 
confirm  نكتب الجديد كمان مره 
بعدين save 

وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/5s8eh
"

`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action9:
      content.style.display = "block";

      content.innerHTML = `home ندخل 
check my network status بعدين 
more ندوس
Ethernet devices الاجهزة المتصلة بكابل 
Wlan devices الاجهزة المتصلة وايرلس 
الاجهزة اللى باللون الازرق هى اللى شغاله على الراوتر حاليا 
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/8ng5o
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action10:
      content.style.display = "block";

      content.innerHTML = `"home ندخل 
network security بعدين 
Firewall بعدين 
Firewall level  بعدين
Disabled نخليها
Save وندوس
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/4qx6n
"

`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action11:
      content.style.display = "block";

      content.innerHTML = `maintain ندخل على 
system information بعدين 
dsl information بعدين 
upstream line rate دى سرعة الابلود
downstream line rate دى سرعة الداونلود
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/6v9ie
`;
      break;
    case router.innerHTML == "router8" && action.innerHTML == action12:
      content.style.display = "block";

      content.innerHTML = `internet  ندخل على 
internet setting بعدين 
dsl mode setting  بعدين
all نختار 
save وندوس 
وده لينك فيه الخطوات يا فندم بالصور
https://justpaste.it/89y36

`;
      break;
  }

  if (content.style.display == "block") {
    document.querySelector("#copy").style.display = "block";
  } else {
    document.querySelector("#copy").style.display = "none";
  }
});

function fn() {
  // // let copy = document.querySelector("#copy");
  // navigator.clipboard.writeText(content).then(() => {
  // 	// Alert the user that the action took place.
  // 	// Nobody likes hidden stuff being done under the hood!
  // 	alert("Copied to clipboard");
  // });

  // Get the text field

  // Select the text field
  content.select();
  content.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(content.value);
Swal.fire('تم نسخ الكنداية بنجاح')

  // Alert the copied text
  // alert("Copied the text: " + content.value);
}

