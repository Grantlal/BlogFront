import React from 'react'
import './Home.css';


export default function render()
{
        return (
          <div class="container">
            <div class="container">
                <div class="jumbotron" id="Jumbo"> </div>     
            <h1 class="headline">Welcome!</h1>
            </div>
            <div class="container" id="MainText">
                <p>
                    <pre class="startTab" /> So I think this is the part where I decide how to explain what I'm doing here, but the problem I keep running into is that I'm 
                    not exactly sure what I'm doing here. Ultimately I believe this will be a playground for myself to play with a bunch of new technologies, design patterns,
                    ways to approach problems, etc. Then I get to talk about how I felt about using them, and if you know me, you know I like talking about my opinions.
                </p>
                <p>
                    On top of just technology I also want to talk about the other passions I have. For now this will include some cooking and recipe information, and a boarding section.
                    So I hope you're looking forward to great new meal ideas and while it's summer skateboarding content. I would bet on snowboarding taking some precendent soon though. 
                    Originally I was going to also include a bunch of my personal hobbies to write about like hockey and running, but that's a little too much. I shortened the original list 
                    to only include boarding now. When I started building this site I was originally including a bunch more, but decided against it. Later if I wish to go down that rabbit 
                    hole I think I will make a sister blog. Then I can talk about the technology on this blog about building the other blog. It'll be neat. Anyways once I began development
                    including all that extra work it proved to be a lot to initally maintain, and honestly that not what I'm here for. Ultimately I would like to stay agile and make 
                    the small functional changes whenever I can as I can. So hopefully I can get this out there pretty soon so anyone interested can take a read!
                </p>
                <p>
                    If you've made it this far I just wanted to thank you for supporting me! If there's any comments or ideas you have about what I can do with the blog
                    please don't hesitate to reach out to me through whatever platform you know how to reach me at. There should be some ways to contact me below if you would like
                    to reach out to me with anything you can think of.  
                </p>
                <footer class="ContactInfo">
                    <a href="https://linkedin.com/in/grantlal" id="footyPajamas">LINKEDIN</a>
                    <a href="https://github.com/grantlal">GITHUB</a>
                </footer>
            </div>
         </div>
        );
}

