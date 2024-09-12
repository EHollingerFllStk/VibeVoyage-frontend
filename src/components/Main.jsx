import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import NotesPage from "../pages/NotesPage";
import VideosPage from "../pages/VideosPage";
import AboutPage from "../pages/AboutPage";
import EmbedVideo from "./EmbedVideos";


function Main(props) {
  const [notes, setNotes] = useState(null);

  const URL = "https://vibe-voyage.herokuapp.com/";

  const getNotes = async () => {
    const response = await fetch(URL + "notes/");
    const data = await response.json();
    setNotes(data);
  };

  const createNotes = async (notes) => {

    await fetch(URL + "notes/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(notes),
    });

    getNotes();
  };

  const updateNotes = async (note, id) => {
    await fetch(URL + "notes/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(note),
    })
    getNotes();
  }

  const deleteNotes = async (id) => {
    await fetch(URL + "notes/" + id, {
      method: "DELETE",
    })
    getNotes();
  }
  const [video, setVideo] = useState(null);

  const getVideo = async () => {
    const response = await fetch(URL + "videos/");
    const data = await response.json();
    setVideo(data);
  };

  const createVideo = async video => {

    await fetch(URL + "videos/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(video),
    });
    //Update Video Directory
    getVideo();
  }

  const deleteVideo = async id => {

    await fetch(URL + "videos/" + id, {
      method: "DELETE",
    })

    getVideo();
  }
  useEffect(() => {
    getNotes();
    getVideo();
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/notes">
          <NotesPage
            notes={notes}
            createNotes={createNotes}
            updateNotes={updateNotes}
            deleteNotes={deleteNotes}
          />
        </Route>
        <Route
          path="/notes/:id"
          render={(rp) => {
            return (
              <NotesPage
                updateNotes={updateNotes}
                deleteNotes={deleteNotes}
                {...rp}
              />
            )
          }}
        />
        <Route path="/meditation">
         <EmbedVideo embedId="pn6sTK6a3Ig" />
          <VideosPage
            video={video}
            deleteVideo={deleteVideo}
            createVideo={createVideo} />

        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;

