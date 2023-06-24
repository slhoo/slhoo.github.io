function pq(){
    const logink = document.getElementById(`login`).value;
    let emailk = document.getElementById(`email`).value;

    let user = {
        name: logink,
        email: emailk

    }
    localStorage.setItem(`danppi`, JSON.stringify(user));


}