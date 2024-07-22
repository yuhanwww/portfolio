import React from "react";
import { Image } from "../Gallery/image";

const images = [
    {title:"name",
        link:"../../assets/gallery/artworks/seat.jpg",},
    {title:"name",
        link:"../../assets/gallery/digital/svg_bg_p2.svg",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/barnsley.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/line_art.jpeg",},
    {title:"name",
        link:"../../assets/gallery/digital/DTI_blender.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/pumpkin.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/fans.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/Delaunay_length_100_600_xy.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/box.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/seals.jpg",},
    {title:"name",
        link:"../../assets/gallery/digital/Poster_ Lantern Festival.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/season.jpg",},
    {title:"name",
        link:"../../assets/gallery/artworks/nurseshavehair.JPG"},

    {title:"name",
        link:"../../assets/gallery/artworks/fans_draw.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/tda_megatile_100_600_xy.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/crochet_bag.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/faces.png",},
    {title:"name",
        link:"../../assets/gallery/digital/hw8-screenshot.png",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/sc.JPG",},
    {title:"name",
        link:"../../assets/gallery/artworks/my_collection.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/svg_bg_p6e.svg",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/poster.jpg",},
    {title:"name",
        link:"../../assets/gallery/artworks/campus_map.jpg",},
    {title:"name",
        link:"../../assets/gallery/digital/svg_prototype.svg",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/cats.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/halloween.PNG",},
    
    {title:"name",
        link:"../../assets/gallery/artworks/xin_jing.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/hw2_ creative design.png",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/hammer.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/map.jpeg",},
    {title:"name",
        link:"../../assets/gallery/digital/game_Night.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/vessel.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/tulip.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/tda_perdiodicity_100_300_hexagon!.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/compcase.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/boymother1.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/svg_bg_p6b.svg",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/bag1.JPG"},

    {title:"name",
        link:"../../assets/gallery/artworks/boymother2.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/Chess.png",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/tooth.JPG",},
    {title:"name",
        link:"../../assets/gallery/artworks/goofy.jpeg",},
    {title:"name",
        link:"../../assets/gallery/digital/gradients.svg",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/hat.jpeg",},
    {title:"name",
        link:"../../assets/gallery/artworks/xingshu.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/delaunay_angle_100_600_xy.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/polarcase.JPG",},
    {title:"name",
        link:"../../assets/gallery/artworks/black_space.JPG",},
    {title:"name",
        link:"../../assets/gallery/digital/chiny.PNG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/smile.JPG",},
    {title:"name",
        link:"../../assets/gallery/handicrafts/fish.JPG"}];

const Gallery = () => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
            <h2>Gallery</h2>
        </div>
        <div className="row">
            <div className="portfolio-items">
            {images.map((image,index) => (
                <div
                key={`${image.title}-${index}`}
                className="col-sm-6 col-md-4 col-lg-4"
                >
                <Image
                    title={image.title}
                    Image={image.link}
                />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;