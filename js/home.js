const donateFlood = document.getElementById('donate-flood').addEventListener('click', function(event){
    event.preventDefault();
    const donateFloodInput =  getInputFieldValueById("donate-flood-input");
    const floodDonation = getTextValueById('donation-value'); 
    const storageValue = getTextValueById('storage-value');

    // console.log(donateFloodInput,floodDonation);

    if(donateFloodInput <= 0 || isNaN(donateFloodInput)){
        alert('please give use money from your kindness');
        return;
    }

    const totalFloodDonation = donateFloodInput + floodDonation;

    if(donateFloodInput>storageValue){
        alert('Sorry, forgive us. We do not have enough money for donation');
        return;
    }
    const storageDonateValue = storageValue - donateFloodInput;

    document.getElementById('donation-value').innerText = totalFloodDonation;
    document.getElementById('storage-value').innerText = storageDonateValue;

    document.getElementById("donate-flood-input").value = "";

});

const feniFloodDonate = document.getElementById('feni-flood-donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    const feniFloodDonateInput = getInputFieldValueById("feni-donate-flood-input");
    const feniFloodDonation = getTextValueById("feni-donation-value");
    const storageValue = getTextValueById('storage-value');

    // console.log(feniFloodDonateInput, feniFloodDonation, storageValue);

    if(feniFloodDonateInput <= 0 || isNaN(feniFloodDonateInput)){
        alert('please give use money from your kindness');
        return;
    }

    const totalFeniFloodDonation = feniFloodDonateInput + feniFloodDonation;

    if(feniFloodDonateInput>storageValue){
        alert('Sorry, forgive us. We do not have enough money for donation');
        return;
    }

    const storageDonateValue = storageValue - feniFloodDonateInput;

    document.getElementById('feni-donation-value').innerText = totalFeniFloodDonation;
    document.getElementById('storage-value').innerText = storageDonateValue;

    document.getElementById("feni-donate-flood-input").value = "";

});

const quotaDonation = document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const quotaDonateInput = getInputFieldValueById('quota-donate-input');
    const quotaDonation = getTextValueById('quota-donation');
    const storageValue = getTextValueById('storage-value');

    // console.log(quotaDonateInput,quotaDonation,storageValue);

    if(quotaDonateInput <= 0 || isNaN(quotaDonateInput)){
        alert('please give use money from your kindness');
        return;
    }

    const totalQuotaDonation = quotaDonateInput + quotaDonation;

    if(quotaDonateInput>storageValue){
        alert('Sorry, forgive us. We do not have enough money for donation');
        return;
    }

    const storageDonateValue = storageValue - quotaDonateInput;

    document.getElementById('quota-donation').innerText = totalQuotaDonation;
    document.getElementById('storage-value').innerText = storageDonateValue;

    document.getElementById("quota-donate-input").value = "";
});