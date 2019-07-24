import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { environment } from "../../environment/environment";

if (!firebase.apps.length) {
    firebase.initializeApp(environment.firebase)
}

export const auth = firebase.auth()