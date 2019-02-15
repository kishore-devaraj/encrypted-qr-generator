function make() {
    var template = document.getElementById("template").value;
    faker.locale = document.getElementById("locales").value;
    var secret = document.getElementById("secret").value;


    var input = faker.fake(template);
    var encryptedInput = encrypt(input, secret);
    document.getElementById("result").innerHTML = input;

    qr.value = encryptedInput;
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

    var secret = myParam || 'VGdmUWVzdHZBekt3c3pUeQ==';
    document.getElementById("secret").value = secret;

    document.getElementById("result").innerHTML = profile;

    var encryptedProfile = encrypt(profile, secret);

    qr.value = encryptedProfile;
}

var qr = new QRious({
    element: document.getElementById('qr'),
    size: 200
});
