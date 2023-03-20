let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #752656;">Desarrollo sitios web y Programo Robots Industriales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
