/*eslint-disable*/
import React from 'react';
import { MdClose } from 'react-icons/md';
import './LoginModal.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';

// 부모로부터 받아오는 함수 등은 무조건 interface로 정의해야 오류가 나지 않는다.
interface Props {
  handleLoginModalOn: () => void;
}

const LoginModal: React.FC<Props> = (props: Props) => {
  return (
    <div className="wholeLoginModalWrapper">
      <div className="loginModalGreyBg"></div>
      <div className="loginPopup">
        <MdClose className="mdClose" onClick={props.handleLoginModalOn} />
        <div className="loginPopupLogo"></div>
        <div className="oauthLoginWrapper">
          <GoogleLogin
            className="googleLogin oauthLoginBox"
            clientId={
              '620537129878-as1es65697f5g5n8olntfls9j5ea0v4g.apps.googleusercontent.com'
            }
            onSuccess={console.log}
            onFailure={console.error}
            cookiePolicy={'single_host_origin'}
            style={{}}
          />
          <KaKaoLogin
            className="kakaoLogin oauthLoginBox"
            token={'d70c5c740eddb6109ed33a6fecbb1fd3'}
            onSuccess={console.log}
            onFail={console.error}
            style={{}}
          />
          <FacebookLogin
            appId="348088729732348"
            autoLoad={false}
            fields="name,email,picture"
            onClick={console.log}
            cssClass="facebookLogin oauthLoginBox"
            callback={(response) => console.log(response)}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
