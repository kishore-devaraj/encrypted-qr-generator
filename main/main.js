function make() {
    var template = document.getElementById("template").value;
  console.log(template)
    faker.locale = document.getElementById("locales").value;
    var secret = document.getElementById("secret").value;
    var qrValue;
    
    var input = faker.fake(template);
  console.log("input", input)
    if(secret.trim() !== ''){
        qrValue = encrypt(input, secret);
    } else {
        qrValue = input;
    }
    document.getElementById("result").innerHTML = input;
    document.getElementById("encrypted-result").innerHTML = qrValue;

    qr.value = qrValue;
}


function generateKey() {
  var secretKey = generatePassphrase();
  document.getElementById("secret").value = secretKey;

}

function makeDefault() {
    var profile = faker.fake("v1|{{random.number}}|{{name.firstName}}|{{name.lastName}}|{{company.companyName}}|{{name.jobTitle}}|{{internet.email}}|{{phone.phoneNumber}}|{{address.country}}");
    // var secret = generatePassphrase();


  var urlParams = new URLSearchParams(window.location.search);
  var myParam = urlParams.get('secret');
    var secret = myParam || 'YTVxZkhrbUdoaXp6dlJncw==';
    document.getElementById("secret").value = secret;

    document.getElementById("result").innerHTML = profile;

    var encryptedProfile = encrypt(profile, secret);

    document.getElementById("encrypted-result").innerHTML = encryptedProfile;
    qr.value = encryptedProfile;
}

var qr = new QRious({
    element: document.getElementById('qr'),
    size: 200
});
