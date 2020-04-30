const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click',runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown (click and hold)
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup (click, hold and letgo)
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter (cursor moves into the main element)
// card.addEventListener('mouseenter', runEvent);

// Mouseleave (cursor moves outside the main element)
// card.addEventListener('mouseleave', runEvent);

// Mouseover (cursor moves into the variable)
// card.addEventListener('mouseover', runEvent);

// Mouseout (cursor moves outside the variable)
// card.addEventListener('mouseout', runEvent); //this will fire off if the mouse goes over an element inside the main element

// Mousemove
card.addEventListener('mousemove', runEvent);




// Event Handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}