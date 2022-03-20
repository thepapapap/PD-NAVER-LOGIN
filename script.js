var params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
var clientId = params.clientId;
var callbackUrl = decodeURIComponent(params.callbackUrl);
const naverLogin = new naver.LoginWithNaverId({
  clientId: clientId,
  callbackUrl: callbackUrl,
  isPopup: false,
  loginButton: { color: "green", type: 3, height: "0" },
});
naverLogin.init();
document.getElementsByTagName("a")[0].click();
