import { handleResponse, signInUser } from "./api/auth";
import {
    createForm,
    errorMessage,
    isEmail,
    popupMessage
} from "./components/form";

const handlers = {
    201: () => {
        window.location.assign("./index.html");
    },
    404: () => {
        popupMessage({
            message:
                "It looks like you haven't created your Districtr account yet. " +
                '<a href="./register.html">Click here to create an account.</a>',
            raw: true
        });
    },
    default: () => {
        errorMessage("We're sorry. Signing in is currently unavailable.");
    }
};

function onSubmit({ email }) {
    signInUser({
        email: email.value
    })
        .then(handleResponse(handlers))
        .catch(() => {
            errorMessage(
                "We're having trouble accessing our sign-in service." +
                    "Are you connected to the internet?"
            );
        });
}

function validate({ email, submit }) {
    const valid = isEmail(email.value);
    submit.disabled = !valid;
    return valid;
}

export function main() {
    createForm(["email", "submit"], "form", validate, onSubmit);
}

main();
