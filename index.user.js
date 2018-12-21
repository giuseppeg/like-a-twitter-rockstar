// ==UserScript==
// @name like-a-twitter-rockstar
// @description Small UserScript that bumps your Twitter Followers count to make you feel better.
// @version 0.3.0
// @match https://twitter.com/*
// ==/UserScript==
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .DashboardProfileCard-content [data-element-term="follower_stats"] [data-count],
    .ProfilePage-editingOverlay + .AppContainer .ProfileNav-item--followers [data-count] {
      position: relative !important;
      text-indent: -100000px !important;
    }

    .DashboardProfileCard-content [data-element-term="follower_stats"] [data-count]:after,
    .ProfilePage-editingOverlay + .AppContainer .ProfileNav-item--followers [data-count]:after {
      content: '120K' !important;
      position: absolute !important;
      left: 0 !important;
      width: 100% !important;
      text-indent: 0 !important;
    }
  </style>
`);
