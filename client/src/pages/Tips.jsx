import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

export const Tips = () => {
  return (
    <Box sx={{textAlign:"center"}}>
      <Typography variant='h2' sx={{marginTop:"0.8em"}}>Топ 5 полезни съвети при пътуване.</Typography>
      <Typography variant='h3' sx={{marginTop:"0.8em", color:"darkGray"}}>1. Пътувайте бавно.</Typography>
      <Container sx={{paddingTop:"1em"}}>
        <Typography variant='span' sx={{marginTop:"0.8em", 
      color:"darkGray", fontSize:"1.5em"}}>
        Всеки път, когато някой попита кой е нашият съвет номер едно за пътуване, ние винаги отговаряме по един и същи начин – намалете скоростта.
  Напълно нормално е да се опитате да се впишете във възможно най-много вълнуващи дестинации и невероятни дейности, когато сте на почивка. В края на краищата, времето ви далеч от работа е ценно. Но можем да ви обещаем, че ще спечелите много повече ценни преживявания и спомени, ако пътувате бавно.
        </Typography>
      </Container>
      <Typography variant='h3' sx={{marginTop:"0.8em", color:"darkGray"}}>2. Мислете нестандартно, когато резервирате полети.</Typography>
      <Container sx={{paddingTop:"1em"}}>
        <Typography variant='span' sx={{marginTop:"0.8em", 
      color:"darkGray", fontSize:"1.5em"}}>
        В зависимост от това къде отивате, полетите могат да бъдат най-скъпата част от вашето пътуване. Ако планирате да отидете на някое малко по-неизвестно място, 
        цените може дори да са астрономични.
        </Typography>
      </Container>
      <Container sx={{paddingTop:"1em"}}>
        <Typography variant='span' sx={{marginTop:"0.8em", 
      color:"darkGray", fontSize:"1.5em"}}>
        Ето защо винаги се опитваме да мислим извън кутията, когато става въпрос за търсене на нашите самолетни билети.
        </Typography>
      </Container>
      <Typography variant='h3' sx={{marginTop:"0.8em", color:"darkGray"}}>3. Научете малко от местния език</Typography>
      <Container sx={{paddingTop:"1em"}}>
        <Typography variant='span' sx={{marginTop:"0.8em", 
      color:"darkGray", fontSize:"1.5em"}}>
        Следващият ни най-добър съвет за пътуване е да положите усилия да научите основите на местния език за мястото, където сте на посещение. Опитайте се да вземете думи и фрази като „здравей“, „благодаря“, „довиждане“, „къде е банята?“ и „колко?“, така че когато общувате с местен човек, вие полагате усилия да го направите на техния език.
        </Typography>
      </Container>
      <Typography variant='h3' sx={{marginTop:"0.8em", color:"darkGray"}}>4. Купете застраховка за пътуване.</Typography>
      <Container sx={{paddingTop:"1em"}}>
        <Typography variant='span' sx={{marginTop:"0.8em", 
      color:"darkGray", fontSize:"1.5em"}}>
        Ако не можете да си позволите застраховка за пътуване, не можете да си позволите да пътувате. Това е поговорка, която е била използвана хиляди пъти и това е така, защото е напълно вярна.
        </Typography>
      </Container>
      <Typography variant='h3' sx={{marginTop:"0.8em", color:"darkGray"}}>5. Попитайте за цени, преди да се съгласите на каквото и да било.</Typography>
      <Container sx={{paddingTop:"1em"}}>
        <Typography variant='span' sx={{marginTop:"0.8em", 
      color:"darkGray", fontSize:"1.5em"}}>
       Никога, и имаме предвид никога, не се качвайте на такси, не се регистрирайте за обиколка, не поръчвайте храна в местен ресторант или не се съгласявайте на нещо, което включва пари, без да знаете точно колко ще ви струва.
        </Typography>
      </Container>
    </Box>
  )
}

export default Tips