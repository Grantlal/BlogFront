import React from 'react'
import './Technology.css';


export default function render()
{
        return (
            <div class="container">
              <div class="container">
                <div class="jumbotron" id="TechJumbo"> </div>     
              </div>
              <div class="container" id="MainText">
                <h1 class="headline"> Initial Thoughts on React </h1> 
                <p>
                  Hey there! If you're most excited about what I have to say about certain technologies, frameworks, and methodologies well you're in luck. This entry is going to 
                  go over how I've felt using react compared to the other javascript frameworks I have experience with. For now my brain is saying we'll go through what React is, 
                  how I've felt using it, it's strengths, weaknesses, and the overall satisfaction I've had using it. I realize this will likely change through the months, 
                  and maybe even years I spend building this blog, but that just means we'll have more content eventually!
                </p>
                <p>
                  So what is React? For those new to web development or javascript in general, React is essentially a set of extra tools that you can use. In my brief search React is 
                  actually a library, but I refer to it as a framework frequently. The two are very similar and the only real difference is the inversion of control. In a library we the
                  developer are in control of the flow of the application. Compare this to a framework where they have the groundwork already laid out on how the flow of interactions happens.
                  Ultimately in my opinion if someone were to call React a framework I won't get fussy because I call it framework most of the time anyways. With the discussion of what 
                  constitutes a framework or not over finally, how do we actually use react?
                </p>
                <p>
                  So for starters how do we actually start using React. Well I highly recommend using the wonderful package manager known as, node package manager (npm). By using the 
                  command npx create-react-app you'll have a fully functioning webpage that can utilize react whenever you wish. From there you can choose to use as much or as little 
                  snippets of react power as you wish. In my own words this is essentially done by injecting (java)script into your html. From here you can create new react components
                  and other such items if you see fit. On my end I have been trying to use components more frequently as they really help with reusability. Once you get these things done
                  just continue on creating a website exactly how you normally would with the tools you know and love. 
                </p>
                <p>
                  There really isn't much else I actually wanted to talk about here actually. So thank you for reading and I look forward to being able to continue down this path of culinary
                  adventure with everyone reading.
                </p> 
              </div>
            </div>
        );
}
