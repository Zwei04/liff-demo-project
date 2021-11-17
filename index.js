// Import stylesheets
import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
import liff from '@line/liff';

const body = document.getElementById('body');

const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');

const btnShare = document.getElementById('btnShare');
//1656637974-pj6o1ewZ
async function main() {
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
    btnShare.style.display = 'block';
  });

  await liff.init({ liffId: '1656641765-MYeg7wkn' });
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userID : </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName : </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage : </b>' + profile.statusMessage;
}

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: 'text',
      text: 'This msg was shared by LIFF',
    },
  ]);
  if (result) {
    alert('Msg was shared!');
  } else {
    alert('ShareTargetPicker was cancelled by user');
  }
  liff.closeWindow();
}

btnShare.onclick = () => {
  shareMsg();
};
