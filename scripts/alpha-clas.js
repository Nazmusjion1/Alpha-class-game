// function play(){
// //step-1: hide the home screen . to hide the screen add the  class hidden to home section
//   const homeSection = document.getElementById('home-screen');
// //   console.log(homeSection.classList);
//   homeSection.classList.add('hidden');

// // show the playground
//   const playGroundSection = document.getElementById('play-ground');
// //   console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}