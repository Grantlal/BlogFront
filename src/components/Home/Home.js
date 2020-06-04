import React from 'react'
import './Home.css';


export default function render()
{
        return (
          <div>
            <div class="container">
                <div class="jumbotron" id="Jumbo">
                    <h2>Welcome to My Hideout</h2>      
                </div>     
            </div>
            <div id="MainText">
                <p>
                    <pre class="startTab" /> I think this is the part where I decide how to explain what I'm doing here, but the problem I keep running into is that I'm 
                    not exactly sure what I'm doing here. Ultimately I believe this will be a playground for myself to play with a bunch of new technologies, design patterns,
                    ways to approach problems, etc. Then I get to talk about how I felt about using them, and if you know me, you know I like talking about my opinions.
                </p>
                <p>
                    On top of just technology I also want to talk about the other passions I have. For now this will include any recipes I have been working on and some insights
                    on sports I'm interested in as well.
                </p>
            </div>
         </div>
        );
}

