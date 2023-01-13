import { Article } from "../../types/article";
import { ArticlesActionTypes } from "../../types/store";
import reducer from "../../store/Articles/reducer";


describe("Articles reducer", () => {
  it("Should to set loading as true", () => {
    expect(
      reducer(
        {
          loading: true,
          err: "",
          data: [],
        },
        {
          type: ArticlesActionTypes.FETCH_ARTICLES,
        }
      )
    ).toEqual({
      loading: true,
      err: "",
      data: [],
    });
  });

  it("should to set articles data", () => {
    expect(
      reducer(
        {
          loading: false,
          err: "",
          data: data,
        },
        {
          type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
          payload: data,
        }
      )
    ).toEqual({
      loading: false,
      err: "",
      data: data,
    });
  });

  it("should to set error and reset list", () => {
    expect(
      reducer(
        {
          loading: false,
          err: "Server error",
          data: [],
        },
        {
          type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
          payload: "Server error",
        }
      )
    ).toEqual({
      loading: false,
      err: "Server error",
      data: [],
    });
  });
});

const data: Article[] = [
  {
    "id": 17872,
    "title": "NASA to Announce Major Eco-Friendly Aviation Project Update",
    "url": "http://www.nasa.gov/press-release/nasa-to-announce-major-eco-friendly-aviation-project-update",
    "imageUrl": "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb_0.jpg?itok=mrBnB_c9",
    "newsSite": "NASA",
    "summary": "Media are invited to a news conference with NASA Administrator Bill Nelson and other agency leadership at 10 a.m. EST on Wednesday, Jan. 18, at NASA Headquarters in Washington.",
    "publishedAt": "2023-01-12T22:12:00.000Z",
    "updatedAt": "2023-01-12T22:12:27.404Z",
    "featured": false,
    "launches": [],
    "events": []
  }
];
