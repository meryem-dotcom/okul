module.exports = (username,password)=>{
    const hatalar = []

    if(username === ""){
        hatalar.push({message:'Lütfen kullanıcı adı giriniz'});
    }

    if(password.length < 6){
        hatalar.push({message: 'Şifreniz minimum 6 karakterden oluşmalıdır'});
    }

    return hatalar;
}
