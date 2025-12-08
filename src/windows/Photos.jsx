import WindowsControls from "#components/WindowsControls";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React, { useState } from "react";

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { openWindow } = useWindowStore();

  const handleImageClick = (img) => {
    setSelectedImage(img);
    openWindow("imgfile", { image: img });
  };

  return (
    <>
      <div id="window-header">
        <WindowsControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Collections</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id} className="active">
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Grid */}
        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id} onClick={() => handleImageClick(img)}>
                <img
                  src={img}
                  alt={`Gallery ${id}`}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
