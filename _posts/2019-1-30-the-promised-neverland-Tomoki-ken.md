---
layout: post
title: "The Promised Neverland"
date: 2019-1-30
---

<h2> Flag of Malaysia by Jerusha Stewart </h2>

<p>The first step in the process of making the Malaysian flag is finding the meausrements. </p>

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Construction_sheet_of_Flag_of_Malaysia.svg" width="400px" height="200px">
 
-   This is the Flag of Malaysia and really when I'm done with my flag I expect a four becuase I made the professional flag.




## Current output

* * *
![Flag](file:///C:/Users/JS/Pictures/Screenshot%20(76).png)
* * *


include image
size = 100

width = size * 14
height = size * 7

rectangle(width,height,"solid","white")

stripe-height = height / 9.5
stripe-width = width

rectangle(stripe-width, stripe-height, "solid", "red")

box-height = size * 3
box-width = size * 6

* * *

-   The size multiplies the acurate fittings to chnage however I want it too and the rectangles make the stripes and background of the flag white background and red stripes.

 



## Program code
include image
size = 100

width = size * 14
height = size * 7

rectangle(width,height,"solid","white")

stripe-height = height / 9.5
stripe-width = width

rectangle(stripe-width, stripe-height, "solid", "red")

box-height = size * 3
box-width = size * 6

rectangle(box-width, box-height,"solid", "blue")


circle1-width = size * 1.9

circle2-width = size * 2

circle(circle1-width,"solid","blue")
circle(circle2-width,"solid","yellow")

star(100,"solid","yellow")

SR = rectangle(stripe-width, stripe-height, "solid", "red")
ST = star(100,"solid", "yellow")
RT = rectangle(box-width, box-height,"solid", "blue")
RT2 = rectangle(width,height,"solid","white")
CR = circle(circle1-width,"solid","blue")
CR2 = circle(circle2-width,"solid","yellow")

N1 = place-image(CR,150,110,CR2)

place-image(SR,700, 1 * stripe-height, 
  place-image(SR,700, 3 * stripe-height,
    place-image(SR,700, 5 * stripe-height, 
      place-image(SR,700, 7 * stripe-height, 
        place-image(SR,700, 9 * stripe-height,
          place-image(SR,700, 12 * stripe-height, RT2))))))
