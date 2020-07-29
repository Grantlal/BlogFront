import React from 'react'
import './Technology.css';


export default function render()
{
        return (
            <div class="container">
              <div class="container">
                <div class="jumbotron" id="TechJumbo"> </div>     
              </div>
              <h1 class="headline"> A Harvard of Central Minnesota Graduate's Initial Thoughts on React </h1> 
              <div class="container" id="MainText">
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
                  just continue on creating a website exactly how you normally would with the tools you know and love. So now we're getting to the really fun opinion based part, why 
                  should you use react?
                </p>
                <h2 id="MiddleHeader">Just Don't</h2>
                <p>
                  All joking aside React offers some extremely nice utility that I don't think other frameworks like Vue or Angular offer. What I find to be the most important piece 
                  of information about React is that it can be adopted as necessary. Each of the other frameworks require you to play by their rules much more so than React does. 
                  Honestly I have only used the parts of React I have wanted to and that has lead to me having a great experience. Instead of learning about two way data binding in
                  Angular or how to manipulate a single page web application in Vue, I can just get to fun part. I really have enjoyed the level of flexibility React allows me have
                  over my development practices. Besides just flexibility, React also offers a great strength being mostly javascript based. Instead of dealing with html mostly, 
                  React creates components through javascript, and this lets me debug and organize my code easily. If you take a look at the repository for this blog you'll notice 
                  how I've separated components into individual buckets and containers. For the positives of React we've landed at it being immensely flexible, easy to debug, and
                  easy to organize. We should move on to the juiciest part of this post, what I don't like. 
                </p>
                <p>
                  React is powerful and easy to learn, but it definitely has problems. Something that I have found commonplace in the software world is that flexibility leads
                  to confusion. Much like how a short elder green guy once said "Anger lead fear, fear leads to hate, and hate leads to suffering," React follows a similar path. 
                  By leaving engineers with so much flexibility on when and where to use react components each of us using React have different opinions on when to use it. 
                  To complete the comparison, React leads to flexibility, flexibility leads to discussion, and discussion leads to having multiple correct answers. When you have 
                  multiple ways to do something right it leaves us with problem. Lets take for example I am learning how to use React. If I were to get a role as a react developer
                  somewhere they would likely have a vastly different way of doing things. I think React's nature of being only adopted gradually or when you want to will lead to
                  vastly different best practices. My current favorite language C# (ForeShadowing) has this problem somewhat, but there's definitely less room for intrepretation. 
                  There are powerful tools built in that say if you're going to do blank, you could and should use blank. For example if I had a list and I wanted the first entry, 
                  I would just use a simple .First Linq command. With react there's too much abstraction on when exactly should I split something into a component, or just use React
                  anyways. 
                </p>
                <p>
                  To put some closure on my thoughts about React it is fairly easy to start using, can be really nice to organize repositories, and has some inherent complexity issues.
                  For the beginner developer to jump in to React I think it could prove extremely difficult, but also very rewarding. By not forcing the frameworks abilities onto the 
                  them, they could have a great opportunity to become familiar with the popular framework while still learning loads about basic web development. I've said it a few times
                  now, but seriously the flexibility is wonderful for myself as solo developer. I foresee being a part of team working with react would cause some larger discussions
                  that take away time from the fun stuff, but that's not the worst thing. If you are someone looking to try to what I've found to be the most popular javascript LIBRARY, 
                  I definitely recommend it for a personal project, and that could lead to you finding your new favorite way to build responsive component based webpages. 
                </p>
                <h1 id="LastHeader">A Brief Look into the Future</h1>
                <p>
                  If you are the software engineer type you could easily find that this is almost exclusively a statically typed website. Go figure, why put something out that
                  doesn't have to be yet! Go agile development and building minimally viable products! My plan is for the technology to be the majority of my blogging experience 
                  right now. I think it's so interesting to out and find new frameworks, build an application, and compare the processes between each. Like why would I want to use 
                  Django over FastApi for example? I don't know, somebody could tell me, I could read about it, or why not go out and do it! There are so many neato tech stacks out 
                  there that I want to try that I just can't help myself. I am going to start building a back-end application that this website can reach to retrieve blog entries next. 
                  It might not be fully functioning at the time that I write another blog entry, but we can certainly see what happens. So if things stay static for a while, be patient as 
                  that is exactly what I'm working on now. Thank you so much for reading this long entry, I truly appreciate your support. Please don't hesitate to reach out to me with any
                  questions or comments you have about what I've written as I love discussions. 
                </p>
              </div>
            </div>
        );
}
