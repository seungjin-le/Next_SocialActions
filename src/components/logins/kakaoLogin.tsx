import React from 'react';

const KakaoLogin = () => {



  Kakao.init('e1610e7956117e415e82be6807b0cfac'); // 사용하려는 앱의 JavaScript 키 입력
    Kakao.Auth.authorize({
      redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
    });
  }

    // 아래는 데모를 위한 UI 코드입니다.
    displayToken()
    function displayToken() {
    var token = getCookie('authorize-access-token');

    if(token) {
    Kakao.Auth.setAccessToken(token);
    Kakao.Auth.getStatusInfo()
    .then(function(res) {
    if (res.status === 'connected') {
    document.getElementById('token-result').innerText
    = 'login success, token: ' + Kakao.Auth.getAccessToken();
  }
  })
    .catch(function(err) {
    Kakao.Auth.setAccessToken(null);
  });
  }
  }

    function getCookie(name) {
    var parts = document.cookie.split(name + '=');
    if (parts.length === 2) {return parts[1].split(';')[0];}
  }

  return (
    <div>
      <a id="kakao-login-btn" href="javascript:loginWithKakao()">
        <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
             alt="카카오 로그인 버튼"/>
      </a>
      <p id="token-result"></p>

    </div>
  );
};

export default KakaoLogin;
