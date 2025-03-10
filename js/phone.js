const loadPhone = async (inputText)=>{
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
const data = await res.json();
const phones = data.data;
displayPhones(phones)
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length>12){
      showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    phones = phones.slice(0,12);
    console.log(phones)
    phones.forEach(phone => {
        console.log(phone)
    const phoneCard = document.createElement('div');
    phoneCard.classList=('card bg-gray-100 p-3 shadow-sm')
    phoneCard.innerHTML=`
    <figure>
                  <img
                    src="${phone.image}" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Name: ${phone.phone_name}</h2>
                  <p>${phone.slug}</p>
                  <p>Brand: ${phone.brand}</p>
                  <div class="card-actions mt-5 justify-center w-full">
                    <button class="btn btn-primary ">Buy Now</button>
                  </div>
                </div>
    `;
    phoneContainer.appendChild(phoneCard)
    });
    
}

const handleButton =()=>{
 const inputField = document.getElementById('input-field');
 const inputText = inputField.value;
//  inputField.value =' ';
 console.log(inputText)
 loadPhone(inputText);
}
// loadPhone()