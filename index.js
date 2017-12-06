function theBeatlesPlay (musicians, instruments) {
  var messages;
  for (i= 0; i<musicians.length; i++) {
    messages.push(musicians[i] + " plays " + instruments[i]);
  }
  return messages;
}
