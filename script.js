document.getElementById('generate-btn').addEventListener('click', function () {
  const realUrl = document.getElementById('real-url').value;
  const fakeUrl = document.getElementById('fake-url').value;

  if (!realUrl || !fakeUrl) {
      alert('Please enter both real and fake URLs.');
      return;
  }

  
  if (!realUrl.startsWith('http://') && !realUrl.startsWith('https://')) {
      alert('Real URL must start with http:// or https://');
      return;
  }
  if (!fakeUrl.startsWith('http://') && !fakeUrl.startsWith('https://')) {
      alert('Fake URL must start with http:// or https://');
      return;
  }

  
  document.getElementById('qr-code-container').innerHTML = '';

  
  const encodedRealUrl = btoa(realUrl); 
  const encodedFakeUrl = btoa(fakeUrl); 

  
  const repoName = 'qrcode-project'; 
  const landingPageUrl = `${window.location.origin}/qrcode-project/redirect.html?fake=${encodedFakeUrl}&real=${encodedRealUrl}`;

  
  new QRCode(document.getElementById('qr-code-container'), {
      text: landingPageUrl,
      width: 128,
      height: 128
  });

  
  const fakeLinkContainer = document.getElementById('fake-link-container');
  const fakeLink = document.getElementById('fake-link');

  fakeLink.href = realUrl; 
  fakeLink.textContent = fakeUrl; 
  fakeLinkContainer.style.display = 'block'; 

  alert('QR code generated! Scan it to see the fake URL as a clickable link.');
});