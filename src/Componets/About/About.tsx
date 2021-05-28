
import React, { ComponentType, useCallback, useEffect, useRef, useState } from "react"
import { Grid, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useStyles } from "./About.styles";
const About: ComponentType = (props) => {
const chickenPhotos = ["https://i.pinimg.com/originals/01/93/f5/0193f589c7c3bc84d00fd0899b004706.jpg",
"https://betterchickencommitment.com/static/c4c65646cd882eb3b25feba0144c9113/a54c6/white-chicken-cutout-2.png",
"https://cdn.sanity.io/images/92ui5egz/~production/1f0e40ffac1592c3c9978cff9e5ec0d0b4901f23-1920x1080.jpg?w=1920&h=1080&auto=format",
"https://a4nh.cgiar.org/files/2017/10/Chicken-in-Timor-Leste-Johanna-Wong.jpg",
"https://assets.farmsanctuary.org/content/uploads/2020/05/27060521/2018_08-07_FSNY_Georgia_Hardstark_hen_DSC_1000_CREDIT_Farm_Sanctuary-scaled.jpg",
"https://a-z-animals.com/media/2019/11/Chicken-rooster-in-grass.jpg",
"https://www.backwoodshome.com/bhm/wp-content/uploads/2015/12/chicken-3727097_1920.jpg",
"https://www.adcogov.org/sites/default/files/chicken%201%20-%20getty.jpg"]
const Chickens = () =>{ return <div>{chickenPhotos.map((element)=>
             <img src={element}alt="chicken"/>
        )}</div>}
    const classes = useStyles();
    return (
        <>
        <Typography className={classes.root}>
Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia. It is
a paradisematic country, in which roasted parts of sentences fly into your
mouth. Even the all-powerful Pointing has no control about the blind texts it is
an almost unorthographic life One day however a small line of blind text by the
name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox
advised her not to do so, because there were thousands of bad Commas, wild
Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
She packed her seven versalia, put her initial into the belt and made herself on
the way. When she reached the first hills of the Italic Mountains, she had a
last view back on the skyline of her hometown Bookmarksgrove, the headline of
Alphabet Village and the subline of her own road, the Line Lane. Pityful a
rethoric question ran over her cheek, then she continued her way. On her way she
met a copy. The copy warned the Little Blind Text, that where it came from it
would have been rewritten a thousand times and everything that was left from its
origin would be the word "and" and the Little Blind Text should turn around and
return to its own, safe country. But nothing the copy said could convince her
and so it didn’t take long until a few insidious Copy Writers ambushed her, made
her drunk with Longe and Parole and dragged her into their agency, where they
abused her for their projects again and again. And if she hasn’t been rewritten,
then they are still using her. Far far away, behind the word mountains, far from
the countries Vokalia and Consonantia, there live the blind texts. Separated
they live in Bookmarksgrove right at the coast of the Semantics, a large
language ocean. A small river named Duden flows by their place and supplies it
with the necessary regelialia. It is a paradisematic country, in which roasted
parts of sentences fly into your mouth. Even the all-powerful Pointing has no
control about the blind texts it is an almost unorthographic life One day
however a small line of blind text by the name of Lorem Ipsum decided to leave
for the far World of Grammar. The Big Oxmox advised her not to do so, because
there were thousands of bad Commas, wild Question Marks and devious Semikoli,
but the Little Blind Text didn’t listen. She packed her seven versalia, put her
initial into the belt and made herself on the way. When she reached the first
hills of the Italic Mountains, she had a last view back on the skyline of her
hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her
own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
she continued her way. On her way she met a copy. The copy warned the Little
Blind Text, that where it came from it would have been rewritten a thousand
times and everything that was left from its origin would be the word "and" and
the Little Blind Text should turn around and return to its own, safe country.
But nothing the copy said could convince her and so it didn’t take long until a
few insidious Copy Writers ambushed her, made her drunk with Longe and Parole
and dragged her into their agency, where they abused her for their projects
again and again. And if she hasn’t been rewritten, then they are still using
her. Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia. It is
a paradisematic country, in which roasted parts of sentences fly into your
mouth. Even the all-powerful Pointing has no control about the blind texts it is
an almost unorthographic life One day however a small line of blind text by the
name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox
advised her not to do so, because there were thousands of bad Commas, wild
Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
She packed her seven versalia, put her initial into the belt and made herself on
the way. When she reached the first hills of the Italic Mountains, she had a
last view back on the skyline of her hometown Bookmarksgrove, the headline of
Alphabet Village and the subline of her own road, the Line Lane. Pityful a
rethoric question ran over her cheek, then she continued her way. On her way she
met a copy. The copy warned the Little Blind Text, that where it came from it
would have been rewritten a thousand times and everything that was left from its
origin would be the word "and" and the Little Blind Text should turn around and
return to its own, safe country. But nothing the copy said could convince her
and so it didn’t take long until a few insidious Copy Writers ambushed her, made
her drunk with Longe and Parole and dragged her into their agency, where they
abused her for their projects again and again. And if she hasn’t been rewritten,
then they are still using her.Far far away, behind the word mountains, far from
the countries Vokalia and Consonantia, there live the blind texts. Separated
they live in Bookmarksgrove right at the coast of the Semantics, a large
language ocean. A small river named Duden flows by their place and supplies it
with the necessary regelialia.

        </Typography>
<Chickens/>
    </>
    )
}
export default About;