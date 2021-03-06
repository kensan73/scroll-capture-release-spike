# Intro
Originally this repo was based off

https://github.com/krzysztofzuraw/parcel-emotion-typescript.git 

which is a parcel / emotion /typescript stack that shows
how to use Emotion.js css prop with Parcel &amp; TypeScript

# Real intro
I copied it and modified it to spike capturing the mouse.

# How it works
If you scroll to the yellow section that is surrounded by grey sections,
- if >= 82% of yellow is within the client area,
    - yellow will scroll to top
    - (you can scroll up down but only text will update)
    - y scrollbar is hidden
    - after 5 seconds,
        - scrollbar is re-enabled
        - yellow section will either scroll down or up,
        depending on previous scrolling direction
        (if you were scrolling down when captured, you will be scrolled down, same if you were scrolling upward.)
        
# How to run
> npm install
> npm run start
> open http://localhost:1234
> scroll the window till you see the yellow section
> observe behavior as above

Within the yellow section you will see
- "up" | "down" scroll direction
- _&lt;number&gt;_ 0-100 which is % visible of the yellow section in client area

# Tested
Tested in Chrome and IE11 to be working.