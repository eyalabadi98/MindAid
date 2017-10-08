//import firebase from 'firebase';
import {
    GAMES_FETCHED_SUCCESS,
    ADD_GAME_FORM,
    GAMES_SEARCH_UPDATE,
    EMAIL_SUCCESS_FETCH,
    EMAIL_SEND_SUCCESS,
    GAMES_INFO_UPDATE,
    GAME_SUBMIT_FORM,
    ADMIN_GAMES_INFO_UPDATE,
    ADMIN_GAME_SUBMIT_FORM,
    RESET_REDUX_GAMES,
    ADMIN_RESET_REDUX_GAMES,
    SUBMIT_GAME_FORM,
    RESET_SAVED,
    API_EMAIL_SUCCESS


} from './types';


let currentDate = new Date();
currentDate = currentDate.toString();

export type GamesSearchAction = {
  type: "GAMES_SEARCH_UPDATE",
  field: any,
  value: any
};

//Update every time a character in put in whenever a rider searches on the slide up
export const gamesSearchForm = (field, value): GamesSearchAction => {
  return {
    type: GAMES_SEARCH_UPDATE,
    field,
    value
  };
};

export const gamesInfoFormInput = (field, value): GamesSearchAction => {
  return {
    type: GAMES_INFO_UPDATE,
    field,
    value
  };
};

export const deleteReduxProfile = (): GamesSearchAction => {
    return {
    type: RESET_REDUX_GAMES
    };
}


export const deleteSaved = (): GamesSearchAction => {
    return {
    type: RESET_SAVED
    };
}

export const adminDeleteReduxProfile = (): GamesSearchAction => {
    return {
    type: ADMIN_RESET_REDUX_GAMES
    
    };
}

export const searchEmail = ({
    Sport
 }) => {
    const API_EMAIL_SEARCH = `http://api.maccabigamesjcc.me:3000/tasks/${Sport}`;
    console.log('Requesting URl', API_EMAIL_SEARCH);
    return (dispatch) => {

    fetch(API_EMAIL_SEARCH)
    .then((res) => res.json())
    .then((json) => {
        console.log('Looking for email address', json);
        dispatch({ type: API_EMAIL_SUCCESS, payload: json });
    
        });
    }

};

export const submitGameForm = ({ 
    Key,
    team1Score,
    team1Signature,
    team2Score,
    team2Signature,
    gameDetails,
    emailUser
}) => {
    return (dispatch) => {
        var date = new Date();
        date = date.toString();
        console.log('Key', Key);
        console.log('Team1score', team1Score);
        console.log('team1sig', team1Signature);
        console.log('team2score', team2Score);
        console.log('team2sig', team2Signature);
        console.log('CUrrent date', date);
        firebase.database().ref(`/${Key}`)
            .update({ 
                team1Score: team1Score,
                team1Signature: team1Signature,
                team2Score: team2Score,
                team2Signature: team2Signature,
                gameDetails: gameDetails,
                Updatable: false,
                emailUser: emailUser,
                dateChanged: currentDate,
            
             })
            .then(() => {
                    dispatch({ type: GAME_SUBMIT_FORM })
            })
            .then(() => console.log('info sent'));
        //Actions.employeeList({ type: 'reset' });

        
      };
};

export const gamesFetch = ( key, value ) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
         firebase.database().ref('/')
         .orderByChild(key)
         .equalTo(value)
         .on('value', snapshot => {
            console.log('printg',snapshot.val());
            dispatch({ type: GAMES_FETCHED_SUCCESS, payload: snapshot.val()})
        });
            //         console.log('action called', console.log('return', snapshot.val()));
            // dispatch({ type: GAMES_FETCHED_SUCCESS, payload: snapshot.val()})
         
        //.ref('/')
        // .on('value', snapshot => {
        //     console.log('action called');
            //dispatch({ type: GAMES_FETCHED_SUCCESS, payload: snapshot.val() })
            
        // });

    
        }
    };

const API_USER_ID = '928e6297029f9ceaad34063d0485df64';
const API_SECRET = 'b0b4db627d78cf5cf2a13ea367d88cac';
const TOKEN_STORAGE = 'client_credentials';
export const emailFetch = () => {
    
 
        fetch('https://api.sendpulse.com/oauth/access_token', {  
            method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
            body: JSON.stringify({
                client_id: API_USER_ID,
                client_secret: API_SECRET,
                grant_type: TOKEN_STORAGE
            })})
            .then((response) => response.json())
            .then((responseData) => {
                console.log('back message', responseData);
    
        })
       
};

export const createList = () => {
    return (dispatch) => {
 
        fetch('https://api.sendpulse.com/addressbooks', {  
            method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
            body: JSON.stringify({
                
            })})
            .then((response) => response.json())
            .then((responseData) => {
                console.log('back message', responseData);
                dispatch({ type: EMAIL_SUCCESS_FETCH, payload: responseData })
    
        })
    };
};
const sendUrl = 'https://api.mailgun.net/v3/mail.maccabigamesjcc.me/messages';
const url = 'https://api:key-3ce1e8379961a1fd94132274d88ac32a@api.mailgun.net/v3/mail.maccabigamesjcc.me/messages'
const authKey = 'api:key-3ce1e8379961a1fd94132274d88ac32a';
const authKeyNoAPI = 'key-3ce1e8379961a1fd94132274d88ac32a';
// const emailBody = { 
//             "from": "Mailgun Sandbox <postmaster@sandboxdfdd918cd2724b698b5408cda0ace5a0.mailgun.org>",
//             "to": "Eyal <eyalabadi98@hotmail.com>",
//             "subject": "Hello Eyal",
//             "text": "Congratulations Eyal, you just sent an email with Mailgun!  You are truly awesome!"
//         }

const formEmail = new FormData();




export const sendEmail = ({ Location, Time, Date, Sport, Participant_1, Participant_2, Sports, team1Score, team2Score, team1Signature, team2Signature, Key, Email }) => {

const emailHTML = `
<html>
    <head>
        <title>Maccabi Games Score</title>
    </head>
    <body>
        <table>
            <tr>
                <td>
                    Dear Coach, A Site director has submitted a new Score!
                    
                    Here is the Game information:
                    <ul>
                    <li>Key: ${Key} </li>
                    <li>Time: ${Time} </li>
                    <li>Date: ${Date} </li>
                    <li>Sport Played: ${Sport} </li>
                    <li>Location: ${Location} </li>
                    <li>Score ${Participant_1}: ${team1Score}</li>
                    <li>Score ${Participant_2}: ${team2Score}</li>
                
                    <img alt="Embedded" src=${team1Signature}/>
                    <img alt="Embedded" src=${team2Signature}/>
                    </ul>
                    <p style="color:red;" > You have 24 Hours to submit a score change/fix! email marlenyr@marjcc.com or reply to this email </p>

                </td>
            </tr>
        </table>
    </body>
</html>`;

formEmail.append("from", 'Maccabi Games <postmaster@mail.maccabigamesjcc.me>');
//formEmail.append("to", `${Email}`);
formEmail.append("subject", 'Maccabi Games Score Update');
formEmail.append("html", emailHTML);
console.log('Form Email'. formEmail);

console.log('Email to be sent: ', emailHTML);
    console.log('clicked send', Email);
    return (dispatch) => {
        fetch(url, {  
            method: 'POST',
        headers: {
                'cache-control': 'no-cache',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
            },
            body: formEmail
            })
            .then((response) => console.log('Back from email', response.text())); 
    }
};

export const SendMessage = ({
    message,
    numbers
}) => {
    const formData = new FormData();
    formData.append("numbers", numbers);
    formData.append("message", message);
    console.log("FormData for SMS is ", formData)
    const smsAPI = "http://api.maccabigamesjcc.me:3000/tasks/sms";
    return (dispatch) => {

        fetch(smsAPI, {  
            method: 'POST',
        headers: {
                //'cache-control': 'no-cache',
                //"content-type": "application/x-www-form-urlencoded", 
            },
            body: formData
            })
            .then((response) => console.log('Back from Text', response.text())); 

    }

}


const formSMS = new FormData();

const urlTwillio = 'https://api.twilio.com/2010-04-01/Accounts/AC3459a146c00f41ac40a08bd92fce090c/Messages.json';
export const sendSMS = () => {

//formSMS.append('To', '+13057676640');
formSMS.append('To', '+13057676640');
formSMS.append('From', '+14159681193');
formSMS.append('Body', 'MG Game Change Notice! Your Child C Soccer Game, ID: 45  has been rescheduled to 8:00PM in JCC Back Field 1, Col 1 - Arg 2 ');

    console.log('clicked send');
    return (dispatch) => {
        fetch(urlTwillio, {  
            method: 'POST',

        headers: {
                'cache-control': 'no-cache',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                Authorization: 'Basic QUMzNDU5YTE0NmMwMGY0MWFjNDBhMDhiZDkyZmNlMDkwYzo4MDc1YmY1OTczNGM3YmE0YTJkMjE3NGZiM2EwNTkyMg=='
            },
            body: formSMS
            })
            .then((response) => console.log(response.json())); 
    }
};


export const AdminsubmitGameForm = ({ 
    Key,
    team1Score,
    team2Score,
    Location,
    Time,
    Date,
    adminEmail
}) => {
    return (dispatch) => {
        
        
        console.log('Key', Key);
        console.log('Team1score', team1Score);
        console.log('team2score', team2Score);
        if (team1Score == undefined) {
            firebase.database().ref(`/${Key}`)
            .update({ 
                Location,
                Time,
                Date,
                adminEmail,
                adminDateUpdate: currentDate,
            
             })
            .then(() => {
                    dispatch({ type: ADMIN_GAME_SUBMIT_FORM })
            })
            .then(() => console.log('info sent, no score sent'));
        } else {
            firebase.database().ref(`/${Key}`)
            .update({ 
                team1Score,
                team2Score,
                Location,
                Time,
                Date,
                adminDateUpdate: currentDate,
            
             })
            .then(() => {
                    dispatch({ type: ADMIN_GAME_SUBMIT_FORM })
            })
            .then(() => console.log('info sent, yes score sent'));
        }
        
            
        //Actions.employeeList({ type: 'reset' });
      };
};


export const AdmingamesInfoFormInput = (field, value): GamesSearchAction => {
  return {
    type: ADMIN_GAMES_INFO_UPDATE,
    field,
    value
  };
};




export const GamesAddForm = (field, value) => {
    return {
       
        type: ADD_GAME_FORM,
        field,
        value
    };
};







