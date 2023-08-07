import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./BookComponent.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function BookComponent(props) {
  return (
    <>
      {/* Adding Google Fonts for Lato */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <HTMLFlipBook width={300} height={500} showCover={true}>
        <Page number="1">
          olestias eum dicta at alias perspiciatis culpa ex, aperiam quod
          temporibus laborum quasi dolore
        </Page>
        <Page number="2">Page text</Page>
        <Page number="3">Page text</Page>
        <Page number="4">Page text</Page>
      </HTMLFlipBook>
    </>
  );
}

export default BookComponent;
