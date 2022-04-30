import { useState, useEffect } from "react";

function Research() {
  const [communityXml, setCommunityXml] = useState("");
  useEffect(()=>{
    initCommunity()
  })
  const initCommunity = () => {
    return fetch("https://zoey-czy.github.io/liuhui/data/community.xml")
      .then((res) => res.text())
      .then((html) => {
        setCommunityXml(html);
      });
  };
    return (
     <div>
       <div dangerouslySetInnerHTML={{ __html: communityXml }} />
     </div>
    );
  }
export default Research;
