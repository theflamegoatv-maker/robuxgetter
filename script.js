// --- Falling background logos ---
const background = document.getElementById('falling-background');
const logos = [
  'https://logos-world.net/wp-content/uploads/2020/11/Roblox-Icon-Logo-2022.png', // grey Roblox logo
  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Robux_2019_Logo_gold.svg', // Robux logo
  'https://hip2save.com/wp-content/uploads/2020/12/roblox-digital-gift-card.jpg' // Robux gift card
];

function createLogo(){
  const img = document.createElement('img');
  img.src = logos[Math.floor(Math.random()*logos.length)];
  img.className = 'falling-logo';
  
  // Random position, size, rotation, and animation speed
  img.style.left = Math.random()*100 + 'vw';
  const size = 30 + Math.random()*50;
  img.style.width = size + 'px';
  img.style.height = 'auto';
  img.style.transform = `rotate(${Math.random()*360}deg)`;
  img.style.animationDuration = 5 + Math.random()*5 + 's';
  
  background.appendChild(img);
  setTimeout(()=>background.removeChild(img), 10000);
}
setInterval(createLogo, 300);

// --- Step-by-step logic ---
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

enterBtn.addEventListener('click', () => {
  const name = usernameInput.value.trim();
  if(!name) return alert('Please enter your username!');
  enteredUsername = name;
  displayUsername.textContent = `Username: ${enteredUsername}`;
  avatarImg.src = "https://www.roblox.com/headshot-thumbnail/image?userId=1&width=150&height=150&format=png";
  profileDiv.classList.remove('hidden');
});

getRobuxBtn.addEventListener('click', () => {
  amountsDiv.classList.remove('hidden');
});

document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedAmount = btn.textContent;
    if(!enteredUsername) return alert('Please enter your username!');

    // Make text white for visibility
    loadingText.style.color = "#fff";
    countdownText.style.color = "#fff";

    loadingText.textContent = `Exotic_PlayerYTER is donating you ${selectedAmount} Robux...`;
    thanksBtn.classList.remove('hidden');
    loadingDiv.classList.remove('hidden');
    profileDiv.classList.add('hidden');
    amountsDiv.classList.add('hidden');
    countdownText.classList.add('hidden');

    thanksBtn.onclick = () => {
      thanksBtn.classList.add('hidden');
      loadingText.textContent = `Donating ${selectedAmount} Robux to ${enteredUsername}...`;
      let seconds = 10;
      countdownText.textContent = `Redeem button will appear in ${seconds}s`;
      countdownText.classList.remove('hidden');
      if(countdownInterval) clearInterval(countdownInterval);
      countdownInterval = setInterval(() => {
        seconds--;
        if(seconds>0){
          countdownText.textContent = `Redeem button will appear in ${seconds}s`;
        } else {
          clearInterval(countdownInterval);
          countdownText.classList.add('hidden');
          loadingDiv.classList.add('hidden');
          redeemWrap.classList.remove('hidden');
        }
      },1000);
    };
  });
});

redeemBtn.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});
