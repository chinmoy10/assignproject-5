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

    const div = document.createElement('div');
        div.classList.add("border-2", "p-5", 'rounded-2xl', 'space-y-1');
        div.innerHTML = `
            <p class="text-neutral-950 text-xl font-bold">${donateFloodInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>

            <p class="text-base text-neutral-500">Date: ${new Date().toString()}</p>
        `

        document.getElementById("history-list").appendChild(div);

    const modal = document.getElementById('my_modal_1');
    modal.showModal();

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

    const div = document.createElement('div');
        div.classList.add("border-2", "p-5", 'rounded-2xl', 'space-y-1');
        div.innerHTML = `
            <p class="text-neutral-950 text-xl font-bold">${feniFloodDonateInput} Taka is Donated for Flood Relief in Feni,Bangladesh</p>

            <p class="text-base text-neutral-500">Date: ${new Date().toString()}</p>
        `

        document.getElementById("history-list").appendChild(div);
    
    const modal = document.getElementById('my_modal_1');
    modal.showModal();

});

const quotaDonation = document.getElementById('quota-donate-btn');
quotaDonation.addEventListener('click', function(event){
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

    const div = document.createElement('div');
        div.classList.add("border-2", "p-5", 'rounded-2xl', 'space-y-1');
        div.innerHTML = `
            <p class="text-neutral-950 text-xl font-bold">${quotaDonateInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>

            <p class="text-base text-neutral-500">Date: ${new Date().toString()}</p>
        `

        document.getElementById("history-list").appendChild(div);

    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});

// toggle btn section

const donationBtn = document.getElementById('donation-btn');
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add('bg-[#B4F461]', 'text-neutral-950', 'hover:bg-[#B4F461]', 'hover:text-neutral-950');
    donationBtn.classList.remove('bg-transparent', 'border-2', 'border-neutral-300', 'hover:bg-transparent');
    document.getElementById('donation-part').classList.remove('hidden');
    document.getElementById('history-part').classList.add('hidden');

    historyBtn.classList.add('bg-transparent', 'border-2', 'border-neutral-300', 'hover:bg-transparent');
    historyBtn.classList.remove('bg-[#B4F461]', 'text-neutral-950', 'hover:bg-[#B4F461]', 'hover:text-neutral-950');
})



const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function(){
    historyBtn.classList.add('bg-[#B4F461]', 'text-neutral-950', 'hover:bg-[#B4F461]', 'hover:text-neutral-950');
    historyBtn.classList.remove('bg-transparent', 'border-2', 'border-neutral-300', 'hover:bg-transparent');
    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.remove('hidden');

    donationBtn.classList.add('bg-transparent', 'border-2', 'border-neutral-300', 'hover:bg-transparent');
    donationBtn.classList.remove('bg-[#B4F461]', 'text-neutral-950', 'hover:bg-[#B4F461]', 'hover:text-neutral-950');
});

const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', function(){
    window.location.href = '/blogs.html';
});