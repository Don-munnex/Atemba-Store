import "./index.css";
import "../src/components/major"
// import DarkModeToggle from "../src/components/major";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/imageslider";
import PhotoGrid from "./components/PhotoGrid";


const photos = [
  { id: 1, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 1" },
  { id: 2, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 2" },
  { id: 3, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 3" },
  { id: 4, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 4" },
  { id: 5, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 5" },
  { id: 6, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 6" },
  { id: 7, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 7" },
  { id: 8, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 8" },
  { id: 9, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 9" },
  { id: 10, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 10" },
  { id: 11, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 11" },
  { id: 12, url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", alt: "Photo 12" },
];

function App() {

  return (
    <div className="min-h-screen bg-black">
       <div>
       <NavBar />
       <ImageSlider />
       </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      <div className="mt-20">
      <PhotoGrid photos={photos} />
      </div>
    </div>
  );
};

export default App;
