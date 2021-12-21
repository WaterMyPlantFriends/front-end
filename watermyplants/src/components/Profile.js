import React from 'react';
import axios from 'axios';
import '../Styles/Profile.css'


export default function Profile({ details }) {
    const profileCard = document.querySelector(.cards)

    function getPlants (plants){
        followers.forEach(Plant =>{
            axios.get(`url for users plants input`)
            .then(res => {
            document.querySelector('.cards').append(profileCardMaker(response.data))}
            )
        })
    }

    function getUser (userName){
        axios.get(`api call to ${userName}`)
        .then(response => {
        userCard.appendChild(profileCardMaker(response.data))
        console.log(response.data)
        })
        .catch(error => {
        console.error(error)
        })
        .finally(() => console.log("WOOOOOHOOOO I WORK!"))
    }

    function profileCardMaker(user) {
        const profileCard = document.createElement('div')
        const profileCardContainer = document.createElement('div')
        const cardImage = document.createElement('img')
        const cardInfo = document.createElement('div')
        const cardName = document.createElement('h3')
        const cardUserName = document.createElement('p')
        const cardPlants = document.createElement('p')

        profileCard.classList.add('card-profile')
        profileCardContainer.classList.add('profile-container')
        cardImage.src = user.avatar_url
        cardInfo.classList.add('card-info')
        cardName.classList.add('name')
        cardName.textContent = user.name
        cardUserName.classList.add('username')
        cardUserName.textContent = user.login
        cardPlants.textContent = `Plants: ${user.plants}`

        profileCard.appendChild(profileCardContainer)
        profileCardContainer.appendChild(cardImage)
        cardInfo.appendChild(cardName)
        cardInfo.appendChild(cardUserName)
        cardInfo.appendChild(cardUserName)
        cardInfo.appendChild(cardPlants)
    
        return profileCard
    }
}