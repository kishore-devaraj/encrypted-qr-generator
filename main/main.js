function make() {
    var template = document.getElementById("template").value;
    faker.locale = document.getElementById("locales").value;
    var secret = document.getElementById("secret").value;


    var input = faker.fake(template);
    var encryptedInput = encrypt(input, secret);
    document.getElementById("result").innerHTML = input;

    qr.value = encryptedInput;
}

function makeDefault() {
    var profile = faker.fake("v1|{{random.number}}|{{name.firstName}}|{{name.lastName}}|{{company.companyName}}|{{name.jobTitle}}|{{internet.email}}|{{phone.phoneNumber}}|{{address.country}}");
    // var secret = generatePassphrase();
    var secret = 'VGdmUWVzdHZBekt3c3pUeQ==';
    console.log("hi", secret)
    document.getElementById("secret").value = secret;

    document.getElementById("result").innerHTML = profile;

    var encryptedProfile = encrypt(profile, secret);

    qr.value = encryptedProfile;
}

var qr = new QRious({
    element: document.getElementById('qr'),
    size: 200
});
