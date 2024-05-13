function hello() {
    let username = document.forms["entry"]["username"].value.toUpperCase();
    let password = document.forms["entry"]["password"].value;
    let greeting ="try again";
    if (username == 'MAHYAR') {
        if (password== 'mirabedi') {
                greeting = "hello" + username;
            }else {
                greeting = "try again!!"
            }
    }
    document.getElementById('reasult').innerText = greeting;
}

