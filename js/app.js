document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.wrap-banner__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function() {

            let elem = document.getElementById('form-send');

            elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        })
    })
    

    const validation = new JustValidate('#form-send');

    validation
    .addField('#fb-name', [
        {
        rule: 'minLength',
        value: 3,
        },
        {
        rule: 'maxLength',
        value: 30,
        },
    ])
    .addField('#fb-email', [
        {
        rule: 'required',
        errorMessage: 'Электронная почта обязательна',
        },
        {
        rule: 'email',
        errorMessage: 'Электронная почта недействительна!',
        },
    ]);

})