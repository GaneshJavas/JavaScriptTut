console.log(document)   alternate   document

other syntax

console.log(document.baseURI)
console.log(document.links)
    returns HTMLcollections not array
there are HTMLcollections NodeCollections which can further be converted to array
--------------------------------------------------------------
Getting elements

document.getElementById("Id_value")
    => returns the complete element

document.getElementById("Id_value").innerHTML = "<h1>Change</h1>"
    => changes the inner html of the selected element
    -------------------
EXAMPLES: Ref. reference.html
                    -------------------
=> document.getElementById("heading")
<h1 id=​"heading" class=​"content_head">​This is heading​</h1>​
    This fetches the element 
=> document.getElementById("heading").id
'heading'
    This fetches the value of an attribute "id" from a selected element.
=> document.getElementById("heading").class
undefined
    To fetch the value of class this won't work instead use className
=> document.getElementById("heading").className
'content_head'
                    -------------------
Using getAttribute function

=> document.getElementById("content").getAttribute("id")
'content'
=> document.getElementById("content").getAttribute("class")
'content_class'

Using setAttribute  to update or add new attribute

=> document.getElementById("content").setAttribute("class","content_class_set")
undefined
    This returns undefined but in background it updates
    -> <div id="content" class="content_class_set">
        <h1 id="heading" class="content_head">This is heading</h1>
        <p id="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolores obcaecati, culpa facilis quod mollitia praesentium veritatis reiciendis minima quaerat ipsam, error voluptate sunt maxime asperiores, neque voluptatum sint vitae! <span hidden="">Amit jinda hai</span></p>
    </div>

                    -------------------
Styling 

=> const heading = document.getElementById("heading")
undefined
=> heading
<h1 id=​"heading" class=​"content_head">​This is heading​</h1>​
=> heading.style.backgroundColor = 'Yellow'
'Yellow'
=> heading.style.padding = "2px"
'2px'
=> heading.style.borderRadius = "5px"
'5px'

---------------------------------------------------------------

=> document.getElementById("lorem")

<p id=​"lorem">​"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolores obcaecati, culpa facilis quod mollitia praesentium veritatis reiciendis minima quaerat ipsam, error voluptate sunt maxime asperiores, neque voluptatum sint vitae! "<span hidden>​Amit jinda hai​</span>​</p>​
a = document.getElementById("lorem")
<p id=​"lorem">​…​</p>​

=> a.innerHTML

'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolores obcaecati, culpa facilis quod mollitia praesentium veritatis reiciendis minima quaerat ipsam, error voluptate sunt maxime asperiores, neque voluptatum sint vitae! <span hidden="">Amit jinda hai</span>'

=> a.innerText

'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolores obcaecati, culpa facilis quod mollitia praesentium veritatis reiciendis minima quaerat ipsam, error voluptate sunt maxime asperiores, neque voluptatum sint vitae!'

=> a.textContent

'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolores obcaecati, culpa facilis quod mollitia praesentium veritatis reiciendis minima quaerat ipsam, error voluptate sunt maxime asperiores, neque voluptatum sint vitae! Amit jinda hai'

* Note: For definition refer to questions page

---------------------------------------------------------------