
const buttons = document.querySelectorAll('.shop .shop__list button') 
const payment = document.querySelector('.payment') 
const iframe = document.querySelector('iframe') 
let total = 0

// const checkout = new window.YooMoneyCheckoutWidget({
//     confirmation_token: '480065', //Токен, который перед проведением оплаты нужно получить от ЮKassa
//     return_url: 'https://example.com', //Ссылка на страницу завершения оплаты
//     error_callback: function(error) {
//         //Обработка ошибок инициализации
//     }
// });

buttons.forEach(button => {
    button.addEventListener('click', () => {
       

        const priceElement = button.nextElementSibling; // если span находится прямо перед кнопкой
        const price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, '')); // убираем все символы кроме цифр и точки
        total += price;

        payment.innerHTML = total + '₽';
        

        // alert(`Thank you for your purchase! Your total cost is RUB.`)
    })
})

payment.addEventListener('click', async () => {
   
    
    try{
        const response = await axios.post('https://9735-87-228-33-186.ngrok-free.app',{
            amount:total,
    })
    const checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token: response.data.confirmation.confirmation_token, //Токен, который перед проведением оплаты нужно получить от ЮKassa
        return_url: "http://localhost:8080/" , //Ссылка на страницу завершения оплаты
        error_callback: function(error) {
            //Обработка ошибок инициализации
        }
    });
    console.log('weewer');
    checkout.render('payment-form')
        .then(() => {
        });
    //window.location.href = response.data.confirmation.confirmation_url
    //iframe.src = response.data.confirmation.confirmation_url
    //Telegram.WebApp.openLink("https://yoomoney.ru/checkout/payments/v2/contract/bankcard?orderId=2eb4b246-000f-5000-b000-131d4f7a225a");
        //window.location.href = response.data.confirmation.confirmation_url 
        
        
     } catch(e) {
    //     console.error('Error:', e);
    //     alert('Payment failed');
    }
})
