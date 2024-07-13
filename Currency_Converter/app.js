
const dropdown_selects=document.querySelectorAll('.dropdown select');

for(let select of dropdown_selects){
    for(country in countryList){//select each country_code in countries.js
        let newOption=document.createElement('option');//creating options(loop) for select
        newOption.innerText=country;
        newOption.value=country;//<option value='country'>country</option> ..like this for every country

        //initially we select us for from and ind for to
        if(select.name==='from' && country==='USD'){
            newOption.selected='selected';//make it selected option
        }
        else if(select.name==='to' && country==='INR'){
            newOption.selected='selected';//make it selected option
        }

        //now append/insert these options inside the select element
        select.append(newOption);
    }

    //if any change is made in selecting options
    select.addEventListener('change',(evt)=>{
        //that changed option is stored in evt.target
        //we'll pass it to updateFlag fun with it as argument
        updateFlag(evt.target);
    })//in loop when we change everytime the flag is updated
}

const updateFlag= (element)=>{
    let country_code=element.value;//we extract country code in countres.js
    //by country code we extract flag code
    let flag_code=countryList[country_code];//for ex: countryList[INR]=IN
    //change flag corresponding to flag_code
    let img_src=`https://flagsapi.com/${flag_code}/shiny/64.png`;

    //now select img elt of .select-container
    //let img_elt=document.querySelector('.select-container img');
    //dont use above method to select img coz there are 2 .select-container elts so it'll select only first one always
    
    //so use element.parentElement which selects the element's parent class
    let img_elt=element.parentElement.querySelector('img');
    
    //add img src to it
    img_elt.src=img_src
}

//swapping when swap image is clicked..
const swap_img=document.querySelector('.dropdown i');
console.log(swap_img);

swap_img.addEventListener('click',(evt)=>{
    const temp=from_select.value;
    from_select.value=to_select.value;
    to_select.value=temp;

    //let's also swap the flag images
    let img1=document.querySelector('.from img');
    let img2=document.querySelector('.to img');
    let temp1=img1.src;
    img1.src=img2.src;
    img2.src=temp1;

})

const btn=document.querySelector('button');
const from_select=document.querySelector('.from select');
const to_select=document.querySelector('.to select');
const msg=document.querySelector('.msg');

//when document reloaded some defaults taken place which are stored in updateexrate
document.addEventListener('load',()=>{
    updateExchangeRate();
})

btn.addEventListener('click',(evt)=>{
    evt.preventDefault();//stops some initial form functions
    updateExchangeRate();
})

const updateExchangeRate = async ()=>{
    let amount=document.querySelector('.amount input');
    let amount_value=amount.value;
    //set amount to 1 if it's left empty or entered negative amount
    if(amount_value==="" || amount_value<1){
        amount_value=1;
        amount.value="1";
    }

//using link 'https://api.frankfurter.app/latest?amount=1&from=USD&to=INR'
//but only the below codes are available in above link
// "AUD" ,"BGN" ,"BRL" ,"CAD" ,"CHF" ,"CNY" ,"CZK" ,"DKK" ,"GBP" ,"HKD" ,"HUF" ,"IDR" ,"ILS" ,"INR" ,"ISK" ,"JPY" ,
//"KRW"  ,"MXN"  ,"MYR" ,"NOK" ,"NZD" ,"PHP" ,"PLN" ,"RON" ,"SEK"  ,"SGD" ,"THB" ,"TRY" ,"USD" ,"ZAR"
//example to convert from usd to inr with amount value of 1

const conv_url=`https://api.frankfurter.app/latest?amount=${amount_value}&from=${from_select.value}&to=${to_select.value}`;
//console.log(conv_url);//just for reference
//to fetch details from above url we use fetch()
let response=await fetch(conv_url);
//console.log(response);
let data=await response.json();//response in json format
console.log(data);//for example
//data={
//     "amount": 1,
//     "base": "USD",
//     "date": "2024-07-12",
//     "rates": {
//       "INR": 83.53
//     }
//   }

let conv_rate=data.rates[to_select.value];
//console.log(conv_rate);
//now update the message's innertext
msg.innerText=`${amount_value} ${from_select.value} = ${conv_rate} ${to_select.value}`;
}

btn.addEventListener('mouseover',()=>{
    btn.style.color='yellow'
    //return to same color after 0.5 seconds
    setTimeout(()=>{
        btn.style.color='';
    },500)
})