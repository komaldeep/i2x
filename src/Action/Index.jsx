import * as Actions from '../Action/Index';

let Fetch_URL = "https://i2x-challenge.herokuapp.com";

export function LoginAttempt(Username , Password) {

        return function (dispatch) {

            dispatch ({
                type: "LOADER",
                payload: {
                    loadingaction: true,
                }
            })

            fetch(Fetch_URL+'/core/login/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  "email":Username,
                  "password": Password
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    dispatch ({
                        type: "AUTHORIZATION",
                        payload: {
                            Authkey: responseJson
                        }
                    })
                    dispatch ({
                        type: "LOADER",
                        payload: {
                            loadingaction: false,
                        }
                    })
                })
                .catch((error) => {
                    console.log('ERROR ON POSTING',error)
                    return false;
                });
        }
}

export function GetRecording(tokenvalue) {

    return function (dispatch) {
        fetch(Fetch_URL+'/ai/recording/list/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': ' JWT '+ tokenvalue,
            }
        }).then((response) => response.json())
            .then((responseJson) => {

                dispatch ({
                    type: "RECORDINGS",
                    payload: {
                        list: responseJson
                    }
                })
            })
            .catch((error) => {
                console.log('ERROR ON POSTING',error)
                return false;
            });
    }
}


export default Actions;