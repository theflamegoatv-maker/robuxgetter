// Elements
const enterBtn = document.getElementById('enterBtn');
const usernameInput = document.getElementById('username');
const profileDiv = document.getElementById('profileDiv');
const displayUsername = document.getElementById('displayUsername');
const avatarImg = document.getElementById('avatar');
const getRobuxBtn = document.getElementById('getRobuxBtn');
const amountsDiv = document.getElementById('amounts');
const loadingDiv = document.getElementById('loading');
const loadingText = document.getElementById('loadingText');
const thanksBtn = document.getElementById('thanksBtn');
const countdownText = document.getElementById('countdownText');
const redeemWrap = document.getElementById('redeemWrap');
const redeemBtn = document.getElementById('redeemBtn');

let selectedAmount = null;
let enteredUsername = null;
let countdownInterval = null;

// Step 1: Enter username
enterBtn.addEventListener('click', () => {
  const name = usernameInput.value.trim();
  if(!name) return alert('Please enter your username!');
  enteredUsername = name;
  displayUsername.textContent = `Username: ${enteredUsername}`;
  // keep using a placeholder avatar (no API calls)
  avatarImg.src = "https://www.roblox.com/headshot-thumbnail/image?userId=1&width=150&height=150&format=png";
  profileDiv.classList.remove('hidden');
});

// Step 2: GET ROBUX shows amounts
getRobuxBtn.addEventListener('click', () => {
  amountsDiv.classList.remove('hidden');
});

// Step 3: choose amount
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedAmount = btn.textContent;
    if(!enteredUsername) {
      alert('Please enter your username first!');
      return;
    }

    // Show first message + Thanks! button
    loadingText.textContent = `Exotic_PlayerYTER is donating you ${selectedAmount} Robux...`;
    thanksBtn.classList.remove('hidden');
    loadingDiv.classList.remove('hidden');
    // hide profile/amounts while loading
    profileDiv.classList.add('hidden');
    amountsDiv.classList.add('hidden');
    countdownText.classList.add('hidden');

    // attach click handler (re-attach each time to capture current amount/username)
    thanksBtn.onclick = () => {
      // hide thanks
      thanksBtn.classList.add('hidden');
      // small confirmation (optional)
      //alert("You're welcome! 😏");

      // Show second message
      loadingText.textContent = `Donating ${selectedAmount} Robux to ${enteredUsername}...`;

      // Start 10-second countdown, then show redeem button
      let seconds = 10;
      countdownText.textContent = `Redeem button will appear in ${seconds}s`;
      countdownText.classList.remove('hidden');

      // Clear previous interval if exists
      if(countdownInterval) clearInterval(countdownInterval);

      countdownInterval = setInterval(() => {
        seconds--;
        if(seconds > 0) {
          countdownText.textContent = `Redeem button will appear in ${seconds}s`;
        } else {
          clearInterval(countdownInterval);
          countdownText.classList.add('hidden');
          loadingDiv.classList.add('hidden');
          // show redeem button
          redeemWrap.classList.remove('hidden');
        }
      }, 1000);
    };
  });
});

// Step 4: Redeem button takes to YouTube (Rickroll)
redeemBtn.addEventListener('click', () => {
  // redirect to official Rickroll YouTube video
  window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});
