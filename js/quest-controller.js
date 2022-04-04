'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ans: 'yes'}, onUserResponse);
$('.btn-no').click({ans: 'no'}, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  // TODO: hide the game-start section

  renderQuest();
  // TODO: show the quest section
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text
}

function onUserResponse(ev) {
  console.log('ev', ev);
  var res = ev.data.ans;
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!');
      // TODO: improve UX
    } else {
      alert('I dont know...teach me!');
      // TODO: hide and show new-quest section
    }
  } else {
    // TODO: update the lastRes global var
    moveToNextQuest();
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();

  // TODO: Get the inputs' values
  // TODO: Call the service addGuess

  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  gLastRes = null;
}
