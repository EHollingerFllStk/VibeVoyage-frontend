import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import VideosPage from "../pages/VideosPage"

function Videos(props) {
  const [ video, setVideo ] = useState(null);

  const URL = "https://vibe-voyage.herokuapp.com/videos";

  const getVideo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setVideo(data);
  }

  const createVideo = async video => {
    
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(video),
    });
 //Update Video Directory
    getVideo();
  }

  const updateVideo = async (video, id) => {
    // makes request to get video
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(video),
    });

    getVideo();
  }

  const deleteVideo = async id => {
    
    await fetch(URL + id, {
      method: "DELETE",
    })
    
    getVideo();
  }

  useEffect(() => {getVideo()}, []);

  return (
    <main>
      <Switch>
        {/* 
          <Index video={video} createVideo={createVideo} />
        </Route> */}
        <Route path="/Video">
         {/* // path= “/Video/:id" */}
         {/* path= "/Video/:id"
          element={ */}
            <VideosPage
              video={video}
              updateVideo={updateVideo}
              deleteVideo={deleteVideo}
              createVideo={createVideo}
              
            />
        </Route>
      </Switch>
    </main>
  );
}

export default Videos;
