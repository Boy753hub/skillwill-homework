import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/App.module.css'

const Facts = () => {
  const param = useParams()
  const info = [
    {id: 1, name: 'Spider-Man was created by Stan Lee and Steve Ditko' , desc: 'Spider-Man was created by Stan Lee and Steve Ditko. You might recognise Stan Lee as he has made a lot cameos in Marvel movies!'},
    {id: 2, name: 'Spider-Man first appeared in 1962' , desc: 'Everyone’s favourite web-slinger first appeared in August 1962 in a comic called Amazing Fantasy #15. That means Spider-Man is nearly 60-years-old!    '},
    {id: 3, name: 'It’s Spider-Man, not Spider Man' , desc: 'It’s Spider-Man, not Spider Man. Stan Lee specifically placed a hyphen between Spider and Man to avoid confusion with another super hero, Superman!'},
    {id: 4, name: 'Spider-Man is loved by a former President' , desc: 'Spider-Man is loved by a former President. Spidey is former U.S President Barack Obama’s favourite superhero!'},
    {id: 5, name: 'There have been nine Spider-Man movies made ' , desc: 'There have been nine Spider-Man movies made. They are: Spider-Man (2002), Spider-Man 2 (2004), Spider-Man 3 (2007), The Amazing Spider-Man (2012), The Amazing Spider-Man 2 (2014), Spider-Man: Homecoming (2017), Spider-Man: Into the Spider-verse (2018), Spider-Man: Far From Home (2019), and Spider-Man: No Way Home (2021).'},
    {id: 6, name: 'Three more Spider-Man films have been announced ' , desc: 'Three more Spider-Man films have been announced. There’s not much information out there atm, other than the fact we can expect three more Spidey movies!'},
    {id: 7, name: 'Peter Parker is the original Spider-Man' , desc: 'Peter Parker is the original Spider-Man. Although in the comics and on the screen there have been other variants of the Wall-Crawler – such as Miles Morales'},
    {id: 8, name: 'Peter Parker gained his powers by being bitten by a radioactive spider' , desc: 'Peter Parker gained his powers by being bitten by a radioactive spider. Being bitten by a radioactive spider gave Peter the following powers: Superhuman Strength.Superhuman Speed, Superhuman Reflexes, Superhuman Durability, Healing Factor, “Spider-Sense” Alert, Heightened Senses, and Wall-crawling.However, we really don’t recommend getting bitten by a spider in real-life!'},
    {id: 9, name: 'There was a Spider-Man musical' , desc: 'There was a Spider-Man musical called ‘Spider-Man: Turn Off the Dark’. It was on stage on Broadway in New York from 2011 to 2014! If you could write a song about a superhero what would it sound like?    '},
    {id: 10, name: 'Spider-Man is the most popular superhero in the world' , desc: 'Spider-Man is the most popular superhero in the world. In a 2021 survey by GAME, Spider-Man was the most the favourite superhero of 57 countries! Wonder Woman was the second most popular hero, being the favourite in 15 countries'},
  ]

  
  const parsedInfo = info.find(data => data.id == param.id)
  if(!parsedInfo){
    return <div><h1>No facts found</h1></div>
  }
  return (
    <div className={styles.info}>
      <h1>{parsedInfo.name}</h1>
      <p>{parsedInfo.desc}</p>
      
    </div>
  )
}

export default Facts