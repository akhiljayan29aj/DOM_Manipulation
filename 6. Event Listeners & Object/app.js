// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('hello');

//   // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');

  let val;

  val = e;

  // Event Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;


  // Time Stamp
  val = e.timeStamp;

  // Cooridinates event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Cooridinates event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}