export type InputPattern = {
    type: 'header' | 'email' | 'submit' | 'textarea';
    name?: 'email' | 'content';
    placeholder?: 'Wpisz swój email' | 'Wpisz treść wiadomości';
    label?: 'Skontaktuj się z nami' | 'Wyślij wiadomość'
}