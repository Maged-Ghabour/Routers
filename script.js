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
	return document.querySelector("#city").innerHTML = city;
}




function getContent(city) {
	return document.querySelector("#city").innerHTML = city;
}





document.addEventListener("change", () => {
	// 	if (country.innerHTML == "zyxel" && city.innerHTML == "How to access to cpe page") {
	// 		console.log(`كيفيه الدخول لصفحه الروتر 
	// نكتب فى محرك البحث 192.168.1.1 نضغط انتر  
	// او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
	// اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
	// او  user # admin  
	// password # الموجود فى ضهر الراوتر 
	// # يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
	//  وده لينك يا فندم فيه الخطوات 
	// https://justpaste.it/8r069`);
	// 	}


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


	let router1 = "zyxel"
	let router2 = "DN(8245V-56)"
	let router3 = "H188A(zte)"
	let router4 = "TP-Link VN020-F3"
	let router5 = "hg 531 - 532"
	let router6 = "zte108n"
	let router7 = "hg 630 - 633 - dg8045"


	let router = document.querySelector("#router");
	let action = document.querySelector("#city");
	let content = document.querySelector("#content");






	switch (true) {
		case (router.innerHTML == "" || action.innerHTML == ""):
			content.style.display = "none";
			break;
		// zyxel	
		case (router.innerHTML == router1 && action.innerHTML == action1):
			content.style.display = "block";
			content.innerHTML = `كيفيه الدخول لصفحه الروتر 
نكتب فى محرك البحث 192.168.1.1 نضغط انتر  
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح  
 وده لينك يا فندم فيه الخطوات 
https://justpaste.it/8r069
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = `ريست وكونفجريشن  للراوتر 
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل الاعدادات 
او عمل ريست من صفحه الروتر
 بعد بيتم عمل الاعدادات # 
# هيتم الضغط على كلمه  let's go 
هيتم كتابه يوز نيم وباسورد الخدمه
 بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه
 وبعدين دوس next
 # wifi name ده اسم الشبكه
#password     ده باسورد شبكه الواى فاى  ويفضل يكون من حروف وارقام ورموز  بحيث يكون قوى ويصعب اختراقه ولايقل 8 حروف  وارقام 
# هيتم وضع علامه صح على الاخيتار الاخيار الخاص بالشبكات
# هيتم الضغط على كلمه done 
وبكده الروتر اتفعل وده لينك فيه الخطوات بالصور يا فندم  https://justpaste.it/8x5ux
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = `"# فى صفحة الراوتر فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت
# هنحتار network setting  # wireless
# كيفيه تفعيل  الواى  فاى على
 2.4 g  or 5g
لو عايز تفعل الاتنين مع بعض فكده هتحط علامه صح على 
keep the same for 2.4g and 5g 
# اما لو عايز تفعل شبكه واحده فقط  هشتيل علامه الصح من على 
keep the same for 2.4g and 5g 
# وهتيجى عند كلمه band
وتختار سواء
2.4g or 5g
# max clients ده  اقصى عدد لاجهزه المسموح الاتصال بيها
# hide ssid عند وضع علامه صح  هيتم اخفاء شبكه الواى فاى
#### wireless network name  ده اسم شبكه الواى فاى
# لو تم وضع علامه صح على كلمه
generate password  automatically فكده الباسود هيكون هوالافتراضى اللى موجود على ضهر الروتر
 #### اما فى حاله الرغبه فى تغير الباسورد الخاص بالواى هيتم ازاله العلامه من  ###
generate password  automatically
وبعد كده نكتب  الباسور وحفظ
وده لينك فيه الخطوات بالصور https://justpaste.it/7rzbg"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = `"
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
"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = `"
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
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = `"فى صفحة الراوتر فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت
هنختار security بعدها  mac filter بعدها  add new rule
ونكتب الاجهزة اللى احنا عاوزين نسمحلها بالدخول للراوتر  وبعدين  apply واللينك ده يا فندم فيه صورة توضيحية https://justpaste.it/mac-zyxel

"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = `"# كيفيه اغلاق wps
هنختار wps
هيتم الضعط على الزر اللى  موجود عند wps ده وبعد كده حفظ
وده لينك فيه الخطوات بالصور https://justpaste.it/7rzbg

"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = `"# فى صفحة الراوتر  فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت بعدين هنختار  maintenance بعدها  user account  وتعلم على علامة القلم ونكتب الباسورد الجديد وندوس  apply

"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = `"home page من هنختار  connectivity هيظهر لينا الاجهزة اللى موجودة على الراوتر  ومن علامة القلم لو ضغطنا عليها نقدر نعمل حظر للجهاز

"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = `"# فى صفحة الراوتر  فى 3 شرط تحت بعض اللى بنقدر نجيب منهم الاختيارت بعدين هنختار  network setting بعدها  security
بعدها  firewall ونعلم صح على الاتنين  ip وندوس  apply

"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = `"Home page هنختار 
		system info وبعدين vdsl wan عند RX دى سرعة الداونلود
TX دى سرعة الابلود
"
`
			break;
		case (router.innerHTML == router1 && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = ""
			break;

		//  DN(8245V-56)

		case (router.innerHTML == router1 && action.innerHTML == action1):
			content.innerHTML = `كيفيه الدخول لصفحه الروتر 
نكتب فى محرك البحث 192.168.1.1 نضغط انتر  
او فى البحث الخاص بالموبايل فى المتصفح  نكتب 192.168.1.1 
اليوز نيم وباسورد الدخول بيكون  فى الغالب   user # admin   password # admin 
او  user # admin  
password # الموجود فى ضهر الراوتر 
# يجب مراعاه الحروف لو كابيتل او صمول يعنى كبيره او صغيره لانو لو عكسنا بيفرق  ومش بيفتح   
 وده لينك يا فندم فيه الخطوات  
https://justpaste.it/8r069

`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = `ريست وكونفجريشن  للراوتر 
هناك ريست يسمى هارد يعنى بيكون بدبوس فى فتحه فى ضهر الراوتر  بنضغط عليها بدبوس  لحد لما كل اللمبات تفصل ماعدا الباور وبعد كده نعمل الاعدادات
او عمل ريست من صفحه الروتر 
بعد بيتم عمل الاعدادات # 
هيتم كتابه يوز نيم وباسورد الخدمه 
بنكتب   يوز نيم وباسورد الاعدادات   اللى بيوصلك من الشركه  بعد كده من  wifi configuration ده يا فندم اعدادات الشبكة  2.4 G 5G حضرتك بتعلم صح على الشبكة اللى محتاجها .. او ممكن الاتنين ويتم تغير اسم الشبكة والباسورد وده لينك بيوضح لحضرتك الخطوات بالصور https://justpaste.it/97vnx
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action3):
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
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = `
			"Advanced >هنختار
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

"

			`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = `
			"هنفتح صفحة الراوتر عن طريق كتابة  192.168.1.1 فى شريط العنوان فى اى متصفح 
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

"
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = `
			"Advanced هنختار
 Security > ثم
Wi-Fi MAC Filtering ثم
blacklist ديه عشان يتم حظر الاجهزه من عدم الدخول للروتر
whitelist  ديه عشان يتم اضافه الاجهزه المراد دخولها على الروتر فقط  حضرتك هتختار سواء حظر اجهزة او اضفة اجزة زى ماتحب يا فندم  وبعدين ندوس على  new ونكتب الاجهزة وندوس  apply وده لينك فيه الخطوات يا فندم  https://justpaste.it/1wgjn
"

			`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = `
			" 
# كيفيه اغلاق wps
من علامة الترس هنختار  wlan ونختار الشبكة سواء 2.4G او 5G خيبقى موجود تحت enable wps هنشيل العلامة من عليها وندوس apply وده لينك يا فندم فيه الخطوات بالصور https://justpaste.it/473m2

"
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = `
			"Advanced > هنختار
System Management >وبعدين
 Account Management وبعدين change password وبعدين ونكتب الباسورد القديم وبعد كده الجديد مرتين apply وندوس وده لينك فيه الخطوات بالصور يا فندم  https://justpaste.it/61dp3

"
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = `
			"""Home page"" من 
Wired Devices
ده الاجهزه المتصله كابل
 
wi-fi devices
 
ده الاجهزه المتصله واى فاى وده لينك فيه الخطوات يا فندم بالصور  https://justpaste.it/98cj5

"
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = `
			"Advanced > هنختار
 Security > وبعدين
Firewall Level وبعدين  وبعد كده نعمل  disabled وندوس   apply وده لينك فيه الخطوات يا فندم بالصور https://justpaste.it/6q4fm

"
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = `
			"System Information> هنختار
DSL>وبعدين
Upstream دى سرعة الابلود downstream دى سرعة الداونلود

"
`
			break;
		case (router.innerHTML == router2 && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = `
			"System Information ->هنختار
 DSL ->وبعدين
 DSL Mode وبعدين  standard وبعدين all نختار submit وندوس

"
`
			break;

		// H188A(zte)


		case (router.innerHTML == router3 && action.innerHTML == action1):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router3 && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;


		// TP-Link VN020-F3


		case (router.innerHTML == router4 && action.innerHTML == action1):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router4 && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;



		// hg 531 - 532


		case (router.innerHTML == router5 && action.innerHTML == action1):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router5 && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;



		//zte108n 


		case (router.innerHTML == router6 && action.innerHTML == action1):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case
			(router.innerHTML == router6 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action11):
			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router6 && action.innerHTML == action12):
			content.innerHTML = "Maged Ghabour"
			break;



		// zte 168


		case (router.innerHTML == router7 && action.innerHTML == action1):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == router7 && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;



		// hg 630 - 633 - dg8045


		case (router.innerHTML == "router8" && action.innerHTML == action1):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action2):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action3):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action4):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action5):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action6):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action7):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action8):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action9):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action10):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action11):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;
		case (router.innerHTML == "router8" && action.innerHTML == action12):
			content.style.display = "block";

			content.innerHTML = "Maged Ghabour"
			break;





	}


	if (content.style.display == "block") {
		document.querySelector(".copy").style.display = "block"
	} else {
		document.querySelector(".copy").style.display = "none"
	}



});




