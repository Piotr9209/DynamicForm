// napisz funkcję do generowania dynamicznie formularzy 

// na podstawie ustalonego schematu testSettings



import { ITestSettings } from '../interface/ITestSettings'

const testSettings: ITestSettings = {
    action: '/contact/by-mail',
    method: 'POST',
    inputs: [{
        type: 'header',
        label: 'Skontaktuj się z nami'
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Wpisz swój email'
    },
    {
        name: 'content',
        type: 'textarea',
        placeholder: 'Wpisz treść wiadomości'
    },
    {
        type: 'submit',
        label: 'Wyślij wiadomość'
    }
    ]
}
function generateFormOnPattern(settings: ITestSettings): void | never {

    if (typeof settings !== 'object') {
        throw new Error('argument must be object')
    }

    const form = document.createElement('form')

    document.body.appendChild(Object.assign(form, {
        'action': settings.action,
        'method': settings.method
    }));

    if (settings.inputs.length == 0) {
        throw new Error('inputs must be greather than 0')
    }
    // co gdy inputs jest puste

    // pierwsze wytworzyć strukturę danych
    // wrzucic na widok

    settings.inputs.forEach(typeLoop => {
        if (typeLoop.type === 'header') {
            const h4 = document.createElement('h4');
            Object.assign(h4, {
                'label': typeLoop.label
            })
            return form.append(h4)
        }

        if (typeLoop.type === 'email') {
            const input = document.createElement('input');
            Object.assign(input, {
                'type': typeLoop.type,
                'name': typeLoop.name,
                'placeholder': typeLoop.placeholder
            })
            return form.append(input);
        }
        if (typeLoop.type === 'textarea') {
            const textArea = document.createElement('textarea');
            Object.assign(textArea, {
                'name': typeLoop.name,
                'placeholder': typeLoop.placeholder
            })
            return form.append(textArea);
        }
        if (typeLoop.type === 'submit') {
            const button = document.createElement('button');
            Object.assign(button, {
                'submit': typeLoop.label
            })
            return form.append(button);
        } else {
            throw new Error('wrong data to create the form')
        }

    })
}




generateFormOnPattern(testSettings)

// powinien wyjść taki formularz
// {
/* <form method="POST" action="/contact/by-mail">
    <h4>Skontaktuj się z nami</h4>
    <input type="email" name="email" placeholder="Wpisz swój email"></input>
    <textarea name="content" placeholder="Wpisz treść wiadomości"></textarea>
    <button>
        Wyślij wiadomość
    </button>
</form> */
// }