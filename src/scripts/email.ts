// import { toggleModalEmailShow, toggleModalThanksShow } from '@/src/store/AppSlice';
import {toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction} from "@/src/store/actions/app";


export function sendEmail(email: string, dispatch: any){
   console.log("EMAIL ",email);

//    const url = "https://matomo.dequity.io/php-scripts/index.php?email="+email;
//    fetch(url, {
//     method: 'GET',
//     headers: new Headers(),
//     mode: 'no-cors'
//     })
//     .then(res => { console.log("Email отправлен!"); })
//     .catch(e => { console.log("Ошибка отправки"); });

    fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({email: email}),
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
    }).then((res)=>{
        
        if(res.status == 400 ) {
            console.log("Ошибка отправки",res);
        } else if (res.status == 200) {
            console.log("Email отправлен!",res);

            let emailJSON = {
                Email: email
            }

            const token : string = "fc54bc5b955666bf406b8804c1aaaaf679162af750bd733909a846c988a38da12272eb9d22947809f4549c1f7d4a9a5f0b251e83f673a7ef250b58db51e3df4adf42c77521aaeca4a16d49e6f23ab3fb9877ca8525811372c9ed884e67abc13827aafd3858274ed00f8d534da67d43171d730faf011295459673d0f4455634e5";

            const options = {
            method: 'POST',
            // mode: "cors",
            headers: { "Content-Type": "application/json" ,"Authorization" : "Token " + token },
            // headers: {
            //     'Authorization': `bearer ${token}`, // notice the Bearer before your token
            //     },
            body: JSON.stringify({data : emailJSON})
            };

            fetch("https://webmaster.dequity.io/api/emails", options).then((res)=>{
                console.log(res);
                
            }).catch((err)=>{
                console.log(err);
                
            })

        } else {
            console.log(res);
        }
    }).catch((err)=>{
        console.log("Ошибка отправки",err);
    });

    dispatch(toggleModalEmailShowAction());
    dispatch(toggleModalThanksShowAction());

    // document.getElementById("form-id").submit();
}


// function getEmails(){
//     const emails = document.getElementById("emails")

//     // fetch('http://178.170.47.43:8033/php-scripts/index.php?password=klaksd')
//     // .then(res => console.log(res.body))
//     // .catch(e => {alert("Неверный пароль!")});


//     fetch("https://dequity.io/php-scripts/index.php?password=hfhng").then(function (response) {
//         // The API call was successful!
//         return response.text();
//     }).then(function (html) {
//         // This is the HTML from our response as a text string
//         console.log(html);
//         emails.innerHTML = html;
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });

//     // const emails_array = ["test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com","test@testemail.com"];

//     // let html = "<table><tr><th>Emails:</th></tr>";

//     // emails_array.forEach(element => {
//     //     html+= "<tr><td>"+element+"</td></tr>"
//     // });
//     // html += "</table>"


// }
