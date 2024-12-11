// URL 파라미터 추출
const params = new URLSearchParams(window.location.search);
const clientId = params.get("clientId");
const callbackUrl = decodeURIComponent(params.get("callbackUrl"));
const returnedState = params.get("state");
const storedState = localStorage.getItem("naver_state");
if (returnedState !== storedState) {
  console.error("Invalid state detected");
  alert("State mismatch detected. Please try again.");
} else {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: clientId,
    callbackUrl: callbackUrl,
    isPopup: false,
    loginButton: { color: "green", type: 3, height: "0" },
  });
  naverLogin.init();
  document.getElementsByTagName("a")[0].click();
}
