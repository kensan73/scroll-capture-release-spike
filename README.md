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
        - yellow section will be pushed away from top
        
# How to run
> npm install
> npm run start
> open http://localhost:1234
> scroll the window till you see the yellow section
> observe behavior as above

Within the yellow section you will see
- "up" | "down" scroll direction
- <number> which is % visible of the yellow section in client area