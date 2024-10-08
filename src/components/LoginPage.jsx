import React from "react";
import './css/loginpage.css'

export default function Login() {

  const IfClick = async () => {
    const client_id = "300753c1dcc4469db4efb8353e91c9c7";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      // user information
      "user-read-private",
      "user-read-email",
      // playback control
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      // playback history
      "user-read-recently-played",
      "user-top-read",
      // additional scopes
      "playlist-read-private",
      "playlist-modify-public"
    ];
    
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="loginpage">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <h1>Welcome to Spotify Clone</h1>
      <h5>Connect to your Spotify account to get started</h5>
      <button onClick={IfClick}>Log In</button>
    </div>
  );
}

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100vw;
//   background: linear-gradient(170deg, #1db954, #191414);
//   img {
//     height: 20vh;
//   }
//   Button {
//     padding: 0.8rem 4rem;
//     border-radius: 5rem;
//     background-color: #1db954;
//     color: #fff;
//     border: none;
//     font-size: 1.1rem;
//     cursor: pointer;
//     transition: background-color 0.3s;

//     &:hover {
//       background-color: #1ed760;
//     }
//   }
// `;


// const Title = styled.h1`
//   color: #fff;
//   margin-top: 2rem;
//   margin-bottom: 0rem;

// `;

// const Subtitle = styled.p`
//   color: #b3b3b3;
//   margin-bottom: 1rem;
// `;

