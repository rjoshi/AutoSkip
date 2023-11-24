// Skip YouTube ads
function skipAds() {
    const adSkipButton = document.querySelector(".ytp-ad-skip-button");
    const adOverlay = document.querySelector(".ytp-ad-overlay-close-button");
    if (adSkipButton) {
      adSkipButton.click();
    } else if (adOverlay) {
      adOverlay.click();
    }
  }
  
  // Run the ad skipping function when the page loads or when the video changes
  function runAdSkipper() {
    skipAds();
    const videoContainer = document.querySelector(".html5-video-container");
    if (videoContainer) {
      const observer = new MutationObserver(skipAds);
      observer.observe(videoContainer, { childList: true, subtree: true });
    }
  }
  
  // Execute the ad skipping logic
  runAdSkipper();
  