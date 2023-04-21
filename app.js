const  profile_card = document.querySelector('.profile-card')
const verified = document.querySelector('.verified')
//const profile_container = document.querySelector('profile-container')
const fetchUser = async()=>{
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        console.log(data)
        // const profile_card = document.createElement('div')
        // profile_card.classList.add('profile-card')
        profile_card.innerHTML = ` <div class="top">
                <div class="top-content"> 
                    <div class="left"><ion-icon name="arrow-back-outline"></ion-icon></div>
                   <div class="right"> 
                     <h1>${data.name}</h1>
                     <p class="tweets">32.3K Tweets</p>
                    </div>  
                    
                </div>
                <div class="image-container">
                    <!-- <img src="./background.png"/> -->
                </div>
            </div>

            <div class="mid">
                <div class="left">
                    <img src="./person.png" alt="profile"/>
                </div>
                <div class ="right">
                    <span class="icon">  <ion-icon name="ellipsis-horizontal"></ion-icon> </span>
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <span class="icon"><ion-icon name="notifications-outline"></ion-icon></span>
                    <button>Follow</button>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-head">
                    <h1>${data.name}</h1>
                    <p>@${data.username}</p>
                </div>
                <div class="bottom-details">
                    <div class="bottom-details-top">
                        Lead Dev Rel <span class="blue">@${data.email}</span> Created <span class="blue">@${data.company.name}</span>| npx create-web3-dapp| Developing: Pot🍊| Helping devs break into web3
                    </div>
                    <div class="bottom-details-bottom">
                        <p><span><ion-icon name="briefcase-outline"></ion-icon></span>Science and Technology <span><ion-icon name="alert-circle-outline"></ion-icon></span></p>
                        <p><span><ion-icon name="location-outline"></ion-icon></span>Ethereum </p>
                        <p><span><ion-icon name="link-outline"></ion-icon></span><span class="blue">vito.cc</span></p>
                        <p><span><ion-icon name="calendar-outline"></ion-icon></span>joined August 2020</p>
                    </div>
                    
                </div>
                <div class="below">
                    <div class="follows">
                        <p><span class="text">322</span>Following</p>
                        <p><span class="text">110.8K</span>Followers</p>
                    </div>
                    <div class="followers">
                        <div class="followedby">
                                <img class="person1" src="./p1.jpg" alt="follow"/>
                                <img  class="person2" src="./p2.jpg" alt="follow"/>
                                <!-- <img  class="person3" src="./p3.jpg" alt="follow"/> -->
                                                   
                        </div>
                        <p>Followed by Vwoke💙 and 30 others</p>
                    </div>
                </div>
            </div>
            <div class="tweets">
                <p class="active" >Tweets</p>
                <p>Replies</p>
                <p>Media</p>
                <p>Likes</p>
            </div>`
            // return profile_container.appendChild(profile_card)
        // return profile_card
    }   
    catch(err){
        console.log(err)
    }
    }
   
fetchUser()
const fetchPosts = async()=>{
    try{
        const response =  await fetch(' https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        console.log(data)
        verified.innerHTML= `
        <p class="tops"> <span class="icon"><ion-icon name="pin-outline"></ion-icon></span> Pinned Tweet</p>
         <div class="person">
            <div class="left"><img src="./person.png " alt="person"/> </div>
            <div class="right"> <h3>Vitto Rivabela</h3> <p>@Vitostock . Mar 31</p></div>
           
        </div>
        <div class="verify-below">
            <p>We're officially Alchemy verified!</p>
            <p>One blue checkmark wasnt enough</p>
        </div>`
        
    }
    catch(err){
        console.log(err)
    }
    
}
fetchPosts()

