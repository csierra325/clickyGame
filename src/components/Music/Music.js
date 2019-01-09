import React from "react";
import "./Music.css";


const Music = props =>({
    render: function() {
      var videoSrc = "https://www.youtube.com/embed/" + 
          this.props.video + "?autoplay=" + 
          this.props.autoplay + "&rel=" + 
          this.props.rel + "&modestbranding=" +
          this.props.modest;
      return (
        <div className="container">
          <iframe className="player" type="text/html" width="10%" height="20%"
    src={videoSrc}
    frameborder="0"/>
        </div>
      );
    }
  });


  
export default Music;


