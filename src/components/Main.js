import { useEffect, useState } from "react";
import { Router, Switch } from "react-router-dom";
import Index from "../pages/Index"
import Show from "../pages/Show"

const Home = (props) => {
  //setting the state
  const [bookmark, setBookmark] = useState(null)

//url
const URL = "http://localhost:4000/bookmark/";


//get data
const getBookmark = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  setBookmark(data)
};

//create bookmark data => post request
const createBookmark = async (bookmarked) => {
  //post request to create bookmark
  await fetch(URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmarked)
  });
  //update the list of all bookmarks
  getBookmark()
};

//update => put request
const updateBookmark = async (bookmarked, id) => {
  //request to update bookmarks
  await fetch(URL + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookmarked)
  })
  getBookmark()
};

//delete => delete request
const deleteBookmark = async (id) => {
  //make delete request
  await fetch(URL + id, {
    method: "delete"
  })
  getBookmark()
};

useEffect(() => getBookmark(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index bookmark={bookmark} createBookmark={createBookmark} />
        </Route>
        <Route 
          path="/bookmark/:id"
          render={(rp) => (
            <Show 
            {...rp}
            bookmark={bookmark}
            updateBookmark={updateBookmark}
            deleteBookmark={deleteBookmark}
          />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;