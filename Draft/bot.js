window.botpressWebChat.init({
  'composerPlaceholder': 'Chat with LegAid',
  'botConversationDescription': 'A tool to enhance your knowledge about law',
  'botName': 'LegAid',
  'botId': 'dece3e45-da2e-41f6-ad50-516db0117854',
  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
  'messagingUrl': 'https://messaging.botpress.cloud',
  'clientId': 'dece3e45-da2e-41f6-ad50-516db0117854',
  'enableConversationDeletion': true,
  'showPoweredBy': false,
  'className': 'webchatIframe',
  'containerWidth': '100%25',
  'layoutWidth': '100%25',
  'hideWidget': true,
  'showCloseButton': false,
  'disableAnimations': true,
  'closeOnEscape': false,
  'showConversationsButton': true,
  'enableTranscriptDownload': true,
  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/3fcd3e4e-d5bc-4bf5-8699-14b621b3ada2/v31782/style.css'
});

window.botpressWebChat.onEvent(function () { 
  window.botpressWebChat.sendEvent({ type: 'show' }) 
}, ['LIFECYCLE.LOADED']);
