import React from "react";
const NewsItem =(props)=> {

    let { title, description, imageUrl, newsUrl, author, source, date } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: '0',
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https:th.bing.com/th/id/R.5e2dd5ba628ba7d1a3736c608e033f1e?rik=3QWZYmVprnS1zw&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fblue-mountains-3-qhd.jpg&ehk=67w1B3QG7ZZFuFbWDETKU1grdXMPOc%2fqWIVYJa6Jzjo%3d&risl=&pid=ImgRaw&r=0"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div className="my-3">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
