class UI {
    constructor(){
        this.profileCointainer = document.getElementById('profiles');
        this.alert = document.getElementById('alert');
    }

    showAlert(text){
        this.alert.innerHTML= `${text} is not found`
    }

    showProfile(profile){
        this.profileCointainer.innerHTML= `
        <h4> Contact </h4>
        <div class="card card-body>
            <ul class="list-group">
                <li class="list-group-item">
                Name : ${profile.name}
                </li>
                <li class="list-group-item">
                Username : ${profile.username}
                </li>
                <li class="list-group-item">
                Email : ${profile.email}
                </li>
                <li class="list-group-item">
                Website : ${profile.website}
                </li>
                <li class="list-group-item">
                Address : 
                ${profile.address.street}
                ${profile.address.suite}
                ${profile.address.city}
                ${profile.address.zipcode}
                </li>
            </ul>
        </div>
        `
    }









    clear(){
        this.alert.innerHTML=''
        this.profileCointainer.innerHTML=''
    }
}