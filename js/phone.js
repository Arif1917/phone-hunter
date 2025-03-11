const loadPhone = async (inputText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones)
}

const displayPhones = phones => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  // const showAllContainer = document.getElementById('show-all-container');
  // if (phones.length > 12) {
  //   showAllContainer.classList.remove('hidden')
  // }
  // else {
  //   showAllContainer.classList.add('hidden')
  // }
  // phones = phones.slice(0, 12);
  console.log(phones)
  phones.forEach(phone => {
    console.log(phone)
    const phoneCard = document.createElement('div');
    phoneCard.classList = ('card bg-gray-100 p-3 shadow-sm')
    phoneCard.innerHTML = `
    <figure>
                  <img
                    src="${phone.image}" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Name: ${phone.phone_name}</h2>
                  <p>${phone.slug}</p>
                  <p>Brand: ${phone.brand}</p>
                  <div class="card-actions mt-5 justify-center w-full">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary ">Buy Now</button>
                  </div>
                </div>
    `;
    phoneContainer.appendChild(phoneCard)
  });
  toggleHandleButton(false)

}

const handleShowDetails = async (id)=>{
  console.log('click',id)
  // single data loaded  
 const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
 const data = await res.json();
 const phone = data.data;
//  console.log(phone)
 showPhoneDetails(phone)
}

const showPhoneDetails= (phone)=>{
  console.log(phone)
  const showPhoneDetails =document.getElementById('show-phone-details-name');
  showPhoneDetails.innerText=phone.name;
  const phoneDetailsContainer = document.getElementById('phone-details-container');
  phoneDetailsContainer.innerHTML=`
  <img src="${phone.image}" alt="">
  <p>${phone.brand}</p>
  <p>Storage:${phone.mainFeatures.storage}</p>
  <p>DisplaySize:${phone.mainFeatures.displaySize}</p>
  <p>ReleaisingDate:${phone.releaseDate
    }</p>
  
  `
  my_modal_5.showModal(phone)
}

const handleButton = () => {
  toggleHandleButton(true)
  const inputField = document.getElementById('input-field');
  const inputText = inputField.value;
  inputField.value = ' ';
  // console.log(inputText)
  loadPhone(inputText);
}

const toggleHandleButton = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (isLoading) {
    loadingSpinner.classList.remove('hidden')
  }
  else {
    loadingSpinner.classList.add('hidden')
  }

}
// loadPhone()